import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import LoadList from './components/LoadList/LoadList'
import { empty } from './constants'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSyncAlt, faLongArrowAltRight, faLock, faLockOpen, faChevronDown, faCaretDown, faTruck, faTruckMoving, faTruckPickup, faToggleOn, faToggleOff} from '@fortawesome/free-solid-svg-icons'

library.add(faSyncAlt, faLongArrowAltRight, faLock, faLockOpen, faChevronDown, faCaretDown, faTruck, faTruckMoving, faTruckPickup, faToggleOn, faToggleOff)

export const DisplayContext = React.createContext({
  displayAvailableOnly: null,
  setDisplayAvailableOnly: empty.NOOP
})

export const { Consumer } = DisplayContext;

function App() {
  const [displayAvailableOnly, setDisplayAvailableOnly] = useState(false)

  return (
    <div className="App">
      <DisplayContext.Provider value={{ displayAvailableOnly, setDisplayAvailableOnly }}>
        <Header />
        <LoadList />
      </DisplayContext.Provider>
    </div>
  );
}

export default App;
