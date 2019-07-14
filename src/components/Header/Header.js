import React from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div className={styles.header}>
      <span><FontAwesomeIcon size="1x" icon="sync-alt" /></span>
    </div>
  )
}

export default Header
