export interface IUser {
  firstName: string;
  lastName: string;
  accessFailedCount: number;
  email: string;
  emailConfirmed: boolean;
  id: string;
  lockoutEnabled: string;
  lockoutEnd: string;
  normalizedEmail: string;
  normalizedUserName: string;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  profilePic: string;
  twoFactorEnabled: boolean;
  userName: string;
  isActive: boolean;
  lastLoginIp: string;
  createdAt: string;
}
