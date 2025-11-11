import { useEffect, useMemo, useState } from 'react'
import ResourceCard from './components/ResourceCard'

const TABS = [
  { key: 'datasets', label: 'Datasets' },
  { key: 'tools', label: 'Tools' },
  { key: 'snippets', label: 'Code' },
]

function useBackend() {
  const baseUrl = useMemo(() => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', [])
  return { baseUrl }
}

async function fetchJSON(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return res.json()
}

export default function App() {
  const { baseUrl } = useBackend()
  const [active, setActive] = useState('datasets')
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    async function load() {
      try {
        setLoading(true)
        setError('')
        const url = new URL(`${baseUrl}/api/${active}`)
        if (query) url.searchParams.set('q', query)
        if (tag) url.searchParams.set('tag', tag)
        const data = await fetchJSON(url.toString())
        setItems(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
    return () => controller.abort()
  }, [active, query, tag, baseUrl])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50">
      <header className="sticky top-0 z-10 backdrop-blur border-b border-black/5 bg-white/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">OS</div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">OpenSource Hub</h1>
              <p className="text-xs text-gray-500">Share datasets, tools and code</p>
            </div>
          </div>
          <nav className="flex gap-1 bg-gray-100 p-1 rounded-lg">
            {TABS.map(t => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${active===t.key ? 'bg-white shadow text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div className="sm:col-span-2 md:col-span-3 flex flex-wrap items-center gap-3">
            <input
              value={query}
              onChange={e=>setQuery(e.target.value)}
              placeholder={`Search ${active}...`}
              className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              value={tag}
              onChange={e=>setTag(e.target.value)}
              placeholder="Filter by tag"
              className="w-40 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <a
              href="/test"
              className="text-sm text-gray-600 underline hover:text-gray-900"
            >
              Check backend
            </a>
          </div>

          {loading && (
            <div className="sm:col-span-2 md:col-span-3 text-center text-gray-600">Loading...</div>
          )}
          {error && (
            <div className="sm:col-span-2 md:col-span-3 text-center text-red-600">{error}</div>
          )}
          {!loading && !error && items.length === 0 && (
            <div className="sm:col-span-2 md:col-span-3 text-center text-gray-600">
              Nothing here yet. Be the first to share a resource using the API endpoints.
            </div>
          )}

          {items.map((item) => (
            <ResourceCard key={item._id} type={active.slice(0,-1)} item={item} />
          ))}
        </div>

        <section className="mt-12 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">How to contribute</h2>
          <p className="mt-2 text-sm text-gray-600">Use these endpoints to add new items:</p>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>POST {baseUrl}/api/datasets</li>
            <li>POST {baseUrl}/api/tools</li>
            <li>POST {baseUrl}/api/snippets</li>
          </ul>
          <p className="mt-3 text-sm text-gray-600">Each request should be a JSON body matching the schema. See the schema at {baseUrl}/schema</p>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white/70">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-600 flex items-center justify-between">
          <span>Built for the open source community</span>
          <span>Backend: {baseUrl}</span>
        </div>
      </footer>
    </div>
  )
}
