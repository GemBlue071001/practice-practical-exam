import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'

function App() {

  return (
    <>

      <Router>
        <NavigationBar />
        <Routes>
          <Route path='/home' element={<Home />} />


        </Routes>
      </Router>

    </>
  )
}

export default App
