import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Common/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./routes/ProtectedRoutes";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Landing Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Actual Software */}
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
