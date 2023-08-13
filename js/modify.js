function modify_userInfo() {

  const form = document.forms[1];

  const temp = localStorage.getItem('customers');

  const values = [form.member_id.value, form.member_password.value, form.member_check_password.value, form.member_name.value, form.mobile2.value, form.mobile3.value, form.member_email.value];

  for (let i = 0; i < values.length; i++) {
    let value = values[i];

    if (value == null || value == "" || value == undefined) {
      switch (i) {
        case 0:
          alert("아이디를 입력해주세요.");
          return;

        case 1:
          alert("비밀번호를 입력해주세요.");
          return;

        case 2:
          alert("비밀번호 확인을 입력해주세요.");
          return;

        case 3:
          alert("이름을 입력해주세요.");
          return;

        case 4:
          alert("전화번호를 입력해주세요");
          return;

        case 5:
          alert("전화번호를 입력해주세요");
          return;

        case 6:
          alert("이메일을 입력해주세요.");
          return;

      } // switch 끝
    }
  }

  if (temp == null) {
    alert('정보가 존재하지 않습니다. 회원가입창으로 이동합니다.');
    window.location.href = "member_join.html";
  } else {
    const user = JSON.parse(temp);

    const inputID = form.member_id.value;

    let findIndex = -1;
    let res = true;

    for (let i = 0; i < user.length; i++) {
      if (user[i].id === inputID) {
        findIndex = i;
        res = true;
        break;
      } else {
        res = false;
      }
    }
    if (res) {

      if (findIndex != -1) {

        let inputPW = form.member_password.value;
        let checkPW = inputPW.split("");

        if (checkPW.length > 7 && checkPW.length < 17) {
          if (form.member_password.value === form.member_check_password.value) {

            let userID = form.member_id.value;
            let userPW = form.member_password.value;
            let userName = form.member_name.value;
            let userEmail = form.member_email.value;
            let userMiddlePhoneNo = form.mobile2.value;
            let userLastPhoneNo = form.mobile3.value;

            const userInfo = {
              id: userID,
              password: userPW,
              name: userName,
              email: userEmail,
              phone_middle_no: userMiddlePhoneNo,
              phone_last_no: userLastPhoneNo
            }

            user.splice(findIndex, 1);
            console.log(user);

            user.push(userInfo);
            localStorage.setItem('customers', JSON.stringify(user));
            console.log(user);

            alert('회원정보 수정이 성공적으로 완료되었습니다.');
            window.location.href = 'main.html';
            // 마이페이지로 이동하기로 수정예정
          } else {
            alert('비밀번호를 확인해주세요.');
          }

        } else {
          alert("비밀번호는 8~16자리로 구성되어야 합니다.");
        }
      }

    }
  }
}