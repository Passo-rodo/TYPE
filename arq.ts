// const num: number = 15

// if(num > 15) {
//     console.log('Num maior que 15')
// } else if(num === 15){
//     console.log('Num é igual a 15')
// } else {
//     console.log('Num menor que 15')
// }

// const typeUser = {
//     admin: 'Seja bem vindo admin',
//     student: 'Você é estudante',
//     viewer: 'Você pode visualizar'
// }

// function validateUser(user: string){
//     console.log(typeUser[user as keyof typeof typeUser])
// }

// const usuario = 'viewer'

// validateUser(usuario)
// validateUser('student')
// validateUser('admin')


//###################repetição#################################

// for(let i = 1; i < 10; i+=2){
//     console.log(i)
    
// }

// let n = 2

// while(n < 6){
//     console.log(n)
//     n++
// }


//#############Arrey##############

// const array: Array<number> = [1, 2, 3, 4]

// const stringArray: string[] = ['a', 'b', 'c', 'd']

// //console.log(stringArray.length)
// // console.log('Antes', array)
// // array.push(5)
// // console.log('depois', array)
// // array.pop()
// // console.log('retirando ultimo', array)
// // const buscaNum = array.find(num => num > 2)
// // console.log(buscaNum)

// // array.forEach(num => {
// //     if(num > 2 && num % 2 === 0){
// //         console.log(num * 2)
// //     }
// // })

// array.map(num => console.log(num))

// ##############poo######################//

// const user = {
//     name: 'Fabio',    
//     age: 43,
//     showName(){
//         console.log(this.name)  
//     }
// }

// const otherUser = {
//     name: 'Nil',    
//     age: 38,
//     showName(){
//         console.log(this.name)  
//     }
// }

// user.showName()
// otherUser.showName()


// class User {
//     name: string = 'Fabio'
//     age: number = 43

//     constructor(name: string, age: number){
//         this.name = name
//         this.age = age
//     }

//     showName = () => {
//         console.log(this.name) 
//     }
//     showAge = () => {
//         console.log(this.age) 
//     }
    
// }

// const user = new User('Fabio', 43)
//     user.showName()
//     user.showAge()

  

// const otherUser = new User('Nil', 38)
//     otherUser.showAge()
//     // otherUser.showName()    