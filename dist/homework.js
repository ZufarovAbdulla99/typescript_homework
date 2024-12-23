"use strict";
// Uy ishi
// 1
// function getArrayLength<T>(array: T[]) {
//     return array.length
// }
// console.log(getArrayLength([1, 2, 3]))
// console.log(getArrayLength(['a', 'b', 'c']))
// 2 - misol
// type Status = "start" | "stop"
// // const status_: Status = "123" // xato
// const status1: Status = "start"
// const status2: Status = "stop"
// console.log(status1) // start
// console.log(status2) // stop
// 3-misol
// interface Dog {
//     bark: boolean;
// }
// interface Cat {
//     meow: boolean
// }
// type Pet = Cat | Dog
// const cat: Pet = {
//     bark: true,
//     meow: false,
// }
// const dog: Pet = {
//     bark: false,
//     meow: true,
// }
// console.log("cat: ", cat, "\n" , "dog: ", dog)
// 4-misol
// function typeGuard(arg: string | number) {
//     if(typeof arg === "string") {
//         return arg.toUpperCase()
//     }else if(typeof arg === "number") {
//         return arg ** 2
//     }
// }
// console.log(typeGuard("type")); // TYPE
// console.log(typeGuard(12)); // 144
// 5-misol
// @strictPropertyInitialization: false => tsconfig.json
// bu xossa false bo'lsa konstruktor yozish shart emas agar true bo'lsa yozish shart edi
// class Car {
//     brand: string;
//     year: number;
// }
// const myCar = new Car()
// myCar.brand = "BMW"
// myCar.year = 2012
// console.log(myCar)
// 6-misol
// interface Product {
//     readonly id: number;
//     name: string;
//     price?: number;
// }
// const myProduct:Product = {
//     id: 2,
//     name: "Kitob",
//     // price: 25000
// }
// myProduct.id = 3 // xato chunki id property readonly lekin kodni ishlaydi nimagadir id 3 bob qoladi
// console.log(myProduct)
// 7-misol
// const userInfo: readonly [number, string] = [25, "Abdulla"];
// console.log(userInfo[0])
// console.log(userInfo[1])
