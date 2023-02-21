const parser = new DOMParser();
const students = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
const mass = parser.parseFromString(students, "text/xml");
const student = mass.querySelectorAll("student");
//console.log(student);
const studentsList = [];

student.forEach(function(elem){
  const nameNode = elem.querySelector("name");
  
  const langAttr = nameNode.getAttribute("lang");
  
  const firstNode = nameNode.querySelector("first");
  const secondNode = nameNode.querySelector("second");
  const ageNode = elem.querySelector("age");
  const profNode = elem.querySelector("prof");
  
  studentsList.push({
    language: langAttr,
    name: firstNode.textContent + " " + secondNode.textContent,
    age: ageNode.textContent,    
    profession: profNode.textContent,
  });
});
const result = {
    list: studentsList
};
console.log(result);