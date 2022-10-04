
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './view/Home';
import { About } from './view/About';
import { Nomatch } from './view/Nomatch';
import { Layout } from './Layout/Layout';
import { Terms } from './view/Terms';
import { Login } from './view/Login';
import { Email } from './view/Email';
import { ProtectedRoute } from './routes/ProtectedRoutes';
import AuthProvider from './providers/AuthProvider';
import { NotAuthorized } from './view/NotAuthorized';
import useAuth from './hooks/useAuth';
import Users from './view/Users';
import Register from './view/Register';
import {useSelector} from 'react-redux';
import Universities from './view/Universities';
import UserDetail from './view/UserDetail';


function App() {
  const { user } = useAuth();



  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path={"/universities"} element={<Universities/>} />
        <Route path={"/email/:id"} element={<ProtectedRoute><Email/></ProtectedRoute>} />
        <Route path={"/userdet"} element={<ProtectedRoute><UserDetail/></ProtectedRoute>} />
        <Route path={"/users"} element={<ProtectedRoute isAllowed={user?.roles.includes('admin')} redirectPath={'/home'}><Users/></ProtectedRoute>} />
        <Route path="/*" element={<Nomatch/>} />
        <Route path="/not-authorized" element={<NotAuthorized/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
