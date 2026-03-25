import React from 'react'
import { HashRouter,Route,Routes,Router} from 'react-router-dom';
import Details from './componentss/Details';
import User from './componentss/User';


function App() {
 

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/user/:id" element={<Details />} />
      </Routes>
    </HashRouter>
  )
}

export default App
