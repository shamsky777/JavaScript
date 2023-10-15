let fullName = "Nika Shamatava";

let firstName;

let lastName;

//firstName = fullName.slice(0, 3);

//lastName = fullName.slice(4);

firstName = fullName.slice(0, fullName.indexOf(" "));

lastName = fullName.slice(fullName.indexOf(" ") + 1);



console.log(firstName);

console.log(lastName);