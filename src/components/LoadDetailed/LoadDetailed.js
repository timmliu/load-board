import React, { useContext } from 'react'
import styles from './LoadDetailed.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DisplayContext } from '../../App'

const LoadDetailed = () => {
  const { selectedLoad, setSelectedLoad } = useContext(DisplayContext)
  const { id, locked, origin, destination, date, value, equipment, status } = selectedLoad

  return (
    <div className={styles.detailed}>
      <div className={styles.top}>
        <div className={styles.id}>{ id }</div>
        <span className={styles.collapse} onClick={() => setSelectedLoad(null)}><FontAwesomeIcon color="#9B9B9B" size="2x" icon="chevron-down" /></span>
        {
          locked
            ? <span><FontAwesomeIcon size="1x" icon="lock" /></span>
            : <span><FontAwesomeIcon size="1x" icon="lock-open" /></span>
        }
      </div>
      <div className={styles.data}>
        <div><span className={styles.dataLabel}>origin:</span> {origin}</div>
        <div><span className={styles.dataLabel}>destination:</span> {destination}</div>
        <div><span className={styles.dataLabel}>date:</span> {date}</div>
        <div><span className={styles.dataLabel}>value:</span> {value}</div>
        <div><span className={styles.dataLabel}>equipment:</span> {equipment}</div>
        <div><span className={styles.dataLabel}>status:</span> {status}</div>
      </div>
    </div>
  )
}

export default LoadDetailed
