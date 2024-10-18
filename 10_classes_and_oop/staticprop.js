class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username ${this.username}`)
    }
    static createID(){
        return `123`
    }
}
const hitesh = new User("hitesh")
//console.log(hitesh.createID())

class teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone = new teacher("iphone","iphone@phone..com")
iphone.logme()
iphone.createID()