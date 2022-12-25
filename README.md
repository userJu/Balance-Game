# Balance Game

<br/>

## ❄ 12/25 과제

<br/>

- [ ] services

  - [ ] topics collection 추가하기

- [ ] mainpage

  - [ ] 로그인한 사용자 이름 / 레벨 / 이미지 불러오기

  - 방 만들기 버튼 클릭 시
    - [ ] topics 선택
    - [ ] 제목 작성
  - 바로 시작 버튼 -> 후순위로 미루기

  - 방 클릭시
    - [ ] firestore collection games 내부 memebers에 user 추가
    - [ ] waitGamePage로 이동

- [ ] waitGamePage
  - [ ] members 배열을 돌면서 게임 내부 유저 추가.
  - [ ] gameList object에 readyUser 배열 추가하기
- [ ] 모든 유저가 ready되었을 경우 playingGamePage로 이동
