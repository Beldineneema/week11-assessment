// question 1


 }

 //question 2

var girl = {
    name : "Jane",
    age : "20"
};


//question 3
//scopes of a varriable in js are declared by var keyword whic is its current execution context and closures.

function foo() {
    var x = 1;
    function bar() {
      var y = 2;
      console.log(x); 
      console.log(y); 
    }
    bar();
    console.log(x);
    console.log(y);
  }
  
  foo();


//   question 4

function one1()
{
  return {
      bar: "hello"
  };
}
