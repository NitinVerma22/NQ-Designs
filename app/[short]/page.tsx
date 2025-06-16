// app/[short]/page.tsx
import links from '../data/links.json'
import { redirect, notFound } from 'next/navigation'

type Props = {
  params: {
    short: string
  }
}

export default function ShortRedirect({ params }: Props) {
  const url = (links as Record<string, string>)[params.short]

  if (url) {
    redirect(url)
  }

  notFound()
}
