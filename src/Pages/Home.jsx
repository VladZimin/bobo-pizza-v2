import React from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaCard from '../components/PizzaCard'
import Skeleton from '../components/PizzaCard/Skeleton'

const Home = () => {

  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    fetch('https://62828169ed9edf7bd885afb0.mockapi.io/items')
      .then(res => res.json())
      .then(items => {
        setItems(items)
        setIsLoading(false)
      })
  }, [])


  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {
          !isLoading ? items.map(obj => <PizzaCard key={obj.id} {...obj} />)
            : [...Array(10)].map((_, i) => <Skeleton key={i} />)
        }
      </div>
    </div>
  )
}

export default Home