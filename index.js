function clearErrors() {
  error = document.getElementsByClassName("formError");
  for (let item of error) {
    item.innerHTML = "";
  }
}
function setError(id, error) {
  Element = document.getElementById(id);
  Element.getElementsByClassName("formError")[0].innerHTML = error;
}

function validateForm() {
  var returnVal = true;
  clearErrors();

  // validating name
  var fname = document.forms["myForm"]["fullName"].value;
  if (fname.length < 3) {
    setError("name", "Length of name is too short");
    returnVal = false;
  }
  if (fname.length > 20) {
    setError("name", "Name length is too long");
    returnVal = false;
  }

  // validating email
  var email = document.forms["myForm"]["emailAdd"].value;
  if (email.length > 15) {
    setError("email", "*Email length is too long");
    returnVal = false;
  }
  if (email.length < 4) {
    setError("email", "Length of email is too short");
    returnVal = false;
  }

  // Validating phone
  var phone = document.forms["myForm"]["phoneNum"].value;
  if (phone.length != 10) {
    setError("phone", "Phone number should be of 10 digits");
    returnVal = false;
  }

  // password validation
  var password = document.forms["myForm"]["firstPass"].value;
  if (password.length < 6) {
    setError("password", "Password should be atleast 6 characters long");
    returnVal = false;
  }

  // validating confirm password
  var cpassword = document.forms["myForm"]["cPass"].value;
  if (cpassword != password) {
    setError("confirmPassword", "Password did not match");
    returnVal = false;
  }
  return returnVal;
}
