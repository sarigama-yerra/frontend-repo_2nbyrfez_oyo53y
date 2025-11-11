import { Outlet, Link, NavLink } from 'react-router-dom'

export default function AppShell() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50">
      <header className="sticky top-0 z-10 backdrop-blur border-b border-black/5 bg-white/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">OS</div>
            <div>
              <Link to="/" className="text-xl font-semibold text-gray-900">OpenSource Hub</Link>
              <p className="text-xs text-gray-500">Share datasets, tools and code</p>
            </div>
          </div>
          <nav className="flex gap-2 text-sm">
            <NavLink to="/" className={({isActive})=>`px-3 py-1.5 rounded-md ${isActive? 'bg-white shadow text-gray-900':'text-gray-600 hover:text-gray-900'}`}>Landing</NavLink>
            <NavLink to="/app" className={({isActive})=>`px-3 py-1.5 rounded-md ${isActive? 'bg-white shadow text-gray-900':'text-gray-600 hover:text-gray-900'}`}>App</NavLink>
            <NavLink to="/test" className={({isActive})=>`px-3 py-1.5 rounded-md ${isActive? 'bg-white shadow text-gray-900':'text-gray-600 hover:text-gray-900'}`}>Test</NavLink>
          </nav>
        </div>
      </header>

      <Outlet />
    </div>
  )
}
