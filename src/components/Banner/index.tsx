import Button from '../button'
import Loader from '../Loader'

import { useGetFeatureGameQuery } from '../../services/api'
import { parseToBrl } from '../../utils'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <S.TagBanner size="big" isRelative>
          Destaque do dia
        </S.TagBanner>
        <S.Title>{game?.name}</S.Title>
        <S.Prices>
          De <span>{parseToBrl(game?.prices.old)}</span> <br />
          Por apenas {parseToBrl(game?.prices.current)}
        </S.Prices>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
