// app/[short]/page.tsx

import { redirect, notFound } from 'next/navigation'
import links from '../data/links.json'

type PageProps = {
  params: {
    short: string
  }
}

export default async function ShortRedirect({ params }: PageProps) {
  const shortCode = params.short
  const destination = (links as Record<string, string>)[shortCode]

  if (destination) {
    redirect(destination)
  }

  notFound()
}
