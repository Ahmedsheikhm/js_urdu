function setUsername(username){
    //complex DB calls
    this.username=username//"this" of setUsername not used
    //"this" context of createUser is used as it was sent
    //in ".call"  as the first parametere
    //why the function does not work to successfully update the username
    // is because the variables are removed as soon as the setUsername has been run
    //so that is why we use the context of the createUser  function
    
    console.log("called")
}
 function createUser(username,email,password){
   // setUsername(username)//this did not set username 
    //the problem is that only the refrence was sent put the fnction was not
    //explicitly called


    setUsername.call(this,username) //sends current context
    //this.username=username //this was outsourced to the other function 
    //setUsername
    this.email=email
    this.password=password
 }
 const chai = new createUser("ahmed","ahmedsm@gamil.com",'hello')
 console.log(chai)