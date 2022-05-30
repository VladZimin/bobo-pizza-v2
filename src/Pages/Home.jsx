import React from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaCard from '../components/PizzaCard'
import Skeleton from '../components/PizzaCard/Skeleton'

const Home = () => {

  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [categoryId, setCategoryId] = React.useState(0)
  const [sortType, setSortType] = React.useState({ name: 'популярности', sortProperty: 'rating' })

  React.useEffect(() => {
    fetch(`https://62828169ed9edf7bd885afb0.mockapi.io/items?category=${categoryId ? `${categoryId}` : ''}&sortBy=${sortType.sortProperty}&order=desc `)
      .then(res => res.json())
      .then(items => {
        setItems(items)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [categoryId, sortType])


  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onChangeSortType={(obj) => setSortType(obj)} />
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