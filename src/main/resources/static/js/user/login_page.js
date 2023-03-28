
  document.getElementById('realresetPW_btn').style.display="none";


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

var cellPhone_find_id = document.getElementById('sign_ph_find_id'); // 아이디찾는모달창에 폰번호
var cellPhone_reset_pw=document.getElementById('sign_ph_reset_pw'); // 비번재설정하는모달창에 폰번호
cellPhone_find_id.onkeyup = function(event){
event = event || window.event;
var _val = this.value.trim();
this.value = autoHypenPhone(_val);
}
cellPhone_reset_pw.onkeyup = function(event){
  event = event || window.event;
  var _val = this.value.trim();
  this.value = autoHypenPhone(_val);
}

// 아이디찾기
$('#findUserId_btn').click(function(){
  const name=$('.findIdName').val();// 유저이름
  const userPhoneType=$('.findIdType').val(); // 폰타입
  const userPhone=$('.findIdPhone').val(); // 폰번호
  $.ajax({
    type:'post',
    url:`findid`,
    data:{
      userName:name,
      phoneType:userPhoneType,
      phoneNumber:userPhone
    },
    success:function(data){
      if(data==='none'){
        $('#findUserId').html('해당 아이디의 유저가 존재하지않습니다.');
      }else if(data==='mismatch'){
        $('#findUserId').html('정보가 일치하지않습니다..');
      }else{
        $('#findUserId').html(data);
      }
    }
  })
})


// 비밀번호 재설정
$('#mail-Check-Btn').click(function(){
  const useremail=$('#resetPW_id').val();
  const checkInput=$('.mail-check-input');
  $.ajax({
    type:'get',
    url:`emailConfirm/${useremail}`,
    success:function(data){
      checkInput.attr('disabled',false);
      code=data;
      alert('인증번호 발송!')
    }
  })
})

// 코드 확인
$('.mail-check-input').blur(function () {
  const inputCode = $(this).val();
  const $resultMsg = $('#mail-check-warn');

  if(inputCode === code){
    $resultMsg.html('인증번호가 일치합니다.');
    $resultMsg.css('color','green');
    $('#mail-Check-Btn').attr('disabled',true);
    $('#sign_id').attr('value',$('#resetPW_id').val());
    $('.resetPWId').attr('readonly',true);
    $('.mail-check-input').attr('disabled',true);
    $('#resetPW_btn').attr('disabled',false);
    $('#resetPW_id').attr('readonly',true);
  }else{
    $resultMsg.html('인증번호가 불일치 합니다. 다시 확인해주세요!.');
    $resultMsg.css('color','red');
  }
});

//비밀번호 재설정
$('#resetPW_btn').click(function(){
  const resetid=$('.resetid').val();
  const resetName=$('.resetPWName').val();
  const resettype=$('.resetPWType').val();
  const resetphone=$('.resetPWPhone').val();
  const finalBTN=$('#realresetPW_btn');
  $.ajax({
    type:'post',
    url:`resettingpw`,
    data:{
      userId:resetid,
      userName:resetName,
      phoneType:resettype,
      phoneNumber:resetphone
    },
    success:function(data){
      if(data==='none'){
        $('#checkinfo').html('아이디가 존재하지않습니다.')
      }else if(data==='mismatch'){
        $('#checkinfo').html('정보가 일치하지않습니다.')
      }else{
        //location.href=`resetting_pw/${resetid}`;
        $.ajax({
          type:'post',
          url:`resetting_pw`,
          data:{
            userId:resetid
          },
          success:function(data){
            $('#resetPW_btn').attr('disabled',true);
            document.getElementById('realresetPW_btn').style.display="block";
            $('#finalUserId').attr('value',resetid);
          }
        })
      }
    } // end success:function(data)
  })
})