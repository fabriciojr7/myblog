import { Envelope, Globe, Phone } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserProps } from '../../interfaces/UserProps';
import { api } from '../../server/api';
import { Container, Card } from './styles';

export function UserDetail(){
  const [user, setUser] = useState<UserProps | null>(null);
  const {id} = useParams();

  const loadUser = async () => {
    try {
      const {data} = await api.get(`users/${id}`);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container>
      <h2>Dados do usuário</h2>
      <Card className='data-user'>
        <header>
          <h3>{user?.name}</h3>
          <span>{user?.username}</span>
        </header>

        <div className="box">
          <span>
            <Envelope size={20}/>
            {user?.email}
          </span>
          <span>
            <Phone size={20}/>
            {user?.phone}
          </span>
        </div>

        <span className='site'>
          <Globe size={20}/>
          {user?.website}
        </span>
      </Card>

      <h2>Endereço</h2>
      <Card className='data-address'>
        <div className="box">
          <span>Rua: {user?.address.street}</span>
          <span>Número: {user?.address.suite}</span>
        </div>

        <div className="box">
          <span>Cidade: {user?.address.city}</span>
          <span>CEP: {user?.address.zipcode}</span>
        </div>
      </Card>

      <h2>Empresa</h2>
      <Card className='data-address'>
        <div className="box">
          <span>Nome: {user?.company.name}</span>

        </div>

        <div className="box">
          <span>{user?.company.catchPhrase}</span>
          <span>{user?.company.bs}</span>
        </div>
      </Card>
    </Container>
  );
}
