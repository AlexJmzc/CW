function createPhoneNumber(numbers){
  var phoneNumber = "(xxx) xxx-xxxx";
  
  
  for(var i = 0; i < numbers.length; i++){
    phoneNumber = phoneNumber.replace('x', numbers[i]);

  }
  
  return phoneNumber;
}

numbers = [0,1,2,3,4,5,6,7,8,9];


console.log(createPhoneNumber(numbers));