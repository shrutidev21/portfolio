import { useEffect, useState } from 'react'
export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '')
  useEffect(() => { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-35% 0px -55% 0px' }); ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) }); return () => observer.disconnect() }, [ids])
  return active
}
