// 휴대폰 번호 입력 부분
function changePhone1(){
  const phone1 = document.getElementById("phone1").value // 010
  if(phone1.length === 3){  //3개의 문자를 입력받으면
      document.getElementById("phone2").focus();
  }
}
function changePhone2(){
  const phone2 = document.getElementById("phone2").value // 1234
  if(phone2.length === 4){  //4개의 문자를 입력받으면
      document.getElementById("phone3").focus();
  }
}
function changePhone3(){
  const phone3 = document.getElementById("phone3").value // 5678
  if(phone3.length === 4){  //4개의 문자를 입력받으면
    document.getElementById("sendMessage").focus();
    document.getElementById("sendMessage").setAttribute("style","background-color:gray; color:white") //인증하기 버튼의 배경색 및 문자색 변경
    document.getElementById("sendMessage").disabled = false; //인증하기 버튼 활성화
  }
}

// 인증부분
function initButton(){
  document.getElementById("sendMessage").disabled = true; 
  document.getElementById("completion").disabled = true;
  document.getElementById("sendMessage").setAttribute("style","background-color:none;")
  document.getElementById("completion").setAttribute("style","background-color:none;")
}

function getToken(){
  alert("인증확인을 눌러주세요");
  document.getElementById("completion").setAttribute("style","background-color:gray; color:white")  //인증확인 버튼의 배경색 및 문자색 변경
  document.getElementById("completion").disabled = false; //인증확인 버튼 활성화
};

function checkCompletion(){
  alert("인증이 완료되었습니다.")
  initButton();
  document.getElementById("completion").innerHTML="인증완료"
  document.getElementById("signUpButton").disabled = false;
  document.getElementById("signUpButton").setAttribute("style","background-color:gray; color:white")
}

// 가입부분 체크
function signUpCheck(){
  let email = document.getElementById("email").value
  let id = document.getElementById("id").value
  let password = document.getElementById("password").value
  let passwordCheck = document.getElementById("passwordCheck").value
  let area = document.getElementById("area").value
  let gender_man = document.getElementById("gender_man").checked
  let gender_woman = document.getElementById("gender_woman").checked
  let check = true;
  // 이메일확인
  if(email.includes('@')){  // @를 기준으로 문자열 나누기
    let emailId = email.split('@')[0]  // @를 기준으로 앞쪽부분을 emailId로 저장
    let emailServer = email.split('@')[1]  // @를 기준으로 뒷쪽부분을 emailServer로 저장
    // 이메일 형식으로 입력되지 않았을 경우
    if(emailId === "" || emailServer === ""){
    document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
    check = false
    }
    else{
    document.getElementById("emailError").innerHTML=""
    }
  // 이메일을 입력하지 않았을 경우
  }   
  else{
    document.getElementById("emailError").innerHTML="이메일을 입력해주세요."
    check = false
  }
  // 아이디를 입력하지 않았을 경우
  if(id===""){
    document.getElementById("idError").innerHTML="아이디를 입력해주세요."
    check = false
  }
  else{
    document.getElementById("idError").innerHTML=""
  }
  // 비밀번호가 입력되지 않았을 경우
  if(password===""){
    document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
    check = false
  }
  else{
    document.getElementById("passwordError").innerHTML=""
  }
  // 비밀번호가 다시 입력되지 않았을 경우
  if(passwordCheck===""){
    document.getElementById("passwordCheckError").innerHTML="비밀번호를 다시 입력해주세요."
    check = false
  }
  // 입력된 비밀번호가 서로 다를 경우  
  else if(password !== passwordCheck){
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML="비밀번호가 동일하지 않습니다."
    check = false
  }
  else{
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
  }
  // 지역선택 확인
  if(area === "지역을 선택하세요."){
    document.getElementById("areaError").innerHTML="지역을 선택해주세요."
    check = false
  }
  else{
    document.getElementById("areaError").innerHTML=""
  }
  // 성별체크확인
  if (!gender_man && !gender_woman){  // 남자와 여자가 모두 선택이 안되었을 경우
    document.getElementById("genderError").innerHTML="성별을 선택해주세요."
    check = false
  }
  else{
    document.getElementById("genderError").innerHTML=""
  }
  //가입 완료
  if(check){
    document.getElementById("emailError").innerHTML=""
    document.getElementById("idError").innerHTML=""
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
    document.getElementById("areaError").innerHTML=""
    document.getElementById("genderError").innerHTML=""
    alert("가입이 완료되었습니다.");
    document.location.href="success.html"
  }
}
