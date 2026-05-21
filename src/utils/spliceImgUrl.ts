const baseUrl = import.meta.env.VITE_API_BASE_URL

export function spliceImgUrl(url: string): string {
  return baseUrl + '/' + url
}
