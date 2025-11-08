import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import AllCourses from './components/AllCourses'
import Detail from './components/Detail'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'

function App() {

  return (
    <>

      <Router>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/se151037/all-lessons' element={<AllCourses />} />
          <Route path='/se151037/lessons/:id' element={<Detail />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
