const customers = [];

$(() => {

  // 회원가입 버튼 js
  $('#create-join').on('click', function () {

    const form = document.forms[1];

    const values = [form.mobile2.value, form.mobile3.value, form.member_id.value, form.member_password.value, form.member_check_password.value, form.member_name.value, form.member_email.value];

    for (let i = 0; i < values.length; i++) {
      let value = values[i];

      if (value == null || value == "" || value == undefined) {
        switch (i) {
          case 0:
            alert("전화번호를 입력해주세요");
            return;

          case 1:
            alert("전화번호를 입력해주세요");
            return;

          case 2:
            alert("아이디를 입력해주세요.");
            return;

          case 3:
            alert("비밀번호를 입력해주세요.");
            return;

          case 4:
            alert("비밀번호 확인을 입력해주세요.");
            return;

          case 5:
            alert("이름을 입력해주세요.");
            return;

          case 6:
            alert("이메일을 입력해주세요.");
            return;

        } // switch 끝
      }
    }

    // id 자릿수 확인
    let userID = form.member_id.value;
    let checkID = userID.split("");

    let userPW = form.member_password.value;
    let checkPW = form.member_check_password.value;

    let userName = form.member_name.value;
    let userEmail = form.member_email.value;
    let userMiddlePhoneNo = form.mobile2.values;
    let userLastPhoneNo = form.mobile3.value;

    const temp = localStorage.getItem('customers');
    const user = JSON.parse(temp);

    if (checkID.length < 4 || checkID.length > 16) {
      alert("아이디는 4~16자리 사이에서만 만들어주세요.");
    } else if (checkID.length > 3 && checkID.length < 17) {

      if (temp == null) {

        if (userPW == checkPW) {
          const userInfo = {
            id: userID,
            password: userPW,
            name: userName,
            email: userEmail,
            phone_middle_no: userMiddlePhoneNo,
            phone_last_no: userLastPhoneNo
          }
          customers.push(userInfo);
          localStorage.setItem('customers', JSON.stringify(customers));
          alert("회원가입이 성공적으로 완료되었습니다.");
          window.location.href = "login.html";
        } else {
          alert("비밀번호를 확인해주세요.");
        }
      } else {

        let res = false;

        for (let i = 0; i < user.length; i++) {
          if (user[i].id === userID) {
            res = true;
          }
        }
        if (res) {
          alert('중복된 아이디입니다. 다시 입력해주세요.');
        } else {
          if (userPW == checkPW) {
            const userInfo = {
              id: userID,
              password: userPW,
              name: userName,
              email: userEmail,
              phone_middle_no: userMiddlePhoneNo,
              phone_last_no: userLastPhoneNo
            }
            user.push(userInfo);
            localStorage.setItem('customers', JSON.stringify(user));
            alert("회원가입이 성공적으로 완료되었습니다.");
            window.location.href = "login.html";
          } else {
            alert("비밀번호를 확인해주세요.");
          }
        }
      }
    }
  }); // 회원가입 버튼 js

  // 전체선택 js
  $('input:checkbox[name=all]').click(() => {
    let checked = $('input:checkbox[name=all]').prop('checked');

    $('input:checkbox[name=chk]').prop('checked', checked);

  });

});