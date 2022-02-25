import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './buy-here.module.css'

const BuyHere = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>BuyHere - Intro to teleportHQ</title>
        <meta
          name="description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="BuyHere - Intro to teleportHQ" />
        <meta
          property="og:description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e79a92ec-2d38-4d9d-9fba-7dc5c599c071/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1"
        />
      </Helmet>
      <form className={styles['form']}></form>
    </div>
  )
}

export default BuyHere
