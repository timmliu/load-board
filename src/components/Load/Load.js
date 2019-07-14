import React from 'react'
import styles from './Load.module.css'

const Load = props => {
  const { id, date, origin, destination, locked, status, value } = props

  return (
    <div className={status === 'available' ? styles.loadAvailable : styles.loadBooked }>
      <div>
        <div className={styles.id}>{id}</div>
        <div className={styles.date}>{date}</div>
      </div>

      <div>
        <div className={styles.origin}>{origin}</div>
        <div className={styles.transit}>{}</div>
        <div className={styles.destination}>{destination}</div>
      </div>

      <div>
        <div className={styles.locked}>{locked.toString()}</div>
        <div className={styles.value}>{value}</div>
      </div>
    </div>
  )
}

export default Load
