import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
/*import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import Error404 from "./pages/404";*/
//import Signin from "./pages/Signin";
import Base from "./pages/Base";
import Auth from "./pages/Auth";
//import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/authRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />}></Route>
          <Route path="auth" element={<Auth />}></Route>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
