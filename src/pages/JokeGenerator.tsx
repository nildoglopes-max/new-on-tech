import { useState, useEffect } from 'react'
import Canvas3D from '@/components/Canvas3D'

interface Joke {
  id: number
  type: string
  setup: string
  delivery: string
  joke?: string
}

export default function JokeGenerator() {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [favorites, setFavorites] = useState<Joke[]>([])

  // Carregar favoritos do localStorage
  useEffect(() => {
    const saved = localStorage.getItem('favoriteJokes')
    if (saved) {
      setFavorites(JSON.parse(saved))
    }
  }, [])

  // Salvar favoritos no localStorage
  useEffect(() => {
    localStorage.setItem('favoriteJokes', JSON.stringify(favorites))
  }, [favorites])

  const fetchJoke = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke')
      if (!response.ok) throw new Error('Erro ao buscar piada')
      const data: Joke = await response.json()
      setJoke(data)
    } catch (err) {
      setError('Não foi possível carregar a piada. Tente novamente!')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const addToFavorites = () => {
    if (joke && !favorites.some((fav) => fav.id === joke.id)) {
      setFavorites([...favorites, joke])
    }
  }

  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter((fav) => fav.id !== id))
  }

  const isFavorited = joke ? favorites.some((fav) => fav.id === joke.id) : false

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary relative overflow-hidden">
      {/* Canvas 3D Background */}
      <Canvas3D />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        {/* Title */}
        <div className="text-center mb-12 animate-slideUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              😂 Gerador de Piadas
            </span>
          </h1>
          <p className="text-xl text-gray-300">Divirta-se com piadas aleatórias!</p>
        </div>

        {/* Joke Card */}
        <div className="max-w-2xl w-full mb-8">
          {joke ? (
            <div className="card border-2 border-yellow-400/50 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="text-6xl mb-6">😄</div>
                <div className="space-y-4">
                  {joke.setup && (
                    <>
                      <p className="text-2xl font-bold text-yellow-300">{joke.setup}</p>
                      <div className="border-t border-secondary my-4"></div>
                      <p className="text-2xl font-bold text-yellow-100">{joke.delivery}</p>
                    </>
                  )}
                  {joke.joke && <p className="text-2xl font-bold text-yellow-100">{joke.joke}</p>}
                </div>
              </div>
            </div>
          ) : (
            <div className="card border-2 border-accent/50 text-center py-12">
              <p className="text-gray-400 text-lg">Clique em "Nova Piada" para começar!</p>
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-2xl w-full mb-8 card border-2 border-red-500/50 bg-red-500/10">
            <p className="text-red-400 text-center">{error}</p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl w-full">
          <button
            onClick={fetchJoke}
            disabled={loading}
            className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="animate-spin">⏳</span>
                Carregando...
              </>
            ) : (
              <>
                <span>🎲</span>
                Nova Piada
              </>
            )}
          </button>

          {joke && (
            <button
              onClick={addToFavorites}
              disabled={isFavorited}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                isFavorited
                  ? 'bg-yellow-500/30 text-yellow-300 border-2 border-yellow-400 cursor-default'
                  : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-primary'
              }`}
            >
              <span>{isFavorited ? '⭐' : '☆'}</span>
              {isFavorited ? 'Favoritada' : 'Favoritar'}
            </button>
          )}
        </div>

        {/* Favorites Section */}
        {favorites.length > 0 && (
          <div className="max-w-2xl w-full mt-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-yellow-300">⭐ Minhas Favoritas ({favorites.length})</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {favorites.map((fav) => (
                <div key={fav.id} className="card group hover:bg-secondary/80 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      {fav.setup && (
                        <>
                          <p className="font-semibold text-yellow-300">{fav.setup}</p>
                          <p className="text-gray-300 text-sm mt-2">{fav.delivery}</p>
                        </>
                      )}
                      {fav.joke && <p className="font-semibold text-yellow-300">{fav.joke}</p>}
                    </div>
                    <button
                      onClick={() => removeFromFavorites(fav.id)}
                      className="ml-4 text-red-400 hover:text-red-300 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
