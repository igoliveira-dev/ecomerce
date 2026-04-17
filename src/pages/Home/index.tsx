import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoandingSoon } = useGetSoonQuery()

    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="on-sale"
          isLoading={isLoadingSale}
        />
        <ProductsList
          games={soonGames}
          title="Em breve"
          background="black"
          id="coming-soon"
          isLoading={isLoandingSoon}
        />
      </>
    )
}

export default Home
