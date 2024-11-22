/*exercice 1*/

let user = { firstName: "Yeppy", lastName: "Yep" };

console.log(user.lastName);
console.log(user.firstName);

user.firstName = "Yeppidy";
console.log(user.firstName);

/*exercice 2*/

let users = [
  {
    firstName: "Teddy",
    lastName: "Roosevelt",
  },
  {
    firstName: "Barack",
    lastName: "Obama",
  },
  {
    firstName: "Donald",
    lastName: "Trump",
  },
];

console.log(users[0].firstName);
console.log(users[1].firstName);
console.log(users[2].firstName);

/*exercice 3*/

let pizzas = [
  {
    name: "Veggie",
    ingredients: ["Tomato", "Cheese", "Mushrooms"],
    price: null,
  },
  {
    name: "Meattie",
    ingredients: ["Tomato", "Cheese", "Meat"],
    price: null,
  },
  {
    name: "Fishie",
    ingredients: ["Tomato", "Cheese", "Fish"],
    price: null,
  },
  {
    name: "Supreme",
    ingredients: ["Tomato", "Cheese", "Meat", "Olive"],
    price: null,
  },
];

for (let pizza of pizzas) {
  if (pizza.ingredients.length <= 3) {
    pizza.price = 7.99;
  } else {
    pizza.price = 8.99;
  }
}

for (let pizza of pizzas) {
  console.log(pizza.price);
}

/*exercice 4*/

let relationships = [
  {
    name: "Sarah",
    friends: ["John", "Sophie"],
  },
  {
    name: "John",
    friends: ["Sophie", "Simon"],
  },
  {
    name: "Simon",
    friends: ["John", "Sophie", "Sarah"],
  },
  {
    name: "Sophie",
    friends: ["John", "Sarah"],
  },
];

for (let relationship of relationships) {
  let person = relationship.name;
  let friends = relationship.friends;
  console.log(person);
  for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
  }
}

/*exercice 5 ( en cours )*/

function checkFriendList(person, friends) {
  for (let i = 0; i < friends.length; i++) {
    if (person === friends[i]) {
      return true;
    }
  }
  return false;
}

for (let relationship of relationships) {
  let person = relationship.name;
  let friends = relationship.friends;

  console.log(person);
}
/* for (let friend of friends) {
    if (checkFriendList(person, friend)) {
    }
    console.log(friend);
  }
}
  */
