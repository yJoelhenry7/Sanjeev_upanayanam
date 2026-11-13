import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Copy, Link2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

function parseNames(raw) {
  return [
    ...new Set(
      raw
        .split(/[,|\n]+/)
        .map((n) => n.trim().replace(/\s+/g, ' '))
        .filter(Boolean),
    ),
  ]
}

function formatName(name) {
  return name.replace(/\b\w/g, (c) => c.toUpperCase())
}

function inviteUrl(origin, name) {
  const url = new URL(origin)
  url.searchParams.set('name', name)
  return url.toString()
}

export function LinksGenPage() {
  const [raw, setRaw] = useState('')
  const [copied, setCopied] = useState(null)
  const origin = typeof window !== 'undefined' ? window.location.origin : ''

  const links = useMemo(() => {
    return parseNames(raw).map((name) => {
      const display = formatName(name)
      return {
        name: display,
        url: inviteUrl(origin || 'http://localhost:5173', display),
      }
    })
  }, [raw, origin])

  async function copyText(text, key) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      window.setTimeout(() => setCopied((c) => (c === key ? null : c)), 1600)
    } catch {
      // ignore
    }
  }

  function copyAll() {
    const block = links.map((l) => `${l.name}\n${l.url}`).join('\n\n')
    copyText(block, 'all')
  }

  return (
    <div className="min-h-screen bg-ivory px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium tracking-wide text-gold uppercase">
              Invite tools
            </p>
            <h1 className="mt-1 font-display text-3xl font-medium text-forest sm:text-4xl">
              Link generator
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
              Paste guest names separated by commas. Each person gets a personal
              invite link with their name.
            </p>
          </div>
          <Button asChild variant="outline" size="sm" className="shrink-0">
            <Link to="/">Home</Link>
          </Button>
        </div>

        <label htmlFor="names" className="block text-sm font-medium text-ink">
          Names
        </label>
        <textarea
          id="names"
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          rows={5}
          placeholder="Tarun, Priya, Ananya, Rohan"
          className="mt-2 w-full resize-y rounded-md border border-gold/30 bg-white/70 px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/30"
        />

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <p className="text-sm text-muted">
            {links.length === 0
              ? 'No names yet'
              : `${links.length} link${links.length === 1 ? '' : 's'}`}
          </p>
          {links.length > 0 && (
            <Button type="button" size="sm" onClick={copyAll}>
              {copied === 'all' ? (
                <>
                  <Check className="size-4" />
                  Copied all
                </>
              ) : (
                <>
                  <Copy className="size-4" />
                  Copy all
                </>
              )}
            </Button>
          )}
        </div>

        {links.length > 0 && (
          <ul className="mt-6 space-y-3">
            {links.map((item) => (
              <li
                key={item.url}
                className="flex flex-col gap-2 rounded-md border border-gold/25 bg-white/60 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <div className="min-w-0">
                  <p className="font-display text-lg text-forest">{item.name}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-0.5 block truncate text-xs text-leaf underline-offset-2 hover:underline sm:text-sm"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Link2 className="size-3.5 shrink-0" />
                      {item.url}
                    </span>
                  </a>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="shrink-0 self-start sm:self-center"
                  onClick={() => copyText(item.url, item.url)}
                >
                  {copied === item.url ? (
                    <>
                      <Check className="size-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" />
                      Copy
                    </>
                  )}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
