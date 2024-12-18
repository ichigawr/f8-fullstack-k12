const data = [];

const handleRegister = (name, password, email) => {
  if (!name || !password || !email) {
    alert("Thông tin không đầy đủ");
    return;
  }

  data.push({
    name,
    password,
    email,
    role: "user",
  });
};

handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com");

const handleLogin = (email, password) => {
  for (const user of data) {
    if (user.email === email) {
      if (user.password === password)
        return user;
      else break;
    }
  }

  alert("Thông tin đăng nhập không hợp lệ");
};

const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");

console.log(data);
console.log(dataLogin);
