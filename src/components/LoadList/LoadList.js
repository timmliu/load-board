import React from 'react'
import { db, useListVals } from '../../firebase'
import styles from './LoadList.module.css'
import Load from '../Load/Load'

const LoadList = () => {
  const [values] = useListVals(db.ref('loads'))

  return (
    <div className={ styles.loads }>
        {
          values.map(load => {
            return <Load key={load && load.id} {...load} />
          })
        }
    </div>
  )
}

export default LoadList
