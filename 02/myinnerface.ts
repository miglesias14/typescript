interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    //startTrail:() => string first way of doing
    startTrail(): string
    getCoupon(couponname:string):number
}

const michelle: User = {dbId:21, email:"m@i.com", userId: 2121}
startTrail() => {
    return "trail started"
},
getCoupon(name:"michelle") => {
    return 10
}

