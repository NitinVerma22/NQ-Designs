// app/[short]/page.tsx
import { redirect, notFound } from 'next/navigation'
import links from '../data/links.json'

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

export async function generateStaticParams() {
  return Object.keys(links).map((short) => ({
    short,
  }))
}
