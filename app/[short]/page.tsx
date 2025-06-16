// app/[short]/page.tsx
import { redirect, notFound } from 'next/navigation'
import links from '../data/links.json'
import type { PageProps } from 'next'

export default async function ShortRedirect({ params }: PageProps) {
  const url = (links as Record<string, string>)[params.short]

  if (url) {
    redirect(url)
  }

  notFound()
}
