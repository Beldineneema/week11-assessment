// question 1


<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <div id="Quiz">        
        <form>
            <label for="name">Student Name:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="class">Enter class:</label><br>
            <input type="text" id="class" name="class"><br>
                <label for="subject">Subject:</label><br>
                <input type="text" id="subject" name="subject"><br>
                <label for=" date">Date:</label><br>
                <input type="date" id="date" name="date"><br>
                <input type="button" onclick="quizResponses()" value="Submit">
            </form>
      </div>
   <script>
 function quizResponses(){
      var name=document.getElementById("name").value;
      var  className=document.getElementById("class").value;
      var subject=document.getElementById("subject").value;
      var date=document.getElementById("date").value;
      if(name ==="" || className===""||subject===""||date===""){
          alert("please fill in all the details!")
      }
      else{
        alert(` You have submitted your responses:  name:${name} , className:${className}, subject:${subject} , on this date${date}`)

      }
  } 
   </script> 
</body>
<br>


 

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
