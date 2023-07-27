// import { useContext } from 'react';
// import { Context } from './context/userContext/Context';
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
import Notification from './pages/notifications/Notifications';
import './styles/global.scss';
import User from './pages/user/User';
import Project from './pages/project/Project';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

function App() {
  // const { user } = useContext(Context);

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
          <Route path="/home" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/task/:id" element={<Task />} />
          <Route path="/team/:id" element={<User />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notification/:id" element={<Notification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <Route path="/profile" element={user ? <Profile /> : <Landing />} />