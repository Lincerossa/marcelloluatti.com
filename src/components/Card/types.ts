export type TCardProps = {
  image: {
    src: string
    description?: string
    alt?: string
  }
  supertitle: string
  title: string
  tags: string[]
  subtitle: string
  layout?: 'auto'
}
