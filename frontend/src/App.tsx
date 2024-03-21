import './globals.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider';
import Create from './auth/Create'
import { AuthLayout } from './auth/AuthLayout'
import { Login } from './auth/Login'
import { Home } from './components/Home'
import { CreateRecipes } from './pages/CreateRecipes'
import { AuthLayoutPages } from './pages/AuthLayoutAPages'

function App() {

  return (
    <AuthProvider>
      <Router> 
        <main className="flex min-h-screen">
          <Routes>
            {/* public routes */}
            <Route element={<AuthLayout />}>
              <Route path='/create' element={<Create />}/>
              <Route path="/login" element={<Login />}/>
            </Route>
            {/* private routes */}
            <Route element={<AuthLayoutPages/>}>
              <Route path='/create-recipe' element={<CreateRecipes />} />
            </Route>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  )
}

export default App
