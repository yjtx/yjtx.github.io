
declare module exampleJSA{
    var jsA:number;
}
declare function callJsFunc(msg:string);

class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.callJs();
    }

    private callJs():void {
        callJsFunc("hello js");

        console.log("js memeber " + exampleJSA.jsA);
    }
}

module exampleA {
    export class A {
        public callEgretMethod(msg:string):void {
            console.log("method msg from js : " + msg);
        }

        public static CallEgretFunc(msg:string):void {
            console.log("static msg from js : " + msg);
        }
    }
}

module exampleB {
    export function b() {
        //调用方法
        var a:exampleA.A = new exampleA.A();
        a.callEgretMethod("method");

        //调用静态函数
        exampleA.A.CallEgretFunc("function");
    }
}