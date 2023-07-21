export interface Experience {
  date: string
  company?: string,
  position: string,
  info: string
  tags: string[]
}

export interface ExpItemProps {
  data: Experience
}

