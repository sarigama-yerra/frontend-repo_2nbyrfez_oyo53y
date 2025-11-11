import { useMemo } from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  const baseUrl = useMemo(() => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-30 w-full border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white grid place-items-center font-bold">OS</div>
            <span className="text-lg font-semibold text-gray-900">OpenSource Hub</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Características</a>
            <a href="#contribute" className="text-gray-600 hover:text-gray-900">Contribuir</a>
            <Link to="/test" className="text-gray-600 hover:text-gray-900">Estado</Link>
            <Link to="/app" className="inline-flex items-center rounded-lg bg-gray-900 px-3 py-1.5 text-white hover:bg-black">Explorar</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-sky-50 to-white">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Comparte y descubre datasets, herramientas y snippets de código.
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Una plataforma abierta para impulsar la colaboración. Encuentra recursos útiles, comparte tus proyectos y construyamos juntos el futuro del software libre.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/app" className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-700">
                Explorar recursos
              </Link>
              <a href="#contribute" className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 font-medium hover:bg-gray-50">
                Comenzar a contribuir
              </a>
              <Link to="/test" className="inline-flex items-center rounded-lg bg-gray-900 px-5 py-3 text-white font-medium hover:bg-black">
                Ver estado del backend
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Backend: {baseUrl}
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow/50 shadow-gray-200">
              <div className="rounded-xl bg-gray-900 text-gray-100 p-4 text-sm font-mono">
                <div className="text-xs text-gray-400">$ curl -X POST {baseUrl}/api/snippets</div>
                <pre className="mt-2 whitespace-pre-wrap">{{`{
  "title": "Quick sort in JS",
  "description": "A compact, readable quicksort.",
  "language": "javascript",
  "code": "function q(a){if(a.length<2)return a;const p=a[0];return [...q(a.slice(1).filter(x=>x<=p)),p,...q(a.slice(1).filter(x=>x>p))]}"
}`}}</pre>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block h-28 w-28 rounded-2xl bg-emerald-200/70 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-10 border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-2xl font-bold text-gray-900">Abierto</p>
            <p className="text-xs text-gray-600">Código y datos libres</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-2xl font-bold text-gray-900">Colaborativo</p>
            <p className="text-xs text-gray-600">Comunidad primero</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-2xl font-bold text-gray-900">Persistente</p>
            <p className="text-xs text-gray-600">Base de datos real</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-2xl font-bold text-gray-900">Escalable</p>
            <p className="text-xs text-gray-600">API moderna</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Explora por categorías</h3>
            <p className="mt-2 text-sm text-gray-600">Filtra por etiquetas, busca por texto y alterna entre datasets, herramientas y código.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Contribuye con un POST</h3>
            <p className="mt-2 text-sm text-gray-600">Publica nuevos recursos mediante la API con validación de esquemas.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Código destacado</h3>
            <p className="mt-2 text-sm text-gray-600">Previsualiza snippets con lenguaje y formato legible.</p>
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section id="contribute" className="py-16 border-t border-black/5">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-gray-900">Cómo contribuir</h2>
          <p className="mt-2 text-gray-700">Envía un JSON a estos endpoints. La validación se basa en esquemas y los datos se almacenan de forma persistente.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm font-semibold text-gray-900">Datasets</p>
              <code className="mt-2 block text-xs bg-gray-900 text-gray-100 rounded p-2">POST {baseUrl}/api/datasets</code>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm font-semibold text-gray-900">Herramientas</p>
              <code className="mt-2 block text-xs bg-gray-900 text-gray-100 rounded p-2">POST {baseUrl}/api/tools</code>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm font-semibold text-gray-900">Snippets</p>
              <code className="mt-2 block text-xs bg-gray-900 text-gray-100 rounded p-2">POST {baseUrl}/api/snippets</code>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-600">
            <p>Consulta los esquemas en <span className="font-mono">{baseUrl}/schema</span> y prueba la conexión en la página de estado.</p>
          </div>
          <div className="mt-8 flex gap-3">
            <Link to="/app" className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700">Ir a la app</Link>
            <Link to="/test" className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 font-medium hover:bg-gray-50">Ver estado</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>Hecho con ❤️ para la comunidad open source.</p>
          <div className="flex items-center gap-4">
            <Link to="/app" className="text-gray-700 hover:text-gray-900">Explorar</Link>
            <a href="#contribute" className="text-gray-700 hover:text-gray-900">Contribuir</a>
            <Link to="/test" className="text-gray-700 hover:text-gray-900">Estado</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
