import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div>


      <PersonCard f_name={'john'} l_name={'stamos'} age={60} hair_color={'brown'}/>
      <PersonCard f_name={'sam'} l_name={'fall'} age={50} hair_color={'black'}/>
      <PersonCard f_name={'bill'} l_name={'bar'} age={40} hair_color={'blond'}/>
      <PersonCard f_name={'joe'} l_name={'zeo'} age={20} hair_color={'brown'}/>

    </div>
    
  );
}




export default App;
