import axios from 'axios';

const api = axios.create({
  baseURL: 'https:/localhost:3333/',
  timeout: 10000,
});

// Interceptor error 401
/*api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (401 === error.response.status) {
      // Show message logout
      Toast.show({
        topOffset: 15,
        type: 'error',
        text1: 'Você não está logado',
        text2: 'Faça o login novamente',
      });
    } else {
      return Promise.reject(error);
    }
  },
);*/

export default api;
