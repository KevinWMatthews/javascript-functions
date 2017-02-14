function js_function_demo() {
    console.log('Starting the demo');
}

// outer() returns a function!
function outer(x) {
    function inner(y) {
        return x - y;
    }
    return inner;
}

function nested_functions() {
    // The nested function can be called with two arguments:
    // the first for outer() and the second for inner().
    result = outer(3)(2);
    console.log(result);
}

function nested0() {
    // They can also be called individually, leveraging on the fact that outer() actually returns a function.
    // This returns outer() with x evaluated as 0 (even though the console still reads 'x').
    f0 = outer(0);
    console.log(f0);        // f0 is a function
    // When f0 is called, 'x' has already been evaluated at 0. 'y' will be evaluated as 7.
    result = f0(7);
    console.log(result);
}

function nested5() {
    f5 = outer(5);      // evaluates 'x' at 5
    console.log(f5);
    result = f5(7);     // call inner(7) but with 'x' as 5.
    console.log(result);
}

function nested10() {
    f10 = outer(10);
    console.log(f10);
    result = f10(7);
    console.log(result);
}
