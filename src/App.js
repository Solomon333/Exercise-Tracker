import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar.component";
import CreateExercise from './components/Create-exercise.component';
import CreateUsers from './components/Create-user.component';
import ExerciseList from './components/Exercise-list.component';
import EditExercise from './components/Edit-exercises.component';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar  />
        <br/>
        <Routes>
        <Route path="/" exact element={ <ExerciseList />} />
        </Routes>
        <Routes>
        <Route path="/edit/:id" element={ <EditExercise /> }  />
        </Routes>
        <Routes>
        <Route path="/create" element={ <CreateExercise /> }  />
        </Routes>
        <Routes>
        <Route path="/user" element= {<CreateUsers />}   />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
