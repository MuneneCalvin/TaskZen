import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing/landing';
import Register from './Components/Signup/signup';
import Login from './Components/LogIn/login';
import Dashboard from './Pages/Dashboard/dashboard';
import NotFound from './Pages/NotFound/Notfound';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
