import { Routes, Route } from "react-router-dom";
import Coupon from "@/views/Coupon";
import Login from "@/views/Login";
import Profile from "@/views/Profile";
import NotFound from "@/views/NotFound";
import PrivateRoute from "./components/PrivateRoute";

import "@sass/_main.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Profile />} />
          <Route path="coupon" element={<Coupon />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
