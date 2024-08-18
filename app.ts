
import { PeopleAccount } from './class/PeopleAccount' 
import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount'



const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Fabio', 43)
peopleAccount.getBalance()
peopleAccount.deposit(50)
peopleAccount.getBalance()
peopleAccount.withdraw(60)
peopleAccount.withdraw(50)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('Nil', 10)
companyAccount.getBalance()
companyAccount.getloan(100)
companyAccount.getBalance()
console.log(companyAccount)

const newAccount: NewAccount = new NewAccount('Luan', 20)
newAccount.getDepositPlus(100)
console.log(newAccount)