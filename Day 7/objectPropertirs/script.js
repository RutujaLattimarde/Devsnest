var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

let result = "";

for (let key in student) {
  result += key;
  result += ",";
}

console.log(result);
