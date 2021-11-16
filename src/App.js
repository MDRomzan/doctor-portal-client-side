import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment";
import AddDoctor from "./Pages/DashBoard/AddDoctor/AddDoctor";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import DashBoardHome from "./Pages/DashBoard/DashBoardHome/DashBoardHome";
import MakeAdmin from "./Pages/DashBoard/MakeAdmin/MakeAdmin";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
           <Router>
       <Routes>
          <Route element={<Home></Home>} path="/">         
          </Route>
          <Route  path="/home" element={<Home></Home>}>         
          </Route>
          <Route exact path="/appointment" element={<PrivateRoute><Appointment/></PrivateRoute>}>           
          </Route>
          <Route  path="/dashboard" element={<PrivateRoute><DashBoard/></PrivateRoute>}>  
          <Route exact path="/dashboard" element={<DashBoardHome></DashBoardHome>}>
          
        </Route>
        <Route path={`dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin/></AdminRoute>}>         
        </Route>
        <Route path={`dashboard/addDoctor`} element={<AdminRoute><AddDoctor/></AdminRoute>}>  
        </Route>        
          </Route>
          <Route  path="/login" element={<Login></Login>}>          
          </Route>
          <Route  path="/register" element={<Register></Register>}>          
          </Route>
        </Routes>
     </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
