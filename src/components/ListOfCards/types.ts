import { TCardProps } from '../Card/types'

interface TEnhancedCardProps extends TCardProps {
  slug: string
}

export type TListOfCardsProps = {
  items: TEnhancedCardProps[]
}
