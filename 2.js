const jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`
const people = JSON.parse(jsonString);
let i = 0;
const studentsList = [];
while(people.list[i] ){
  const list = people.list[i];
  studentsList.push({
    name: list.name,
    age: list.age,
    prof: list.prof
  });
 i++;
}

const result = {
    list: studentsList
};
console.log(result);