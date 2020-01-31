import axios from 'axios';

class UsersAPI {
  request(): Promise<any[]> {
    const url = 'http://localhost:3010/users'
    return axios.get(url).then(r => r.data);
  }
}

const usersAPI = new UsersAPI();

export {usersAPI};