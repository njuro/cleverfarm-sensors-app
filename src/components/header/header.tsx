import React from 'react'
import styles from './header.module.scss'

const Header = () => {
  return (
        <div>
            Header
            <div className={styles.testModule}>CSS <span>modules</span></div>
        </div>
  )
}

export default Header
