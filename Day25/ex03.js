function User(email, name, address) {
  this.email = email;
  this.name = name;
  this.address = address;

  this.hello = function () {
    console.log(`Xin chao, minh la ${name}, minh den tu ${address}`);
  };
}

User.prototype.getInfo = function () {
  console.log(`email: ${this.email}, name: ${this.name}, address: ${this.address}`);
}

const hoang = new User("hoang@gmail.com", "Hoang Nguyen", "Bac Giang");
console.log(hoang);
hoang.hello();
hoang.getInfo();
