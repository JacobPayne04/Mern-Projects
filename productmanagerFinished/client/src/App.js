import './App.css';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import Main from './components/Main';
import OneP from './components/OneP';
import EditOne from './components/EditOne';


function App() {


  return (
    <div >

      <Routes>

        <Route path="/products" element={< Main />} />
        <Route path="/products/:id" element={< OneP />} />
        <Route path="/:id/edit" element={< EditOne />} />
        <Route path="*" element={< Navigate to={"/products"} />} />


      </Routes>

    </div>
  );
}

export default App;
