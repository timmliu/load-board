import React, { useContext, useState } from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DisplayContext } from '../../App'
import Simulation from '../../utils/Simulation'

const Header = () => {
  const { displayAvailableOnly, setDisplayAvailableOnly, setSelectedLoad } = useContext(DisplayContext)
  const [simulating, setSimulating] = useState(false)
  var simulation = new Simulation(1000)

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

      <span className={styles.simulateWrapper}>
        <span className={styles.simulateLabel}>Simulate DB updates</span>
        {
          simulating
            ? <span className={styles.toggleOn} onClick={() => simulation.stop()}><FontAwesomeIcon size="2x" icon="toggle-on" /></span>
            : <span className={styles.toggleOff} onClick={() => { simulation.start(); setSimulating(true); }}><FontAwesomeIcon size="2x" icon="toggle-off" /></span>
        }
      </span>
    </div>
  )
}

export default Header
