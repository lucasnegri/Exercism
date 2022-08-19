//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  
  constructor() {
    this._balance = 0,
    this.accountOpen = false
  }

  open() {
    if(this.accountOpen) {throw new ValueError('Bank account already exist.')}
    this.accountOpen = true;  
  }

  close() {
    if(!this.accountOpen){ throw new ValueError('Bank account is closed already.')}; 
    this._balance = 0;
    this.accountOpen = false;
  }

  deposit(value) {
    if(!this.accountOpen){ throw new ValueError('Bank account is not opened yet.') }
    if(value < 0){ throw new ValueError("Can't deposit negative values") }
    this._balance += value
  }

  withdraw(value) {
    if(!this.accountOpen){throw new ValueError('Bank account is not opened yet.')}
    if(this._balance < 0){throw new ValueError('Bank account has zero balance.')}
    if(this._balance < value){throw new ValueError('The value is more then you have')}
    if(value < 0){throw new ValueError("Can't withdraw negative values.")};
    this._balance -= value;
  }

  get balance() {
    if (!this.accountOpen){throw new ValueError('Bank account has no credit')}
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
