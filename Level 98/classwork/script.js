function User(name, lastName, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  
    }
  
  const user1 = new User('Sandro', 'Maisuradze', '1234567890', 'sandro.mais@gmail.com', 'password123', 'password123');
  const user2 = new User('Davit', 'Janezashvili', '9876543210', 'davit.janeza@gmail.com', 'janeza123', 'janeza123');
  const user3 = new User('goa', 'akademia', '5555555555', 'goas.akademia@gmail.com', 'password789', 'password789');
  
  console.log(user1.introduce());
  console.log(user2.introduce());
  console.log(user3.introduce());