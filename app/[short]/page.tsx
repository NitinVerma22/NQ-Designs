// app/[short]/page.tsx
import links from '../data/links.json'
import { redirect, notFound } from 'next/navigation'

export default function ShortRedirect({ params }: any) {
  const url = (links as Record<string, string>)[params.short]

  if (url) {
    redirect(url)
  }

  notFound()
}
