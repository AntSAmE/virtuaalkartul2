import React from 'react'

import Previous from './previous'
import Next from './next'
import styles from './navigation.module.css'

const Navigation = (props) => {
  return (
    <div className={styles['container']}>
      <Previous rootClassName="rootClassName1"></Previous>
      <Next></Next>
    </div>
  )
}

export default Navigation
