import React,{ Fragment} from 'react';
import './App.css';
import PersonalCard from './components/PersonalCard';
import ColorCard from './components/ColorCard';


class App extends Component {
  state={
    people:[
      {id:1,nombre:'Nathalia',apellido:'Ortega'},
      {id:2,nombre:'Daniel',apellido:'Preciado'}
    ]
  }
  duplicatePerson(event,person){
    this.setState((prevState)=>
    {
      const oldPeople=prevState.people;
      const newPerson={
        ...person,id:Math.random()
      }
      return({
        people:[...oldPeople,newPerson]
      })
    })
  }
  render()
  {
    const people=this.state.people;
    return (
      <>        
      {people.map(person=>(
        <PersonalCard 
        key={person.id} 
        nombre={person.nombre} 
        apellido={person.apellido}
        onDuplicate={(e)=>this.duplicatePerson(e,person)}
        />
      ))}
        {/* <ColorCard name="Red" isLight={false} lightClass="color-red--light" darkClass="color-red"/> */}
  
  
      </>
    );
  }
 
}

export default App;
