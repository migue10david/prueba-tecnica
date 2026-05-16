export type OptionCard = {
  id: string
  title: string
  eyebrow?: string
  description: string
  subdescription: string
  image?: string
  imageAlt?: string
}

export type PreparationStep = {
  id: string
  label: string
  image: string
  imageAlt: string
  visualClassName: string
  imageClassName?: string
}