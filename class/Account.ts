export abstract class Account {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    //setName = (name: string): void => {
       // this.name = name
      //  console.log('Nome alterado com sucesso!!')
   // }

    getName = (): string => {
        return this.name
    }

    deposit = (amount: number): void => {
        if (amount > 0) {
            this.balance += amount
            console.log('Você depositou R$'+ amount)
        } else {
            console.log('O valor do depósito deve ser positivo.')

        }
        
    }

    withdraw = (retreat: number): void => {
        if (this.balance > 0){
            if(retreat <= this.balance) {
                this.balance -= retreat
                 console.log('Você retirou R$'+ retreat)
            } else {
                console.log('Saldo insuficiente')
        }
    }

    }

        getBalance = (): void => {
            console.log('Saldo atual: R$$' + this.balance)
    }

        addBalance = (amount: number): void => {
            if (amount > 0) {
                this.balance += amount
                console.log('Valor de R$'+ amount + ' Adicionado em sua conta')
            } else {
                console.log('O valor do depósito deve ser positivo.')
    
            }
        }

        validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta invalida')
        
    }
}
