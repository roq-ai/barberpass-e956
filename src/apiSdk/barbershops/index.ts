import axios from 'axios';
import queryString from 'query-string';
import { BarbershopInterface, BarbershopGetQueryInterface } from 'interfaces/barbershop';
import { GetQueryInterface } from '../../interfaces';

export const getBarbershops = async (query?: BarbershopGetQueryInterface) => {
  const response = await axios.get(`/api/barbershops${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createBarbershop = async (barbershop: BarbershopInterface) => {
  const response = await axios.post('/api/barbershops', barbershop);
  return response.data;
};

export const updateBarbershopById = async (id: string, barbershop: BarbershopInterface) => {
  const response = await axios.put(`/api/barbershops/${id}`, barbershop);
  return response.data;
};

export const getBarbershopById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/barbershops/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBarbershopById = async (id: string) => {
  const response = await axios.delete(`/api/barbershops/${id}`);
  return response.data;
};
