
export interface IUser {
  userId: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: "admin" | "customer";
  address?: string; 
  isActive: boolean;
}