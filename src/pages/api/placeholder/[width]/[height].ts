import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { width, height } = req.query
  const w = parseInt(width as string) || 400
  const h = parseInt(height as string) || 300
  try {
    const response = await fetch(`https://via.placeholder.com/${w}x${h}`)
    if (!response.ok) {
      res.status(response.status).end()
      return
    }
    const buffer = Buffer.from(await response.arrayBuffer())
    res.setHeader('Content-Type', response.headers.get('Content-Type') || 'image/png')
    res.setHeader('Cache-Control', 'public, max-age=86400')
    res.status(200).end(buffer)
  } catch (err) {
    res.status(500).end('Failed to fetch placeholder image')
  }
}
