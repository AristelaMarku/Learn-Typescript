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


enum Role {ADMIN = 5, READ_ONLY = 100, AUTHOR = 200};

const person = {
    name: 'Aristela',
    age: 31,
    hobbies: ['gym', 'Cooking'],
    role: Role.ADMIN
}

let favoriteActivity: string[];
favoriteActivity = ["Sports"]

console.log(person.name)