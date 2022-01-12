function check_input() {
    if (!document.login_form.id_val.value) // login_form이름을 가진 form에 id_val 안의 value값이 없으면
    {
        alert("아이디를 입력하세요!");
        document.login_form.id_val.focus(); // 화면 커서 이동
        return;
    }
    if (!document.login_form.pw_val.value) // login_form이름을 가진 form에 pw_val 안의 value값이 없으면
    {
        alert("비밀번호를 입력하세요!"); // 화면 커서 이동
        return;
    }
    alert('로그인에 성공하였습니다.');
    document.location.href="index.html"
 }