
  // 폰번호에 자동으로 - 넣어주기
function autoHypenPhone(str){
  str = str.replace(/[^0-9]/g, '');
  var tmp = '';
  if( str.length < 4){
      return str;
  }else if(str.length < 7){
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3);
      return tmp;
  }else if(str.length < 11){
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3, 3);
      tmp += '-';
      tmp += str.substr(6);
      return tmp;
  }else{
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3, 4);
      tmp += '-';
      tmp += str.substr(7);
      return tmp;
  }
  return str;
}

var cellPhone = document.getElementById('sign_ph');
cellPhone.onkeyup = function(event){
event = event || window.event;
var _val = this.value.trim();
this.value = autoHypenPhone(_val);
}


  function ValidChecked() {

    var n_RegExp = /^[가-힣a-zA-Z\s]+$/;
    var p_RegExp = /^(?:(010-\d{4})|(01[1|6|7|8|9]-\d{3,4}))-(\d{4})$/;
    var pw_RegExp = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{8,20}$/;


    var objName = document.getElementById("sign_name");
    var objPhone = document.getElementById("sign_ph");
    var objPassword=document.getElementById("sign_pwd");
    var objPWconfirm=document.getElementById("sign_pwd2");


         //이름 유효성 검사
       if (objName.value == "") {
         alert("이름을 입력하세요.");
         objName.focus();
         return false;
       };
       if (!n_RegExp.test(objName.value)) {
         alert("이름은 한글 2~15자까지 가능합니다.");
         objName.focus();
         return false;
       };

        // 비밀번호 유효성검사
       if(objPassword.value==""){
        alert("비밀번호를 입력해주세요")
        objPassword.focus();
        return false;
       };
       if(objPassword.value!=objPWconfirm.value){
        alert("비밀번호가 일치하지않습니다.");
        objPWconfirm.focus();
        return false;
       }
       if(!pw_RegExp.test(objPassword.value)){
        alert("비밀번호는 영문 대,소문자와 숫자, 특수기호 모두가 1개 이상씩 포함된 8자 ~ 20자의 비밀번호여야 합니다.");
        objPassword.focus();
        return false;
       }

        //휴대폰번호 유효성검사
      if (objPhone.value == "") {
        alert("휴대폰번호를 입력하세요.");
        objPhone.focus();
        return false;
      };
      if(!p_RegExp.test(objPhone.value)){
        alert("휴대폰번호가 올바르지 않습니다.");
        objPhone.focus();
        return false;
      };
      return true;
  }