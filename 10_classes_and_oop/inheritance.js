class User{
    constructor(username){
        this.username=username
    }
    logME(){
        console.log(`Username is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`new course was added by ${this.username}`)
    }
}
const chai= new Teacher("chai","chai@gmail.com","123")
chai.addCourse()
const tea=new User("tea","tea@gmail.com","opopo")
tea.logME()
chai.logME()
console.log(tea instanceof Teacher)//tea is not an instance of teacher
//its an instance of a user
console.log(chai instanceof Teacher)//chai is an instance of 
//teacher
console.log(chai instanceof User)//chai is also an instance of User through inheritance
//an instance of an instance