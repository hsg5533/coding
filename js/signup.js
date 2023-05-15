function changePhone1() {
  let e = document.getElementById("phone1").value;
  3 == e.length && document.getElementById("phone2").focus();
}
function changePhone2() {
  let e = document.getElementById("phone2").value;
  4 == e.length && document.getElementById("phone3").focus();
}
function changePhone3() {
  let e = document.getElementById("phone3").value;
  4 == e.length &&
    (document.getElementById("sendMessage").focus(),
    document
      .getElementById("sendMessage")
      .setAttribute("style", "background-color:gray; color:white"),
    (document.getElementById("sendMessage").disabled = !1));
}
function initButton() {
  (document.getElementById("sendMessage").disabled = !0),
    (document.getElementById("completion").disabled = !0),
    document
      .getElementById("sendMessage")
      .setAttribute("style", "background-color:none;"),
    document
      .getElementById("completion")
      .setAttribute("style", "background-color:none;");
}
function getToken() {
  alert("인증확인을 눌러주세요"),
    document
      .getElementById("completion")
      .setAttribute("style", "background-color:gray; color:white"),
    (document.getElementById("completion").disabled = !1);
}
function checkCompletion() {
  alert("인증이 완료되었습니다."),
    initButton(),
    (document.getElementById("completion").innerHTML = "인증완료"),
    (document.getElementById("signUpButton").disabled = !1),
    document
      .getElementById("signUpButton")
      .setAttribute("style", "background-color:gray; color:white");
}
function signUpCheck() {
  let e = document.getElementById("email").value,
    n = document.getElementById("id").value,
    t = document.getElementById("password").value,
    r = document.getElementById("passwordCheck").value,
    l = document.getElementById("area").value,
    o = document.getElementById("gender_man").checked,
    d = document.getElementById("gender_woman").checked,
    g = !0;
  if (e.includes("@")) {
    let i = e.split("@")[0],
      E = e.split("@")[1];
    "" == i || "" == E
      ? ((document.getElementById("emailError").innerHTML =
          "이메일이 올바르지 않습니다."),
        (g = !1))
      : (document.getElementById("emailError").innerHTML = "");
  } else
    (document.getElementById("emailError").innerHTML =
      "이메일을 입력해주세요."),
      (g = !1);
  "" == n
    ? ((document.getElementById("idError").innerHTML =
        "아이디를 입력해주세요."),
      (g = !1))
    : (document.getElementById("idError").innerHTML = ""),
    "" == t
      ? ((document.getElementById("passwordError").innerHTML =
          "비밀번호를 입력해주세요."),
        (g = !1))
      : (document.getElementById("passwordError").innerHTML = ""),
    "" == r
      ? ((document.getElementById("passwordCheckError").innerHTML =
          "비밀번호를 다시 입력해주세요."),
        (g = !1))
      : t != r
      ? ((document.getElementById("passwordCheckError").innerHTML =
          "비밀번호가 동일하지 않습니다."),
        (g = !1))
      : (document.getElementById("passwordCheckError").innerHTML = ""),
    "지역을 선택하세요." == l
      ? ((document.getElementById("areaError").innerHTML =
          "지역을 선택해주세요."),
        (g = !1))
      : (document.getElementById("areaError").innerHTML = ""),
    o || d
      ? (document.getElementById("genderError").innerHTML = "")
      : ((document.getElementById("genderError").innerHTML =
          "성별을 선택해주세요."),
        (g = !1)),
    g &&
      ((document.getElementById("emailError").innerHTML = ""),
      (document.getElementById("idError").innerHTML = ""),
      (document.getElementById("passwordError").innerHTML = ""),
      (document.getElementById("passwordCheckError").innerHTML = ""),
      (document.getElementById("areaError").innerHTML = ""),
      (document.getElementById("genderError").innerHTML = ""),
      alert("가입이 완료되었습니다."),
      (document.location.href = "success.html"));
}
