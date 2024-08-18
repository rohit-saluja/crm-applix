export interface Employee {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface CreateEmployee {
  name: string;
  email: string;
  phone: string;
  address: string;
}
