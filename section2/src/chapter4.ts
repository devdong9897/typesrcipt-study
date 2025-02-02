// 타입 별칭 (타입을 변수처럼 사용)

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "도비",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "대구",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "대구",
};

// 인덱스 시그니처 (객체 타입의 정의를 더 유연하게 하도록 도와준다)

// // key가 string타입이고 value도 string타입인 프로퍼티들은 모두 허용하도록 타입을 만들어준다.

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberAndStingCodes: CountryNumberCodes = {
  Korea: 410,
};
