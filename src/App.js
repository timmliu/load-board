import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import LoadList from './components/LoadList/LoadList'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSyncAlt, faLongArrowAltRight, faLock, faLockOpen, faChevronDown, faCaretDown, faTruck, faTruckMoving, faTruckPickup} from '@fortawesome/free-solid-svg-icons'

library.add(faSyncAlt, faLongArrowAltRight, faLock, faLockOpen, faChevronDown, faCaretDown, faTruck, faTruckMoving, faTruckPickup)

function App() {
  return (
    <div className="App">
      <Header />
      <LoadList />
    </div>
  );
}

export default App;
