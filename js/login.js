function check_input() {
  if (!document.login_form.id_val.value) {
    alert("아이디를 입력하세요!"), document.login_form.id_val.focus();
    return;
  }
  if (!document.login_form.pw_val.value) {
    alert("비밀번호를 입력하세요!");
    return;
  }
  alert("로그인에 성공하였습니다."), (document.location.href = "index.html");
}
