import React, { useContext } from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DisplayContext } from '../../App'

const Header = () => {
  const { displayAvailableOnly, setDisplayAvailableOnly, setSelectedLoad } = useContext(DisplayContext)

  return (
    <div className={styles.header}>
      <span className={styles.displayAvailableOnlyWrapper} onClick={() => {
        setDisplayAvailableOnly(!displayAvailableOnly)
        setSelectedLoad(null)
      }}>
        <span className={styles.displayAvailableOnlyLabel}>Display available only</span>
        {
          displayAvailableOnly
            ? <span className={styles.toggleOn}><FontAwesomeIcon size="2x" icon="toggle-on" /></span>
            : <span className={styles.toggleOff}><FontAwesomeIcon size="2x" icon="toggle-off" /></span>
        }
      </span>
    </div>
  )
}

export default Header
