import styles from './NotFound.module.scss'

import React from 'react'

const NotFoundComponent = () => {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <h1>Страница не найдена :(</h1>
    </div>
  )
}

export default NotFoundComponent