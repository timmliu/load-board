import React, { useContext } from 'react'
import { db, useListVals } from '../../firebase'
import styles from './LoadList.module.css'
import Load from '../Load/Load'
import { DisplayContext } from '../../App'

const LoadList = () => {
  const [values] = useListVals(db.ref('loads'))
  const { displayAvailableOnly } = useContext(DisplayContext)

  const loads = displayAvailableOnly ? values.filter(v => v.status === 'available') : values

  return (
    <div className={ styles.loads }>
        {
          loads.map(load => {
            return <Load key={load && load.id} {...load} />
          })
        }
    </div>
  )
}

export default LoadList
