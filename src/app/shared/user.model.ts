export class User {
  UserName: string;
  Key: string;
  FirstName: string;
  AccountType: string;
  DisplayTab: string[];
  isLoggedIn: boolean;
  public constructor() {
    if (this.AccountType === 'admin') {
      this.DisplayTab = ['home', 'profile'];
    } else if (this.AccountType === 'student') {
      this.DisplayTab = ['home', 'profile' , 'contact' , 'logout' ];
    } else if (this.AccountType === 'staff') {
      this.DisplayTab = ['home', 'profile' , 'notification', 'contact' ];
    } else {
      this.DisplayTab = ['home', 'profile' , 'notification', 'contact' , 'ji' ];
    }
  }

  get _UserName(): string {
    return this.UserName;
  }

  get _Key(): string {
    return this.Key;
  }

  get _FirstName(): string {
    return this.FirstName;
  }

  get _AccountType(): string {
    return this.AccountType;
  }

  get _DisplayTab(): string[] {
    return this.DisplayTab;
  }

  get _isLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
