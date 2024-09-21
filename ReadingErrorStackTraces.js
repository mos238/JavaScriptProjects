/* Reading Error Stack Traces
Now that we know what information we can get from an error stack trace, let’s take a look at an example.

/home/ccuser/workspace/learn-javascript-debugging-code/app.js:1
myVariable;
^

ReferenceError: myVariable is not defined
...

Using this stack trace, let’s answer three questions you should ask yourself every time you want to debug an error:

In what line did the error occur? You can almost always find this information on the first line of the stack trace in the following format <file path>/<file name>:<line number>. 
In this example, the location is app.js:1. This means that the error was thrown in the file named app.js on line 1.
What type of error was thrown? The first word on the fifth line of the stack trace is the type of error that was thrown. In this case, the type of error was ReferenceError. 
We will discuss this error type in the next exercise.
What is the error message? The rest of the fifth line after the error type provides an error message, describing what went wrong. 
In this case, the description is myVariable is not defined.
You might notice in this example we skipped explaining a few lines in the stack trace and only included the beginning of the stack trace. 
A large part of debugging errors is recognizing which pieces of information are useful and which ones aren’t. For now, you will succeed by focusing 
on just the first and fifth lines of your error stack traces.

*/
/*/Based on the following error stack trace, fill in the answers to the questions below:

------------------------------------------------------------------

/home/ccuser/workspace/learn-javascript-debugging-code/script.js:5
if (numberSum > total;) {
                     ^
            
SyntaxError: Unexpected token ;

------------------------------------------------------------------

From what file was this error thrown?
1 - Answer:script.js 
On what line of that file was this error thrown?
2 - Answer: 5
What type of error was thrown in this stack trace?
3 - Answer: SyntaxError
What is the description of the error in this stack trace?
4 - Answer: Unexpected token/*/


/*
1.
Near the beginning of the text file in the code editor, you will find an example stack trace. On line 14 of the text file, fill in the name of the file throwing the error in this stack trace.

If you are unsure how to fill in the answer, feel free to check out the hint.

Checkpoint 2 Passed
2.
On line 16 of the text file, fill in the line number throwing the error in the example stack trace.

Checkpoint 3 Passed
3.
On line 18 of the text file, fill in the type of the error being thrown in the example stack trace.

Checkpoint 4 Passed
4.
On line 20 of the text file, fill in the description of the error being thrown in the example stack trace. */

