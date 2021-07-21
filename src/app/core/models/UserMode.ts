export class UserModel {
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

  constructor(
    firstName?: string,
    lastName?: string,
    accessFailedCount?: number,
    email?: string,
    emailConfirmed?: boolean,
    id?: string,
    lockoutEnabled?: string,
    lockoutEnd?: string,
    normalizedEmail?: string,
    normalizedUserName?: string,
    phoneNumber?: string,
    phoneNumberConfirmed?: boolean,
    profilePic?: string,
    twoFactorEnabled?: boolean,
    userName?: string,
    isActive?: boolean,
    lastLoginIp?: string,
    createdAt?: string
  ) {
    this.firstName = firstName || '';
    this.lastLoginIp = lastLoginIp || '';
    this.accessFailedCount = accessFailedCount || 0;
    this.createdAt = createdAt || '';
    this.email = email || '';
    this.emailConfirmed = emailConfirmed || false;
    this.id = id || '';
    this.isActive = isActive || false;
    this.lastName = lastName || '';
    this.lockoutEnabled = lockoutEnabled || '';
    this.normalizedEmail = normalizedEmail || '';
    this.phoneNumber = phoneNumber || '';
    this.normalizedUserName = normalizedUserName || '';
    this.phoneNumberConfirmed = phoneNumberConfirmed || false;
    this.profilePic = profilePic || '';
    this.userName = userName || '';
    this.lockoutEnd = lockoutEnd || '';
    this.twoFactorEnabled = twoFactorEnabled || false;
  }
}
