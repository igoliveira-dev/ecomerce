import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'

import logo from '../../assets/images/logo.png'
import cartIcon from '../../assets/images/carrinho.svg'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [openHamburguer, setOpenHamburguer] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
     <S.HeaderRow>
       <div>
        <S.Hamburguer onClick={() => setOpenHamburguer(!openHamburguer)}>
          <span />
          <span />
          <span />
        </S.Hamburguer>
        <Link to="/">
        <h1>
          <img src={logo} alt="Logo" />
        </h1>
        </Link>
        <nav>
          <S.Links>
            <S.LinkItem>
              <Link title='Clique aqui para acessar a página de categorias' to="/categories">Categorias</Link>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink title='Clique aqui para acessar a página de categorias' to="/#coming-soon">Categorias</HashLink>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink title='Clique aqui para acessar a página de promoções' to="/#on-sale">Promoções</HashLink>
            </S.LinkItem>
          </S.Links>
        </nav>
      </div>
      <S.CartButton role='button' onClick={openCart} as={Link} to={'/'}>
        {items.length} <span> - produto(s)</span>
        <img className="carrinho" src={cartIcon} alt="Carrinho" />
      </S.CartButton>
     </S.HeaderRow>
      <S.NavMobile className={openHamburguer ? 'is-open' : ''}>
          <S.Links>
            <S.LinkItem>
            <Link onClick={() => setOpenHamburguer(false)} title='Clique aqui para acessar a página de categorias' to="/categories">Categorias</Link>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink onClick={() => setOpenHamburguer(false)} title='Clique aqui para acessar a página de categorias' to="/#coming-soon">Categorias</HashLink>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink onClick={() => setOpenHamburguer(false)} title='Clique aqui para acessar a página de promoções' to="/#on-sale">Promoções</HashLink>
            </S.LinkItem>
          </S.Links>
        </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
