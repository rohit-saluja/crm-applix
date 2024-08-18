export interface Employee {
  id?: string;
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
