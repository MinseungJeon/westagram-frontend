"use strict";

const userId = document.getElementsByTagName("input")[0];
const userPw = document.getElementsByTagName("input")[1];
const loginBtn = document.querySelector("button");

userId.addEventListener("keyup", function (event) {
  let validation = 0;

  for (let i = 0; i < userId.value.length; i++) {
    userId.value[i] === "@" ? (validation = 1) : (validation = 0);
  }

  const isVaild =
    userId.value.length > 0 && userPw.value.length > 4 && validation === 1;
  isVaild
    ? (loginBtn.style.backgroundColor = "#0095F6")
    : (loginBtn.style.backgroundColor = "#b2dffc");
});

userPw.addEventListener("keyup", function (event) {
  let validation = 0;

  for (let i = 0; i < userId.value.length; i++) {
    userId.value[i] === "@" ? (validation = 1) : (validation = 0);
  }

  const isVaild =
    userId.value.length > 0 && userPw.value.length > 4 && validation === 1;
  isVaild
    ? (loginBtn.style.backgroundColor = "#0095F6")
    : (loginBtn.style.backgroundColor = "#b2dffc");
});

/*keydown, keypress event는 다음 key가 눌려야 그 직전 event가 종료된 것으로 인식하는듯하다.
keydown/keypress를 사용할 경우, 예상보다 key를 한번 더 눌러야 배경색이 변경된다.*/