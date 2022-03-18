// const person: {
//     name:string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Aristela',
//     age: 31,
//     hobbies: ['gym', 'Cooking'],
//     role: [2, 'author']
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Aristela',
    age: 31,
    hobbies: ['gym', 'Cooking'],
    role: Role.ADMIN
};
var favoriteActivity;
favoriteActivity = ["Sports"];
console.log(person.name);
