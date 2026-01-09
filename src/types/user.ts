export interface UserBase {
  id: number;
  fullName: string;
  email: string;
}

export interface User extends UserBase {
  phoneNumber: string;
  dateOfBirth: string;
  driverLicenseSerial: string;
  passportSerial: string;
}
