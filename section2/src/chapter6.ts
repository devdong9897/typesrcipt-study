// any
// 특정 변수의 타입을 우리가 확실히 모를 때
// 타입에 상관 없이 아무 값이나 담을 수 있게 한다.

let anyVar: any = 10;
anyVar = "hello";

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// any와 차이점
// 모든 값을 저장할 수있지만 반대로는 안된다.
// num = unknownVar (불가능)

// unknown 타입의 값을 활용하고 싶으면 if문을 이용한다.
if (typeof unknownVar === "number") {
  num = unknownVar;
}
