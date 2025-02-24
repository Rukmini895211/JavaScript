let number = "918765467832";
const countryCode = '+'+ '(' + number.substring(0, number.length -10) + ')';
const phoneNo = number.slice(-10);
console.log(countryCode+' '+phoneNo);