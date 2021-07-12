var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  
  let count = 0;
  for (let key in student) {
    count += 1;
  }
  console.log(count);