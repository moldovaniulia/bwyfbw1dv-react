import React from 'react'
import PropTypes from 'prop-types'

import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles.container}>
      <img
        src="%2Fplayground_assets%2Fw%3D200imageAsset.jpg"
        className={styles['first-image-asset']}
      />
    </div>
  )
}

AppComponent.defaultProps = {
  src: '/playground_assets/imageAsset.jpg',
}

AppComponent.propTypes = {
  src: PropTypes.string,
}

export default AppComponent
