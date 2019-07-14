import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import LoadList from './components/LoadList/LoadList'
import LoadDetailed from './components/LoadDetailed/LoadDetailed'
import { empty } from './constants'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltRight, faLock, faLockOpen, faChevronDown, faCaretDown, faTruck, faTruckMoving, faTruckPickup, faToggleOn, faToggleOff} from '@fortawesome/free-solid-svg-icons'

library.add(faLongArrowAltRight, faLock, faLockOpen, faChevronDown, faCaretDown, faTruck, faTruckMoving, faTruckPickup, faToggleOn, faToggleOff)

export const DisplayContext = React.createContext({
  displayAvailableOnly: null,
  setDisplayAvailableOnly: empty.NOOP,
  selectedLoad: null,
  setSelectedLoad: empty.NOOP
})

export const { Consumer } = DisplayContext;

function App() {
  const [displayAvailableOnly, setDisplayAvailableOnly] = useState(false)
  const [selectedLoad, setSelectedLoad] = useState(null)

  return (
    <div className="App">
      <DisplayContext.Provider value={{
        displayAvailableOnly,
        setDisplayAvailableOnly,
        selectedLoad,
        setSelectedLoad
      }}>
        <Header />
        <LoadList />
        { selectedLoad && <LoadDetailed /> }
      </DisplayContext.Provider>
    </div>
  );
}

export default App;
