
//Aqui é o arquivo do React, vamos importar as coisas para cá do styles.js. 

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import Avatar from '../../assets/avatar.svg';
import Arrow from '../../assets/arrow.svg';
import Trash from '../../assets/trash.svg';

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens';

import { Container, Image, Button, User } from './styles';

const Users = () => {
  // REACT HOOK => FERRAMENTAS AUXILIARES  ======>     const [users, setUsers] = useState()    <======= ESSE FOI O PRIMEIRO REACT HOOK.
  //React Hook - UseEffect (Efeito Colateral) Ele é chamado em duas ocasiões.
  // A primeira é quando a aplicação inicia
  // A segunda é quando um estado que está no array de dependência do useEffect é alterado.


  const [users, setUsers] = useState([]);
  const history = useHistory()
  useEffect(() => {
    const fetchUsers = async () => {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers()
  }, [])


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter((user) => user.id !== userId)

    setUsers(newUsers);
  }

  function goBackPage() {
    history.push('/')
  }



  return (

    <Container>

      <Image alt='logo-imagem' src={Avatar} />

      <ContainerItens isBlur={true}>

        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (

            <User key={user.id}>

              <p>{user.name}</p> <p>{user.age}</p>

              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt='lata-de-lixo' />
              </button>

            </User>

          ))}
        </ul>

        <Button onClick={goBackPage}>
          <img alt='seta' src={Arrow} /> Voltar
        </Button>

      </ContainerItens>

    </Container>
  )
};

export default Users;
