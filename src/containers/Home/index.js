
//Aqui é o arquivo do React, vamos importar as coisas para cá do styles.js. 

import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import People from '../../assets/people.svg';
import Arrow from '../../assets/arrow.svg';

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'


import {
  Container,
  Image,
  InputLabel,
  Input,
  Button,
} from './styles';

const App = () => {
  // REACT HOOK => FERRAMENTAS AUXILIARES  ======>     const [users, setUsers] = useState()    <======= ESSE FOI O PRIMEIRO REACT HOOK.
  //React Hook - UseEffect (Efeito Colateral) Ele é chamado em duas ocasiões.
  // A primeira é quando a aplicação inicia
  // A segunda é quando um estado que está no array de dependência do useEffect é alterado.


  const [users, setUsers] = useState([]);
  const history = useHistory()

  const inputName = useRef()
  const inputAge = useRef()


  const addNewUser = async () => {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    history.push('/usuarios')

  }


  return (

    <Container>

      <Image alt='logo-imagem' src={People} />

      <ContainerItens>

        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewUser}>
          Cadastrar <img alt='seta' src={Arrow} />
        </Button>

      </ContainerItens>

    </Container>
  )
};

export default App;
