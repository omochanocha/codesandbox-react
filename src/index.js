/* 
 分割代入
*/
/* const myProfile = {
  name: "じぇけえ",
  age: 28
}; */

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

// const myProfile = ["じゃけえ", 28];
// const [name, age] = myProfile; // 配列の場合はキーが決まってないので順番で渡ってくる
// const message3 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message3);

/* 
スプレッド構文
*/
// const arr1 = [1, 2];
// 配列が展開される
// console.log(...arr1); //1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

/*
配列のコピーや結合
*/
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/*
mapやfilterを使った配列の処理
*/
// const nameArr = ["田中", "山田", "じゃけえ"];

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));
/* const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
}); */
// console.log(newNumArr);

/* const newNameArr = nameArr.map((name) => {
  if (name === "じゃけえ") {
    return name;
  } else {
    return `${name}さん`;
  }
}); */
// console.log(newNameArr);

/* 
三項演算子
*/
// const num = "1300";

// const fotmattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(fotmattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています!!" : "許容範囲内です";
// };
// console.log(checkSum(50, 40));
