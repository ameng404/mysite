import path from 'node:path'
import { getImage } from 'astro:assets'
import type { ImageMetadata } from 'astro'

/**
 * 将图片路径解析为绝对 URL，用于 og:image、JSON-LD 等
 */
export async function getAbsoluteImageUrl(
  src: string,
  basePath: string,
  site: string
): Promise<string | undefined> {
  if (!src || typeof src !== 'string' || !src.trim()) return undefined

  // 外部 URL 直接返回
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }

  // 以 / 开头的路径（public 目录）
  if (src.startsWith('/')) {
    return new URL(src, site).href
  }

  // 相对路径：通过 import.meta.glob 获取图片，再用 getImage 得到处理后的 URL
  // 与 ImageWrapper.astro 保持一致，basePath 格式为 "content/posts/xxx/"
  const files = import.meta.glob<ImageMetadata>('../content/**', { import: 'default' })
  const normalizedPath = path
    .normalize(path.join('..', basePath, src))
    .replace(/\\/g, '/')

  const file = files[normalizedPath]
  if (!file) return undefined

  try {
    const img = await file()
    const optimized = await getImage({ src: img })
    return new URL(optimized.src, site).href
  } catch {
    return undefined
  }
}
