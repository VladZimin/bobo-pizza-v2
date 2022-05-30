import React from 'react'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Categories = ({ value, onClickCategory }) => {


  return (
    <div className='categories'>
      <ul>
        {
          categories.map((item, i) =>
            <li onClick={() => onClickCategory(i)} key={item + i} className={value === i ? 'active' : ''}>
              {item}
            </li>)
        }
      </ul>
    </div>
  )
}

export default Categories

