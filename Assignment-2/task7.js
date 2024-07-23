function getPassingStudents(students) {
    return students.filter(student => student.score >= 60);
  }

  const students = [
    { name: "Muskan", score: 85 },
    { name: "Siddhant", score: 55 },
    { name: "Mrinal", score: 72 },
    { name: "Malvika", score: 58 },
    { name: "Prince", score: 90 }
  ];
  
  const passingStudents = getPassingStudents(students);
  
  console.log(passingStudents);