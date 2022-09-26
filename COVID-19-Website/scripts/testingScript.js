
var firebaseConfig = {
  apiKey: "AIzaSyA1rT4Oixqm560_uOTqeUoTtHSycwxWTYU",
  authDomain: "corona-web-help-website-1.firebaseapp.com",
  databaseURL: "https://corona-web-help-website-1-default-rtdb.firebaseio.com",
  projectId: "corona-web-help-website-1",
  storageBucket: "corona-web-help-website-1.appspot.com",
  messagingSenderId: "103270987683",
  appId: "1:103270987683:web:272ef5ae624f4fe2228c16"
  };
  firebase.initializeApp(firebaseConfig);
  
  var UserInputsRef=firebase.database().ref('UserInputs')
  document.getElementById('testForm').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();
    var fname =getInputVal('firstname');
    

    var selectedOption = document.querySelector('input[name = option]:checked').value;
    if(emailstatus)
    saveMessages(lname+ " " +fname,mobile,email,profession,dateofbirth,state,selectedOption,symptomsList);
}


function getInputVal(id){
    return document.getElementById(id).value;
}







function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

function validateEmail() 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(testForm.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
