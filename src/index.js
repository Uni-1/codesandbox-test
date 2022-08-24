/**
 * const letなどの変数宣言
 */

// //従来はvarのみ
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "val1を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可
// let val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// val3 = "const変数を上書き";
// console.log(val3);

// //const変数は再宣言不可
// const val3 = "const変数を再宣言";
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "takuro",
//   age: 24,
// }
// val4.age = val4.age + 1;
// val4.addres = "kanagawa";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "takuro";
// const age = "24";
// //My name is name. Age is age.

// //従来の方法
// const message1 = "My name is " + name + ". Age is " + age + "!";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `My name is ${name}. Age is ${age}!!`;
// console.log(message2);

/**
 * アロー関数
 */

// //従来の関数
// function func1(str) {
//   return str;
// }
// const func1_2 = function (str) {
//   return str;
// };
// console.log(func1("This function is func1."));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// const func2_2 = (str) => str;
// console.log(func2("This function is func2."));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "takuro",
//   age: 24
// };

// const message1 = `My name is ${myProfile.name}!
// Age is ${myProfile.age}!`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `My name is ${name}!!
// Age is ${age}!!`;
// console.log(message2);

// const myProfile = ["takuro", 24];

// const message3 = `My name is ${myProfile[0]}!!!
// Age is ${myProfile[1]}!!!`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `My name is ${name}!!!!
// Age is ${age}!!!!`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`Hello ${name}!`);
// sayHello("takuro");
// sayHello(); //undefined

// /**
//  * スプレッド構文
//  */

// //配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   return console.log(num1 + num2);
// };
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// //イコールでは？
// const arr8 = arr4;
// console.log(arr8);
// //参照が引き継がれてしまう
// arr8[0] = 100;
// console.log(arr4);

// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

/** 
 * map や filte を使った配列処理
 */

const 