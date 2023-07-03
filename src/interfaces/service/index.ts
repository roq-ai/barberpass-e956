import { BarbershopInterface } from 'interfaces/barbershop';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  name: string;
  description?: string;
  barbershop_id?: string;
  created_at?: any;
  updated_at?: any;

  barbershop?: BarbershopInterface;
  _count?: {};
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  barbershop_id?: string;
}
