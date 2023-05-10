<img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">

/ ->homepage
/login
/join
/mypage
/admin
/history

/freeboard

/notice
/notice/create

/user

dotenv

5/5(금)
지금 history랑 비하인드 변수명이 정체성없음 리팩토링때 고치기
또 해머의 역사나 공지사항에 글길이 제한있는데 늘리는 법 알아보기(프론트쪽 문제일수도)

5/8(월)

- 서버요청의 status코드 추가하기
  20x : 잘됨
  200 - ok
  <!-- 201- 요청이 성공적이고 리소스가 만들어짐(보통 Post에서) -->
  204 - Ok지만 보내줄게 없을때(delete잘되었을때)
  40x : 클라이언트오류
  400 - 잘못된 요청, 필수파라미터안주거나
  <!-- 401 - unauthorization 잘못된 인증 -->
  404 - 요청한 자원이 존재하지않음
  <!-- 409 - conflict 이미 계정이 있어서 충돌이 일어남 -->
  50x : 서버오류
