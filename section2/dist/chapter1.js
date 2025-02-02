// number
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// string
let str1 = "hello";
let str2 = `hello`;
let str3 = `hello ${num1}`;
// boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let unde1 = undefined;
// 이렇게 임시로 null 값을 넣으면 타입스크립트에서는 오류가 난다.
// 이럴땐 컴파일러 옵션에서 "strictNullChecks": false 설정을 해주면 된다.
// let numA: number = null;
// 리터럴 타입 (값 그 자체)
// 리터럴 ->  값
let numA = 10;
let strA = "hello";
let boolA = true;
export {};
