import { Role } from '@prisma/client';

export class User {
  id: string;
  fullName: string;
  username: string;
  phone: string;
  email: string;
  password: string;
  avatar: string;
  role: Role;
  salary: bigint;
  isActive: boolean;
  emailVerified: boolean;
  currentLocation: string;
  emailVerificationToken: string;
  emailVerificationTokenExpires: string;
  joinDate: Date;
  endDate: Date;
}
