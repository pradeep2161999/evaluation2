function safeguarding(fun) {
  console.log("type of fun is", typeof fun)
  if (typeof fun === "function") {
    fun();
  } else console.log("fun is not a function");
}

let a = 10;
safeguarding(arguments);
safeguarding(a);

function arguments() {
  console.log("hiiii");
}