import './globals.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './auth/Create'
import { AuthLayout } from './auth/AuthLayout'
import { Login } from './auth/Login'
import { Home } from './components/Home'
import { CreateRecipes } from './pages/CreateRecipes'
import { AuthLayoutPages } from './pages/AuthLayoutAPages'

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
              <Route element={<AuthLayoutPages/>}>
                <Route path='/create-recipe' element={<CreateRecipes />} />
              </Route>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
