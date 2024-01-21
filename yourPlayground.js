console.log('hello')

const identity =(name ,surname) =>{

const person= {
    name:name,
    surname:surname,
    asset:10000,
    liability:2000,
    NetWorth: function  () {
       return this.asset-this.liability
    }
}
    // const prs = `the name is ${person.name} and surname is ${person.surname} and the networth is ${person.asset-person.liability}`

    // const prs = `the name is ${person.name} and surname is ${person.surname} and the networth is ${person.NetWorth}` //this will treat function as value to avoid this
    const prs = `the name is ${person.name} and surname is ${person.surname} and the networth is ${person.NetWorth()}`
    return prs
 
}

    console.log(identity('zahir','khan'))
 
    console.log('not working')

    fruits = ['🍌', '🍎', '🍊', '🍐']
    // console.log(fruits)

    // for(let i=0; i<fruits.length;i++){

    //     console.log(fruits[i])
    // }
    //morden ways to write loops 
    for(const fruit of fruits){
        console.log(fruit)
    }
    //sum of all numbers with push function
    // let arr1=0
    // let result=[]
    // let arr =[1,2,3,4,5]
    // for(const index of arr){
        
        
    //     arr1=arr1+index
    //    result.push(index)
    // }
    // console.log(arr1)
    // console.log(result)
    //using function

    const double1 =(numbers)=>{
        let result=[]
        for(const index of numbers){
            result.push(index*2)
        }
        return result
    }

    console.log(double1([1,2,3,4,5]))