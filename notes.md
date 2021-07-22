# JS

---

- Dynamic, weakly-typed programming language
- Interpreted "on the fly" compiled language
- "Hosted language": Runs in different environments (e.g. in browser)
- Most prominent use-case is running code in a browser
- The V8 engine runs JavaScript in Chrome, in Firefox its SpiderMonkey, these engines parse code, compile it to machine code, and then executes the machine code (this all happens on a single thread)
- Being dynamic and interpreted means that code can change at runtime, even the type of a variable
- Data types are assumed automatically
- Google's JS Engine, V8, was extracted to run JS anywhere (Node.js)
- NodeJS can be executed on any machine so it is often used to build web backends
- NodeJS can access the local filesystem, interact with the OS, etc. It CANT manipulate HTML or CSS like JavaScript can (because it does not have direct access to the browser? Or maybe just not access to the front end, either way the syntax is the same)
- 1995, Netscape introduces LiveScript which became JavaScript, then in 1996 Microsoft releases its own version for IE.
- Late 1996 JavaScript gets standardized by ECMA International (ECMAScript)
- Microsoft was being annoying in the late 90s and didn't help in the standardization
- 2006-2011 saw huge progress in JavaScript ecosystem, even Microsoft couldn't ignore it anymore
- camelCase for variables is best practices, not snake case
- you can name with $ and \_ anywhere including beginning, otherwise only letters and digits (but never starting with digits)
- you cannot use any other special characters besides $ and \_, INCLUDING white space
- you can declare a variable without initializing it (giving it a value)
- undefined is the default value of uninitialized variables
- you should never assigned undefined as a value manually
- null is never assumed by default
- you can assign null as a value if you want to 'reset' or 'clear' a variable
- null and undefined are similar but not equal (they are also their own data types)
- NaN is not a data type and can technically can be used in calculations, this is usually the result of calculations that are invalid (part of the whole dynamic code aspect of JS)
- In the end, arrays ARE objects, keep this in mind when comparing objects and arrays
- Objects and Arrays are kind of special in JS
- Generally JS conditions work with booleans but they also work with falsy and truthy values
- Truthy is if your conditional is just checking for a true value (EVEN if you are feeding it a non boolean parameter), vice versa for falsy
- for example, you can have a condition where the parameter's value ends up being 0. If this is the case, it is treated as false, and is thus a falsy value. Any number including negative numbers resolve to true besides 0. Empty strings are treated as false, any other strings are true, all objects and arrays even empty ones are always true, null/undefined/NaN are always false
- Examples of logical operator tricks

```
const userName = 'Max';
const altName = '';
console.log(userName === 'Max'); // generates and prints a boolean => true
console.log(userName); // wasn't touched, still is a string => 'Max'

console.log(userName || null); // userName is truthy and therefore returned by || => 'Max'
console.log(altName || 'Max'); // altName is falsy (empty string), hence 'Max' is returned => 'Max'
console.log(altName || ''); // both altName and '' are falsy but if the first operand is falsy, the second one is always returned => ''
console.log(altName || null || 'Anna'); // altName and null are falsy, 'Anna' is returned => 'Anna'

console.log(userName && 'Anna'); // userName is truthy, hence second (!) value is returned => 'Anna'
console.log(altName && 'Anna'); // altName is falsy, hence first value is returned => ''
console.log(userName && ''); // userName is truthy, hence second value is returned => ''
```

**Always keep in mind: NO** operator (neither ===, > etc. nor && or ||) changes the variable you might be using in the comparison. In the above examples, the values stored in userName and altName **are NEVER changed**.

===, > etc. just **generate new boolean values** which are used in the comparison. || and && **generate NO booleans**, they just treat the **values before and after them as conditions** (which therefore need to yield boolean values and are coerced to booleans if required).

Because of the above-described behaviors, you often use || in JavaScript to assign default/ fallback values to variables/ constants:

```
const enteredValue = ''; // let's assume this is set based on some input provided by the user, therefore it might be an empty string

const userName = enteredValue || 'PLACEHOLDER'; // will assign 'PLACEHOLDER' if enteredValue is an empty string
```

- Four main loops in JS,
  - the **for** loop, for executing code a certain amount of times (with iteration variable)
  ```
  for (let i = 0; i < 3; i++) {
      console.log(i);
  }
  ```
  - **for-of loop**, for executing every element in an array
  ```
  for (const element of array) {
      console.log(element);
  }
  ```
  - **for-in loop**, for executing every key in an object
  ```
  for (const key in obj) {
      console.log(key);
      console.log(obj[key]);
  }
  ```
  - and **while** loop, for executing code as long as condition is true (potentially infinite, be careful)
  ```
  while (isLoggedIn) {
      ...
  }
  ```
- you can never eliminate all errors from code because there are still dependency errors, network errors, and user errors
- The best way to handle these errors is to throw and catch them gracefully or recover if possible
- functions are stored in heap, when script runs then the stack is used for anonymous execution, and then 'stacks' up processes to execute
- JS is single threaded, it only does one thing at a time...basically speaking
- The purpose of the event loop is to basically inject data into your running script without interrupting the order or flow...I think