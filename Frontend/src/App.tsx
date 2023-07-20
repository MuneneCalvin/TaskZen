import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Team from "./pages/team/Team";
import Projects from "./pages/projects/Projects";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Landing from "./pages/landing/landing";
import Calendar from "./pages/calendar/calendar";
import Task from "./pages/tasks/tasks";
import Login from "./pages/login/Login";
import Signup from "./pages/signUp/signup";
import Profile from "./pages/profile/profile";
import "./styles/global.scss";
import User from "./pages/user/User";
import Project from "./pages/project/Project";
import { QueryClient, QueryClientProvider,} from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
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

  const router = createBrowserRouter([
    {
      // path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/calendar",
          element: <Calendar />,
        },
        {
          path: "/tasks",
          element: <Task />,
        },
        {
          path: "/team/:id",
          element: <User />,
        },
        {
          path: "/project/:id",
          element: <Project />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/",
      element: <Landing />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
