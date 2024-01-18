import './App.css';
import People from './components/People'
import Planet from './components/Planet'
import Error from './components/Error'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react';

function App() {

  const navigate = useNavigate();
  
  const [type, setType] = useState("people")
  const [starWarsID, setStarWarsID] = useState(1)

  const submitSearch = (e) => {
    e.preventDefault()

    console.log(type)
    console.log(starWarsID)

    navigate("/" +type + "/" + starWarsID + "/")

  }

  return (
    <div className="App">

      < Routes>

        <Route path='/people/:id' element={<People type={type} starWarsID={starWarsID} />} />
        <Route path='/planets/:id' element={<Planet type={type} starWarsID={starWarsID} />} />
        <Route path='/error' element={<Error />} />

      </Routes>

      <form onSubmit={submitSearch}>
        <div>
          Search for:<select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="people" >People</option>
            <option value="planets" >Planet</option>
          </select>
        </div>
        <div>
          ID: <input type="number" value={starWarsID} onChange={(e) => setStarWarsID(e.target.value)}/>
        </div>
        <button type="submit">Search</button>
      </form>

    </div>
  );
}

export default App;
