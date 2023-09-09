/* eslint-disable indent */
function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}
// * прописати метод getFullName() (повертає рядок з повним ім'ям) для користувача. Загальну логіку (тобто зазначений метод) винести в прототип.
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
users.push(getFullName);
console.table(users);
//Отримати масив користувачів, які не підписані (not subscribed)

const notSubscribed = users.filter(function (isNotSubscribed) {
  if (isNotSubscribed.isSubscribed === false) {
    return true;
  } else {
    return false;
  }
});
console.table(notSubscribed);

//Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
const nameWoomensSchooleAge = users.filter(function (isWoomen) {
  if (isWoomen.isMale === false && isWoomen.age <= 18 && isWoomen.age >= 6) {
    return getFullName;
  } else {
    return false;
  }
});
console.table(nameWoomensSchooleAge);

//Видалити з масиву користувача з email useremail5@gmail.com
const deleteGmail = users.findIndex(function (gmail) {
  if (gmail.email === 15) {
    users.splice(deleteGmail, 1);
  }
});
console.table(deleteGmail);
//Перевірити, чи є серед користувачів користувач з email`ом useremail99@gmail.com
const findEmail = users.findIndex(function (gmail99) {
  if (gmail99.email === "useremail99@gmail.com") {
    return true;
  } else {
    return false;
  }
});
console.table(findEmail);
//Перевірити, чи всі користувачі підписані (subscribed).
const Subscribed = users.filter(function (isUsersSubscribed) {
  if (isUsersSubscribed.isSubscribed === true) {
    return true;
  } else {
    return false;
  }
});
console.table(Subscribed);
