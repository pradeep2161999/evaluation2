const person ={
    firstname : "pradeep",
    lastname : "tcrr",
    id : 007,
    fullname : function(){
        return this.firstname + " " + this.lastname;
    }
}
console.log(person.fullname());