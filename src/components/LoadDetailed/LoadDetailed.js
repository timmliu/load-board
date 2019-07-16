import React, { useContext } from 'react'
import styles from './LoadDetailed.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DisplayContext } from '../../App'
import { db } from '../../firebase'

const LoadDetailed = () => {
  const { selectedLoad, setSelectedLoad } = useContext(DisplayContext)
  const { id, locked, origin, destination, date, value, equipment, status } = selectedLoad

  function updateLoad(status) {
    db.ref(`loads/${selectedLoad.id}`).update({ status })
    .then(_snapshot => setSelectedLoad(Object.assign({}, selectedLoad, { status })))
    .catch(error => {
      console.log(error)
      alert('Something went wrong. Please try again later.')
    })
  }

  return (
    <div className={styles.detailed}>
      <div className={styles.top}>
        <div className={styles.id}><span className={styles.dataLabel}>id:</span> { id }</div>
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
        <div className={styles.statusRow}>
          <span>
            <span className={styles.dataLabel}>status:</span>
            <span className={styles.status}>{status}</span>
          </span>
          <span>
            {
              !locked &&
              <span className={styles.statusToggleWrapper}>
                {
                  status === 'available'
                    ? <span className={styles.toggleOn} onClick={() => updateLoad('booked')}><FontAwesomeIcon size="2x" icon="toggle-on" /></span>
                    : <span className={styles.toggleOff} onClick={() => updateLoad('available')}><FontAwesomeIcon size="2x" icon="toggle-off" /></span>
                }
              </span>
            }
          </span>
        </div>
      </div>
    </div>
  )
}

export default LoadDetailed
