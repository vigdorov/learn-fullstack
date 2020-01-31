import axios from 'axios';

const url = 'http://localhost:3010/users';

interface User {
  name: string;
  surname: string;
  phone: number;
  avatar: string;
}

class UsersAPI {
  request(): Promise<any[]> {
    return axios.get(url).then(r => r.data);
  }

  create(user: User): Promise<any> {
    return fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(user),
    }).then(r => r.json());
  }
}

const usersAPI = new UsersAPI();

export {usersAPI};