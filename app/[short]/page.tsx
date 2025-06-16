// app/[short]/page.tsx
import { redirect, notFound } from 'next/navigation'
import links from '../data/links.json'

type PageProps = {
  params: {
    short: string
  }
}

export default function ShortRedirect({ params }: PageProps) {
  const shortUrl = params.short
  const destination = (links as Record<string, string>)[shortUrl]

  if (destination) {
    redirect(destination)
  }

  notFound()
}
