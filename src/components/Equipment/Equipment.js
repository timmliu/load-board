import { equipment } from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

const Equipment = (props) => {
  return (
    <div>
      <span style={{fontSize: '24px'}}><FontAwesomeIcon size="1x" icon={equipment[props.type]} /></span>
    </div>
  )
}

export default Equipment
