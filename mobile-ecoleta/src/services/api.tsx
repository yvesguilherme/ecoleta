import axios from 'axios';

const api = axios.create({
  /**
   * Para funcionar localmente, deve ser trocado
   * este endereço pelo IP da máquina fornecido pelo expo.
   */
  baseURL: 'http://192.168.0.12:3333'
});

export default api;