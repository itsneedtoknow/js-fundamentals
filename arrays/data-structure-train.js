const users = [
  { id: 1, name: 'Alex', age: 30, isActive: true },
  { id: 2, name: 'Elena', age: 22, isActive: false },
  { id: 3, name: 'Sasha', age: 25, isActive: true },
  { id: 4, name: 'Ivan', age: 19, isActive: true },
];

function getActiveSortedNames(users) {
 return users
 .filter(user => user.isActive)
 .sort((a,b)=> a.age - b.age)
 .map(user => user.name);
}

console.log(getActiveSortedNames(users)); 