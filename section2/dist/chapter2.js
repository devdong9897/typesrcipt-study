// 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "winterlood"];
// 타입스크립트에서 <> 사용해서 다른 타입을 넣는것을 제네릭 문법이라고 한다.
let boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
let tup2 = [1, "2", true];
// 인덱스의 순서와 위치가 헷갈릴수 있는데 이럴 때 튜플을 사용
const users = [
    ["도비", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    // [5, "최아무개"]
];
export {};
