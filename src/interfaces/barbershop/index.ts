import { AppointmentInterface } from 'interfaces/appointment';
import { ServiceInterface } from 'interfaces/service';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BarbershopInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  service?: ServiceInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    service?: number;
  };
}

export interface BarbershopGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  user_id?: string;
}
