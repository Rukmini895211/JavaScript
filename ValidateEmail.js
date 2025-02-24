let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,6}$/;
let mail = "test@example.com";
console.log(regex.test(mail));