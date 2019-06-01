import React,{ Fragment} from 'react';
import './App.css';
import PersonalCard from './components/PersonalCard';

function App() {
  return (
    <>
      <PersonalCard nombre='Nathalia' apellido='Ortega'>
      <p><b>Profesion: </b>Front-End developer</p>
      <p><b>Genero: </b>Femenino</p>
      </PersonalCard>
      
      <PersonalCard nombre='Daniel' apellido='Preciado' />
    </>
  );
}

export default App;
