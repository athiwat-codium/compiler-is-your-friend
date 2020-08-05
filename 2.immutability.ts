/*
Question #2: Immutability

The function below is a "safe divide" function. That is, it promises not to throw any "divide by zero" exceptions.

Questions:
1) Spot and describe the cause of the bug that causes the "divide by zero" to occur.
    ans x can change number by use let 
2) Now, make a *single* code change on line 12:
2.1) without changing the number 42;
    ans change from let to const for protect changing value of x
2.2) such that cause of the bug can be spotted by the compiler at *compile time*.
    ans when compile will error because change defind let to const 
3) What did you learn from this exercise?
    ans learn about let and cornt
*/
safeDivide()

function safeDivide(): number {
    const x: number = 43;

    if (x == 0) throw new Error("x should not be 0");

    x = x - 42;
    return 42 / x;
}
