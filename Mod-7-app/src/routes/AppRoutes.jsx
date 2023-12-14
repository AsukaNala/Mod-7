//special component containing all the possible routes for this app
//any props passed into AppRoutes will also be passed onto child components using {...props}
import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import AboutPage from "../pages/AboutPage";
import { DashboardPage } from "../pages/DashboardPage";
import { DashboardMessages } from "../pages/DashboardPage";
import { DashboardTasks } from "../pages/DashboardPage";
import PageNotFound from "../pages/PageNotFound";

import PostsPage, { Post, PostList2 } from "../pages/PostsPage";

import ProtectedRoute from "./ProtectedRoute";
import LoginForm2 from "../LoginForm2";

function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />
      {/* nested routes, matches on /dash/tasks etc */}
      <Route
        path="dash"
        element={
          <ProtectedRoute>
            <DashboardPage {...props} />
          </ProtectedRoute>
        }
      >
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path="/login" element={<LoginForm2 />} />

      <Route path="/about" element={<AboutPage {...props} />} />

      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />

      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList2 />} />
        {/* dynamic param taken from route, stored in variable called id */}
        <Route path=":id" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
