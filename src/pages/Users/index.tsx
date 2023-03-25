import { Envelope, Eye, Phone } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Error } from '../../components/Error';
import { UserProps } from '../../interfaces/UserProps';
import { api } from '../../server/api';
import { CardUser } from './styles';

export function Users(){
  const [users, setUsers] = useState<UserProps[]>([]);
  const [error,setError] = useState(false);
  const navigate = useNavigate();

  const loadUsers = async () => {
    try {
      const {data} = await api.get('users');
      setUsers(data);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      {error && <Error/>}

      {!error && (
        <>
          {users.map((user) => (
            <CardUser
              key={user.id}
              onClick={() => navigate(`/user/${user.id}`)}
            >
              <div className="content">
                <header>
                  <h2>{user.name}</h2>
                  <span>{user.username}</span>
                </header>

                <p>
                  <Envelope size={20}/>
                  {user.email}
                </p>
                <p>
                  <Phone size={20}/>
                  {user.phone}
                </p>
              </div>

              <div className="icone">
                <Eye size={24} />
              </div>
            </CardUser>
          ))}
        </>
      )}
    </>
  );
}
