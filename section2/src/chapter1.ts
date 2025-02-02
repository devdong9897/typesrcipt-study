// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = `hello`;
let str3: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 이렇게 임시로 null 값을 넣으면 타입스크립트에서는 오류가 난다.
// 이럴땐 컴파일러 옵션에서 "strictNullChecks": false 설정을 해주면 된다.
// let numA: number = null;

// 리터럴 타입 (값 그 자체)
// 리터럴 ->  값
let numA: 10 = 10;

let strA: "hello" = "hello";

let boolA: true = true;
