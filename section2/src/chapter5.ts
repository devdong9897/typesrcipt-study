// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korea = "ko",
  english = "en",
}

const user1 = {
  name: "도비",
  role: Role.ADMIN, // 0 <- 관리자
  english: Language.korea,
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // <- 일반 유저
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // <- 게스트
};

console.log(user1, user2, user3);
