import type { LucideIcon } from 'lucide-react'

export type ProjectCategory = 'Web Apps' | 'Marketplace' | 'Full-Stack'

export interface Project {
  title: string
  description: string
  tags: string[]
  highlights: string[]
  category: ProjectCategory
  color: string
}

export interface Experience {
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
}

export interface SkillGroup { title: string; skills: string[] }
export interface Service { title: string; description: string; icon: LucideIcon }
