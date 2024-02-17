import './globals.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './auth/Create'
import { AuthLayout } from './auth/AuthLayout'
import { Login } from './auth/Login'
import { Home } from './components/Home'

function App() {

  return (
    <>
      <Router> 
        <main className="flex min-h-screen">
          <Routes>
            {/* pulic routes */}
            <Route element={<AuthLayout />}>
              <Route path='/create' element={<Create />}/>
              <Route path="/login" element={<Login />}/>
            </Route>
            {/* private routes */}
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
