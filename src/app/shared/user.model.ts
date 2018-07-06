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
  SubscribedModules: string[];
  public constructor() {
    if (this.AccountType === 'admin') {
      this.DisplayTab = ['home', 'profile'];
    } else if (this.AccountType === 'student') {
      this.DisplayTab = ['home', 'profile' , 'contact' , 'logout' ];
    } else if (this.AccountType === 'lecturer') {
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

  public _UserName(): string {
    return localStorage.getItem('un');
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

  public  _isLoggedIn(): boolean {
    return localStorage.getItem('un') != null;
  }
}
