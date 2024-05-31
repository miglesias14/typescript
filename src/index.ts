class User {
    protected _courseCount = 1
    email: string 
    name: string
    city: string = ""
    constructor(email: string, name: string){
        this.email = email;
        this.name = name
    }
private deleteToken(){
    console.log("Token deleted")
}

get getAppleEmail(): string {
    return `apple${this.email}`
}

get courseCount():number{
    return this._courseCount
}
// setters should never have a return type ex: void, num,etc
set courseCount(courseNum) {
    if (courseNum <= 1){
    throw new Error("Course count should be more than 1")
}
this._courseCount = courseNum
}
}

class SubUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const mimi = new User("m@m.com", "michelle");
