import React from 'react'

function formatUrl(url) {
  try {
    const u = new URL(url)
    return u.host + u.pathname
  } catch {
    return url
  }
}

export default function ResourceCard({ type, item }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{item.name || item.title}</h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-3">{item.description}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {item.tags?.map((t) => (
              <span key={t} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">{t}</span>
            ))}
            {type === 'snippet' && item.language && (
              <span className="text-xs bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full border border-purple-100">{item.language}</span>
            )}
          </div>
        </div>
        <div className="text-right min-w-[140px] space-y-1">
          {item.url && (
            <a className="block text-sm text-blue-600 hover:underline" href={item.url} target="_blank" rel="noreferrer">
              Dataset: {formatUrl(item.url)}
            </a>
          )}
          {item.repo_url && (
            <a className="block text-sm text-blue-600 hover:underline" href={item.repo_url} target="_blank" rel="noreferrer">
              Repo: {formatUrl(item.repo_url)}
            </a>
          )}
          {item.homepage_url && (
            <a className="block text-sm text-blue-600 hover:underline" href={item.homepage_url} target="_blank" rel="noreferrer">
              Site: {formatUrl(item.homepage_url)}
            </a>
          )}
          {type === 'snippet' && item.code && (
            <details className="mt-2">
              <summary className="text-sm text-gray-700 cursor-pointer">View code</summary>
              <pre className="mt-1 max-h-48 overflow-auto rounded bg-gray-900 p-3 text-xs text-gray-100 whitespace-pre-wrap">{item.code}</pre>
            </details>
          )}
        </div>
      </div>
    </div>
  )
}
