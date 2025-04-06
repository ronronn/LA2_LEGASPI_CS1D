//person 1
const student1 = {
  name: "Ronald Carillo Legaspi",
  birthdate: "November 1, 2005",
  birthplace: "Alilem, Ilocos Sur",
  address: "Dalawa, Alilem, Ilocos Sur",
  course: "Bachelor of Science in omputer Science",
  dreamjob: "Software Engineer"
};

//persson 2
const student2 = {
  name: "John Harley Araos Bermudez",
  birthdate: "April 1, 2007",
  birthplace: "Agoo, LA union",
  Address: "Paypayad, Candon City, Ilocos Sur",
  course: "Bachelor of Science in Computer Science",
  dreamjob: "Air Traffic Control"
};

//person 3
const student3 = {
  name: "Neil O'brein Etrata Ocampo",
  birthdate: "September 17, 2003",
  birthplace: "Parioc 1st, Candon City, Ilocos sur",
  Address: "Oaig daya, Galimuyod, Candon City, Ilocos Sur",
  course: "Bachelor of Science in Computer Science",
  dreamjob: "game developer" 
};

//function to print formatted student info 
function printStudentInfo(student) {
  console.log(
    `[${student.name.toUpperCase()}] was born [${student.birthdate}] at [${student.birthplace}]
    `and currently living at [${student.address.toUpperCase()}]. [${student.name.toLowerCase()}]
    `[${student.course.toLowerCase()}] and dreams to be [${student.dreamjob}] after graduate()}]
  );
}

//printing details for each person
printStudentInfo(student1);
printStudentInfo(student2);
printStudentInfo(student3);
  
  
