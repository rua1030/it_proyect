export interface Employees {
  posision: ReactNode;
  id: string;
  name: string;
  email: string;
  idNumber: string;
  jobTitle: string;
  operatingSystem: 'Windows' | 'macOS' | 'Linux';
  status: 'Onbording' | 'Active' | 'Offbording';
}

export class EmployeesEntity implements Employees {
  id: string;

  name: string;

  email: string;

  idNumber: string;

  jobTitle: string;

  operatingSystem: 'Windows' | 'macOS' | 'Linux';

  status: 'Onbording' | 'Active' | 'Offbording';

  constructor(
    id: string,
    name: string,
    email: string,
    idNumber: string,
    jobTitle: string,
    operatingSystem: 'Windows' | 'macOS' | 'Linux',
    status: 'Onbording' | 'Active' | 'Offbording'
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.operatingSystem = operatingSystem;
    this.status = status;
  }
}
