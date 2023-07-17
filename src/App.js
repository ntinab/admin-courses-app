import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Dashboard from "./views/Dashboard";
import Courses from "./views/Courses";
import NewCourse from "./views/NewCourse";
import EditCourse from "./views/EditCourse";
import CoursePage from "./views/CoursePage";
import ErrorPage from './views/ErrorPage';
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";

function App() {
  return (
      <div className='App'>
        <NavBar />
      <Routes>
          <Route exact path="/" element={<Dashboard/>} errorElement={<ErrorPage/>} />
          <Route exact path="courses" element={<Courses/>} errorElement={<ErrorPage/>} />
          <Route exact path="new" element={<NewCourse/>} errorElement={<ErrorPage/>} />
          <Route exact path="edit/:id" element={<EditCourse/>} errorElement={<ErrorPage/>} />
          <Route exact path="courses/:id" element={<CoursePage/>} errorElement={<ErrorPage/>} />
        </Routes>
        <Footer />
      </div>
    );
}


export default App;