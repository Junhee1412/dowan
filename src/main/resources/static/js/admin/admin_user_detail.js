// 삭제 시 한번 확인!
$('#confirm_deleteUser_btn').click(function(e){
  if (confirm("해당 회원을 탈퇴처리 하시겠습니까?")){    //확인
      alert("정상적으로 탈퇴처리 되었습니다.");
   }else{
      e.preventDefault();
  };
});

$('#confirm_changeUser_btn').click(function(e){
  if (confirm("해당 회원의 등급을 변경하시겠습니까?")){    //확인
      alert("회원의 등급이 변경되었습니다!");
   }else{
      e.preventDefault();
  };
});