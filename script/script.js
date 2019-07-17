function argCheck(parameter1, parameter2){
  console.log(parameter1 + parameter2 + parameter3);
}

// Function with extra arguments
argCheck(1,2,3,4);
// Logs 6 (1 + 2 + 3, ignores 4)

// Function with missing arguments
argCheck(1,2);