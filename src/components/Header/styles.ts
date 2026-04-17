import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  position: relative;

  a,
  span {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  img {
    display: block;
    width: 72px;
    height: 36px;
    transform: scale(1.4);
    transform-origin: center;
    margin-left: 8px;
  }

  .carrinho {
    width: 16px;
    height: auto;
    margin-left: 16px;
  }

  p {
    font-weight: bold;
    font-size: 16px;
  }

  h1 {
    line-height: 0;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;


    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const NavMobile = styled.nav`
  display: none;
  margin-top: 24px;

  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`
export const CartButton = styled.span`
  display: flex;

  span {
    margin-left: 6px;
  }


   @media (max-width: ${breakpoints.tablet}) {
      span {
        display: none;
      }
    }
`
export const Hamburguer = styled.div`
  width: 32px;
  cursor: pointer;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
