import React, { useContext } from 'react'
import styles from './Load.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Equipment from '../Equipment/Equipment'
import { DisplayContext } from '../../App'

const Load = props => {
  const { setSelectedLoad } = useContext(DisplayContext)
  const { id, date, origin, destination, equipment, locked, status, value } = props

  return (
    <div className={status === 'available' ? styles.loadAvailable : styles.loadBooked } onClick={() => setSelectedLoad(props)}>
      <div className={styles.left}>
        <div className={styles.id}>{id}</div>
        <div className={styles.date}>{date}</div>
      </div>

      <div className={styles.mid}>
        <div className={styles.origin}>{origin}</div>
        <div className={styles.transit}>
          {
            status === 'available'
              ? <span><FontAwesomeIcon size="2x" icon="long-arrow-alt-right" /></span>
              : <Equipment type={equipment} />
          }
        </div>
        <div className={styles.destination}>{destination}</div>
      </div>

      <div className={styles.right}>
        <div className={styles.locked}>
          {
            locked
              ? <span><FontAwesomeIcon size="1x" icon="lock" /></span>
              : <span><FontAwesomeIcon size="1x" icon="lock-open" /></span>
          }
        </div>
        <div className={styles.value}>{value}</div>
      </div>
    </div>
  )
}

export default Load
