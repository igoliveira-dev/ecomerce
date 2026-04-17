import { TagContainer } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
  isRelative?: boolean
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
