import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Error from "./pages/Error.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import UserHome from "./pages/user/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Jobs from "./pages/user/Jobs.jsx";
import Courses from "./pages/user/Courses.jsx";
import Profile from "./pages/user/Profile.jsx";
import CreateAdmin from "./pages/admin/CreateAdmin.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import CreateJob from "./pages/user/CreateJob.jsx";
import CreateCourse from "./pages/user/CreateCourse.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />} errorElement={<Error />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<SignUp />} />
      <Route path={`dashboard`} element={<Dashboard />}>
        <Route path="" element={<UserHome />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="courses" element={<Courses />} />
        <Route path="profile" element={<Profile />} />
        <Route path="create" element={<CreateAdmin />} />
        <Route path="createjob" element={<CreateJob />} />
        <Route path="createcourse" element={<CreateCourse />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
