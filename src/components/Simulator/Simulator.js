import React, { useState } from 'react'
import styles from './Simulator.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Simulation from '../../utils/Simulation'

const Simulator = () => {
  const [simulating, setSimulating] = useState(false)
  var simulation = new Simulation(1000)

  return (
    <div className={styles.simulator}>
      <div className={styles.simulateWrapper}>
        <span className={styles.simulateLabel}>Simulate DB updates</span>
        {
          simulating
            ? <span className={styles.toggleOn} onClick={() => simulation.stop()}><FontAwesomeIcon size="2x" icon="toggle-on" /></span>
            : <span className={styles.toggleOff} onClick={() => { simulation.start(); setSimulating(true); }}><FontAwesomeIcon size="2x" icon="toggle-off" /></span>
        }
      </div>
    </div>
  )
}

export default Simulator
