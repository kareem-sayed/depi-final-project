import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/Dashboard'
import Prophets from './pages/Prophets'
import ProphetStory from './pages/ProphetStory'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Quiz from './pages/Quiz'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="prophets" element={<Prophets />} />
          <Route path="prophetstory/:id" element={<ProphetStory />} />
          <Route path="quiz/:id" element={<Quiz />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App