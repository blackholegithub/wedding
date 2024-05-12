
import {  Routes, Route } from 'react-router-dom';
import "./App.css";
import Router from "./routes/route/route.routes";
import Navbar from './components/navbar/Navbar.Components';

function App() {
  return (
    <div>
      <Navbar host={window.location.href}/>
      <Routes>
        <Route path={Router.Home.Path}  element={Router.Home.Element} /> 
        <Route path={Router.User.Path}  element={Router.User.Element} />
        <Route path={Router.NotFound.Path}  element={Router.NotFound.Element} />
      </Routes>
    </div>
  );
}

export default App;
