function createUser(username,score){
    this.username=username,
    this.score=score
}
createUser.prototype.increment=function(){
    this.score++ 
}
createUser.prototype.printMe=function(){
    console.log(`The score is ${this.score}`);
}
const chai= new createUser("chai",80)
const tea= new createUser("tea",45)
chai.printMe()