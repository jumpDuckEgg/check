function foo(x) {
    return function _foo(y) {
        return x+y;
    }
    
}

let a = foo(2)(1);
console.log(a)