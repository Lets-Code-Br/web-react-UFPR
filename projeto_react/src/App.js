import Card from './Card';
import CardList from './CardList';
import Form from './Form';
import { useState, useEffect } from 'react';

function App() {
  const [professores, setProfessores] = useState([]);

  useEffect(() => {

    fetch('professores.json')
      .then(res => res.json())
      .then(setProfessores);

  }, []);

  const addProfessor = professor => setProfessores([...professores, professor]);

  return (
    <>
      <CardList>
        {
          professores.map(({ name, bio, ies }, index) => <Card key={index} name={name} bio={bio} ies={ies} />)
        }
      </CardList>
      <Form addProfessor={addProfessor} />
    </>
  )
}

export default App;