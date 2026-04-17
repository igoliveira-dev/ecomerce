import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '../Tag'
import { ButtonContainer, ButtonLink } from '../button/styles'

export const BannerContainer = styled.div`
  margin: 0 auto;
  padding: 150px;
  display: block;
`

export const Image = styled.button`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  font-weight: bold;
  background-position: center;
  background-size: cover;
  margin: 0 auto;
  padding-top: 340px;
  position: relative;
  border: none;
  padding-bottom: 72px;


  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 100%;

    ${ButtonLink} {
      z-index: 1;
      position: absolute;
      right: 168px;
      bottom: 88px;

      &:hover {
        background-color: ${colors.pink};
      }
  }
  }

  &::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  content: '';
  }
}
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
  color: ${colors.white};
  position: absolute;
  left: 36px;
  z-index: 1;
`

export const Prices = styled.p`
  font-size: 24px;
  color: ${colors.white};
  right: 104px;
  z-index: 1;
  position: absolute;

  span {
    text-decoration: line-through;
  }
`

export const TagBanner = styled.div<Props>`
  background-color: ${colors.pink};
  color: #eee;
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
  display: inline-block;
  position: absolute;
  top: 24px;
  left: 32px;
  z-index: 1;
`
