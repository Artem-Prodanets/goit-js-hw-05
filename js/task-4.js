const getTotalBalanceByGender = (users, gender) => {
    let totalBalance = 0;
    users
    .filter(user => user.gender === gender)
    .forEach(user => {
        totalBalance += user.balance;
    });
    return totalBalance;
};


// * решение 2:
// const getTotalBalanceByGender = (users, gender) => {
//     let totalBalance = 0;

//     users
//         .filter(user => user.gender === gender)  // Фільтруємо користувачів за статтю
//         .map(user => user.balance)  // Отримуємо масив балансів
//         .forEach(balance => totalBalance += balance);  // Обчислюємо загальний баланс

//     return totalBalance;
// };


console.log("=============================");


const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863
