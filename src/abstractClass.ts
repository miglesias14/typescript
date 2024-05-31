abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}


    abstract getSepia(): void 
    getReelTime():number {
        //some complex calculation
        return 8
    }

}

class Instagram extends TakePhoto{
    constructor (
        public cameraMode: string,
        public filter: string, 
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

const mi = new Instagram("test", "test", 3)
mi.getReelTime()
// you can make abstract classes but abstract classes cannot create
//create object on their own, but they help define the class who are inheriting them get a 
// better structure of their classes & some compulsory thing that you have to put 
// if u want to put up some method that are compulsory lead to there you can make those methods
// as well in case if you want to give them some features by default