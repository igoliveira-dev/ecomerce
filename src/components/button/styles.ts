import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
  ${(props) => (props.variant === 'primary' ? colors.pink : colors.white)};
  color: ${colors.white};
  background-color: ${(props) =>
  props.variant === 'primary' ? colors.pink : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  // margin-bottom: 16px;
  position: absolute;
  // top: 140px;
  // left: 520px;
  border-radius: 8px;
  width: 107px;
`
