import { useContext } from 'react';
import { Context } from './context/userContext/Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Home from './pages/home/Home';
import Team from './pages/team/Team';
import Projects from './pages/projects/Projects';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Landing from './pages/landing/landing';
import Calendar from './pages/calendar/calendar';
import Tasks from './pages/tasks/tasks';
import Task from './pages/task/task';
import Login from './pages/login/Login';
import Signup from './pages/signUp/signup';
import Profile from './pages/profile/profile';
import Settings from './pages/settings/settings';
import './styles/global.scss';
import User from './pages/user/User';
import Project from './pages/project/Project';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

function App() {
  const { user } = useContext(Context);

  const Layout = () => {
    return (
      <div className="main">
        <ToastContainer />
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<Layout />}>
          <Route path="/home" element={user ? <Home /> : <Landing />} />
          <Route path="/team" element={user ? <Team /> : <Landing />} />
          <Route path="/projects" element={user ? <Projects /> : <Landing />} />
          <Route path="/calendar" element={user ? <Calendar /> : <Landing />} />
          <Route path="/tasks" element={user ? <Tasks /> : <Landing />} />
          <Route path="/task/:id" element={user ? <Task /> : <Landing />} />
          <Route path="/team/:id" element={user ? <User /> : <Landing />} />
          <Route path="/project/:id" element={user ? <Project /> : <Landing />} />
          <Route path="/profile" element={user ? <Profile /> : <Landing />} />
          <Route path="/settings" element={user ? <Settings /> : <Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
