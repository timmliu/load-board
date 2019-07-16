import React, { useContext, useEffect, useState } from 'react'
import { db, useListVals } from '../../firebase'
import styles from './LoadList.module.css'
import Load from '../Load/Load'
import LoadDetailed from '../LoadDetailed/LoadDetailed'
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
            ? <div>Loading…</div>
            : loads.length > 0
                ? loads.map(load => <Load key={load && load.id} {...load} />)
                : <div>No loads available.</div>
        }
        { selectedLoad && <LoadDetailed /> }
    </div>
  )
}

export default LoadList
