/*
Question #1: Correctness

In TypeScript, write a function called "scriptAt". Prove that it's correct by providing a set of test cases. 
The function will do as follows.

Given a string as an input, find the index of the string "Script" within the input string. 

You can use Google to look up the method calls.

Questions:
1) How to ensure that the input is a string at compile time?
2) What did you learn from this exercise?
*/
scriptAt('find the index of the string "Script" within the input string.');

function scriptAt(str: string) {
    return str.indexOf('Script')
}

/*1) How to ensure that the input is a string at compile time?
    ans function have defind format input 

2) What did you learn from this exercise?
    ans know defind type in function and know module of srting

*/