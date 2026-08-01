import { useState, useEffect } from 'react'

interface TimeZone {
  name: string
  offset: number
  city: string
  flag: string
}

const timeZones: TimeZone[] = [
  { name: 'UTC', offset: 0, city: 'Londres', flag: '🇬🇧' },
  { name: 'EST', offset: -5, city: 'Nova York', flag: '🇺🇸' },
  { name: 'CST', offset: -6, city: 'Chicago', flag: '🇺🇸' },
  { name: 'PST', offset: -8, city: 'Los Angeles', flag: '🇺🇸' },
  { name: 'ART', offset: -3, city: 'Buenos Aires', flag: '🇦🇷' },
  { name: 'BRT', offset: -3, city: 'São Paulo', flag: '🇧🇷' },
  { name: 'WET', offset: 0, city: 'Lisboa', flag: '🇵🇹' },
  { name: 'CET', offset: 1, city: 'Paris', flag: '🇫🇷' },
  { name: 'EET', offset: 2, city: 'Cairo', flag: '🇪🇬' },
  { name: 'IST', offset: 5.5, city: 'Delhi', flag: '🇮🇳' },
  { name: 'CST', offset: 8, city: 'Pequim', flag: '🇨🇳' },
  { name: 'JST', offset: 9, city: 'Tóquio', flag: '🇯🇵' },
  { name: 'AEST', offset: 10, city: 'Sydney', flag: '🇦🇺' },
]

export default function DigitalClock() {
  const [time, setTime] = useState<string>('00:00:00')
  const [selectedZones, setSelectedZones] = useState<TimeZone[]>([
    timeZones[0],
    timeZones[1],
    timeZones[5],
    timeZones[9],
  ])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      setTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const getTimeInZone = (offset: number) => {
    const now = new Date()
    const utc = now.getTime() + now.getTimezoneOffset() * 60000
    const zoneTime = new Date(utc + 3600000 * offset)
    const hours = String(zoneTime.getHours()).padStart(2, '0')
    const minutes = String(zoneTime.getMinutes()).padStart(2, '0')
    const seconds = String(zoneTime.getSeconds()).padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
  }

  const toggleZone = (zone: TimeZone) => {
    setSelectedZones((prev) =>
      prev.some((z) => z.name === zone.name && z.offset === zone.offset)
        ? prev.filter((z) => !(z.name === zone.name && z.offset === zone.offset))
        : [...prev, zone]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary pt-24 pb-12 px-4">
      {/* Main Clock */}
      <div className="max-w-2xl mx-auto mb-16 animate-slideUp">
        <div className="card border-4 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
          <div className="text-center py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-300">Hora Local</h1>
            <div className="text-7xl md:text-8xl font-mono font-bold text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text mb-4 tracking-widest">
              {time}
            </div>
            <p className="text-gray-400 text-lg">
              {new Date().toLocaleDateString('pt-BR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Time Zones Grid */}
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">🌍 Fusos Horários</h2>

        {/* Selected Time Zones */}
        {selectedZones.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-cyan-300">⏰ Meus Relógios</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {selectedZones.map((zone) => (
                <div
                  key={`${zone.name}-${zone.offset}`}
                  className="card border-2 border-cyan-400/50 hover:border-cyan-400 group transition-all"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">{zone.flag}</div>
                    <h4 className="text-lg font-bold text-cyan-300 mb-1">{zone.city}</h4>
                    <p className="text-sm text-gray-400 mb-4">{zone.name}</p>
                    <div className="text-4xl font-mono font-bold text-cyan-400 mb-4">
                      {getTimeInZone(zone.offset)}
                    </div>
                    <button
                      onClick={() => toggleZone(zone)}
                      className="w-full py-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500/40 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Available Time Zones */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-blue-300">➕ Adicionar Fuso Horário</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {timeZones.map((zone) => {
              const isSelected = selectedZones.some(
                (z) => z.name === zone.name && z.offset === zone.offset
              )
              return (
                <button
                  key={`${zone.name}-${zone.offset}`}
                  onClick={() => toggleZone(zone)}
                  className={`p-4 rounded-lg font-semibold transition-all duration-300 border-2 ${
                    isSelected
                      ? 'bg-cyan-500/30 border-cyan-400 text-cyan-300'
                      : 'border-secondary/50 text-gray-400 hover:border-cyan-400/50 hover:text-cyan-300 bg-secondary/50'
                  }`}
                >
                  <div className="text-2xl mb-2">{zone.flag}</div>
                  <div className="text-sm font-bold">{zone.city}</div>
                  <div className="text-xs text-opacity-75">{zone.name}</div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="max-w-6xl mx-auto mt-16">
        <div className="card border-2 border-purple-400/50">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3 text-purple-300">💡 Dica</h3>
            <p className="text-gray-300">
              Clique nos fusos horários abaixo para adicionar ou remover de seus relógios favoritos. A hora é atualizada em tempo real!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
