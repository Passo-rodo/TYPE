import { Account } from "./Account"

export class CompanyAccount extends Account {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getloan = (amount: number): void => {
        if(this.validateStatus()){
          if(amount > 0){
            this.addBalance(amount)
            console.log('Empréstimo de R$' + amount + ' Concedido')
          }  else {
            console.log('Valor do empréstimo invalido')
          }
        } else {
        console.log('Empréstimo não autorizado')
    }
}


    //deposit = (): void => {
        //console.log('Empresa realizou um deposito')
  //  }
}