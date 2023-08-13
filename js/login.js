function login() {

  const inputID = document.querySelector('#member_id').value;
  const inputPW = document.querySelector('#member_password').value;

  const temp = localStorage.getItem('customers');
  const user = JSON.parse(temp);

  // localStorage값이 비어있을 때
  if (temp === null) {
    alert("아이디 혹은 비밀번호가 틀립니다. 다시 입력해주세요.");
    return;
  }

  let findIndex = -1;
  let res = false;


  for (let i = 0; i < user.length; i++) {
    if (user[i].id === inputID) {
      findIndex = i;
      res = true;
    }
  }

  if (res) {
    if (user[findIndex].password == inputPW) {
      alert('로그인이 성공적으로 완료되었습니다.');
      window.location.href = "main.html";
    } else {
      alert("아이디 혹은 비밀번호가 틀립니다. 다시 입력해주세요.");
    }
  }
}