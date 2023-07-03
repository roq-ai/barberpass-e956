import { UserInterface } from 'interfaces/user';
import { BarbershopInterface } from 'interfaces/barbershop';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date: any;
  time: any;
  user_id?: string;
  barbershop_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  barbershop?: BarbershopInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  barbershop_id?: string;
}
