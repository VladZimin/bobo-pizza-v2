import React from 'react'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Categories = () => {
  const [activeCat, setActiveCat] = React.useState(0)

  return (
    <div className='categories'>
      <ul>
        {
          categories.map((item, i) =>
            <li onClick={() => setActiveCat(i)} key={item + i} className={activeCat === i ? 'active' : ''}>
              {item}
            </li>)
        }
      </ul>
    </div>
  )
}

export default Categories

