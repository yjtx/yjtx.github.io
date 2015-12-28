var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.callJs();
    }
    var d = __define,c=Main,p=c.prototype;
    p.callJs = function () {
        callJsFunc("hello js");
        console.log("js memeber " + exampleJSA.jsA);
    };
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,'Main');
var exampleA;
(function (exampleA) {
    var A = (function () {
        function A() {
        }
        var d = __define,c=A,p=c.prototype;
        p.callEgretMethod = function (msg) {
            console.log("method msg from js : " + msg);
        };
        A.CallEgretFunc = function (msg) {
            console.log("static msg from js : " + msg);
        };
        return A;
    })();
    exampleA.A = A;
    egret.registerClass(A,'exampleA.A');
})(exampleA || (exampleA = {}));
var exampleB;
(function (exampleB) {
    function b() {
        //调用方法
        var a = new exampleA.A();
        a.callEgretMethod("method");
        //调用静态函数
        exampleA.A.CallEgretFunc("function");
    }
    exampleB.b = b;
})(exampleB || (exampleB = {}));
