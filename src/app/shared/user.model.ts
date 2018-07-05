export class User {
  UserName: string;
  Key: string;
  FirstName: string;
  private _Birthday: string;
  private _Address: string;
  private _Tel_phone: string;
  private _Email: string;
  AccountType: string;
  DisplayTab: string[];
  isLoggedIn: boolean;
  SubscribedModules: string[];
  public constructor() {
    this.isLoggedIn = false;
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

  get Birthday(): string {
    return this._Birthday;
  }

  get Address(): string {
    return this._Address;
  }

  get Tel_phone(): string {
    return this._Tel_phone;
  }

  get Email(): string {
    return this._Email;
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
