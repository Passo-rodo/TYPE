import { Account } from "./Account"

export class NewAccount extends Account {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getDepositPlus = (amount: number): void => {
        if(this.validateStatus()){
          if(amount > 0){
            this.addBalance(amount += 10)
            console.log('Valor de R$' + amount + ' depositado com sucesso')
          }  else {
            console.log('Valor invalido')
          }
        } else {
        console.log('valor não autorizado')
    }
}

}