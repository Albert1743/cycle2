// let businessmen = [
//     {
//         name: "Hasan",
//         age: "2008-07-28",
//         gender: 'm',
//         tax: 12,
//         budget: 1000,
//         expensesPerYear: [200,100,50]
//     },
//     {
//         name: "Alsafir",
//         age: "2008-10-13",
//         gender: 'm',
//         tax: 9,
//         budget: 2500,
//         expensesPerYear: [200,500,50]
//     },
//     {
//         name: "Allayor",
//         age: "2008-06-24",
//         gender: 'w',
//         tax: 12,
//         budget: 2000,
//         expensesPerYear: [200,100,120]
//     },
//     {
//         name: "Radmir",
//         age: "2007-04-28",
//         gender: 'w',
//         tax: 5,
//         budget: 4000,
//         expensesPerYear: [200,1000,500]
//     },
//     {
//         name: "Jaxongir",
//         age: "2006-09-03",
//         gender: 'm',
//         tax: 13,
//         budget: 3000,
//         expensesPerYear: [200,100,1200]
//     },
//     {
//         name: "Bexruz",
//         age: "2007-11-27",
//         gender: 'w',
//         tax: 9,
//         budget: 2400,
//         expensesPerYear: [200,100,900]
//     },
//     {
//         name: "Alibek",
//         age: "2006-04-12",
//         gender: 'm',
//         tax: 15,
//         budget: 4200,
//         expensesPerYear: [200,100,2000]
//     }
// ]


// let succesfull = []
// let unsuccesfull = []

// let totalTaxes = 0

// for(let item of businessmen) {
//     item.expensesPerMonth = 0
//     for(let expense of item.expensesPerYear) {
//         item.expensesPerMonth += Math.round(expense / 12)
//     }
//     item.percentage = Math.round(item.expensesPerMonth * 100 / (item.budget / 12)) + "%"
//     let total = (item.budget / 12) - ((item.tax * (item.budget / 12) /100) + item.expensesPerMonth)
// let ch = item.tax.reduce((a,b) => {
//     a.tax + b.tax
// },0)


// console.log(ch);

// if(total < 0) {
//     unsuccesfull.push(item.name)
// } else{
//     succesfull.push(item.name)
// }

// }
// console.log(businessmen);



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let ask = prompt("На каком числе вы хотите остановиться?")
let numberStop = parseInt(ask)

if (numberStop >= 1 && numberStop <= arr.length) {
    let result = []
    let sum = 0

    for (let i = 0; i < numberStop; i++) {
        sum += arr[i]
        result.push(sum)
    }
    console.log("Результат:", result)
} else {
    console.log("Нет такого числа. Введите число от 1 до " + arr.length)
}


