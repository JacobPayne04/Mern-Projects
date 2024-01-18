import './App.css';
import Main from './components/Main'
import Edit from './components/Edit'
import Create from './components/Create'
import {Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      < Routes>
        <Route path="/authors" element={<Main />} />
        <Route path="/authors/new" element={<Create />} />
        <Route path="/authors/:id/edit" element={<Edit />} />
        <Route path="*" element={< Navigate to={"/authors"} />} />
      </Routes>

    </div>
  );
}

export default App;