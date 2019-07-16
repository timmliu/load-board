import React, { useContext, useEffect, useState } from 'react'
import { db, useListVals } from '../../firebase'
import styles from './LoadList.module.css'
import Load from '../Load/Load'
import LoadDetailed from '../LoadDetailed/LoadDetailed'
import Simulator from '../Simulator/Simulator'
import { DisplayContext } from '../../App'

const LoadList = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [values, loading, error] = useListVals(db.ref('loads'))
  const { displayAvailableOnly, selectedLoad, setSelectedLoad } = useContext(DisplayContext)
  const loads = [].concat(displayAvailableOnly ? values.filter(v => v.status === 'available') : values)

  useEffect(() => {
    if (selectedLoad) setSelectedLoad(loads.find(load => load.id === selectedLoad.id))
  }, [loads, selectedLoad, setSelectedLoad])

  useEffect(() => {
    setIsLoading(loading)
  }, [loading])

  useEffect(() => {
    if (error) alert('Something went wrong, please try again later.')
  }, [error])

  return (
    <div className={ styles.loads }>
        {
          isLoading
            ? <div className={styles.loading}>Loading…</div>
            : loads.length > 0
                ? loads.map(load => <Load key={load && load.id} {...load} />)
                : <div className={styles.noLoads}>No loads available.</div>
        }
        { selectedLoad && <LoadDetailed /> }
        { !isLoading && loads.length > 0 && <Simulator /> }
    </div>
  )
}

export default LoadList
