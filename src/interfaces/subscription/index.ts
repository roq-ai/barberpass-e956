import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SubscriptionInterface {
  id?: string;
  type: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface SubscriptionGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  user_id?: string;
}
