import { useEffect, useRef } from 'react'

export default function Canvas3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Configurar canvas
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Partículas 3D
    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
      size: number

      constructor() {
        this.x = Math.random() * canvas.width - canvas.width / 2
        this.y = Math.random() * canvas.height - canvas.height / 2
        this.z = Math.random() * 1000
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
        this.vz = Math.random() * 5 + 2
        this.size = Math.random() * 3 + 1
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.z -= this.vz

        if (this.z <= 0) {
          this.z = 1000
          this.x = Math.random() * canvas.width - canvas.width / 2
          this.y = Math.random() * canvas.height - canvas.height / 2
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const scale = 500 / (this.z + 500)
        const x = canvas.width / 2 + this.x * scale
        const y = canvas.height / 2 + this.y * scale
        const size = this.size * scale
        const opacity = Math.min(scale, 1)

        ctx.fillStyle = `rgba(147, 197, 253, ${opacity * 0.8})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Criar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animação
    let animationId: number
    const animate = () => {
      // Limpar com gradiente
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#0f172a')
      gradient.addColorStop(1, '#1e293b')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Atualizar e desenhar partículas
      particles.forEach((particle) => {
        particle.update()
        particle.draw(ctx)
      })

      // Desenhar linhas entre partículas próximas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dz = particles[i].z - particles[j].z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < 200) {
            const scale1 = 500 / (particles[i].z + 500)
            const scale2 = 500 / (particles[j].z + 500)
            const x1 = canvas.width / 2 + particles[i].x * scale1
            const y1 = canvas.height / 2 + particles[i].y * scale1
            const x2 = canvas.width / 2 + particles[j].x * scale2
            const y2 = canvas.height / 2 + particles[j].y * scale2

            const opacity = (1 - distance / 200) * 0.3
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{
        background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
      }}
    />
  )
}
