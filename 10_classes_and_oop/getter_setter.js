class User{
    constructor(email,password){
        this.email=email
        this.password=password

    }
    //if we want to make getters and setter we will have to name the same as 
    //the properties
    //e.g  email and password for each getter and setter both  

    //to create getter "get" key word
    //if getter is being used the setter is also important to define

    get email(){
        return `${this._email} : email`
    }
    set email(value){
        this._email=value

    }


    get password(){
        return this._password.toUpperCase()
        //changed "password" to "_password"
        //in  both getter and setter
        //other wise the constructor and the setter will race each other to see 
        //who will set the password
        //same is also the case with getter
    }
    set password(value){
        this._password=value
    }
}
const hitesh = new User("ahmed@mial.com","afdsfsdfdsf")
console.log(hitesh.password)
console.log(hitesh.email)