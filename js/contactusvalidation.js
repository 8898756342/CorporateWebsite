function ValidateTextBox()  {
    var name = document.forms["contactform"]["first_name"];
    var email = document.forms["contactform"]["email"];
    var phone = document.forms["contactform"]["phone"];
    var comments = document.forms["contactform"]["comments"];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    

    if (email.value == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phone.value == "") {
        window.alert(
          "Please enter your phone number.");
        phone.focus();
        return false;
    }
    if (comments.value == "") {
        window.alert("Please enter your message.");
        comments.focus();
        return false;
    }
   

    
    function detailssubmit() {
  
    
      window.confirm("Your details were Submitted click ok to go to home page");
   
   
    }

    return true ,detailssubmit() ;




}

function onlyNumberKey(evt) {
          
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}


// function detailssubmit() {
  
    
//      confirm("Your details were Submitted click ok to go to home page");
    
    
// }

function ValidateForm(frm) {
   
    if (frm.FromEmailAddress.value == "") { alert('Email address is required.'); frm.FromEmailAddress.focus(); return false; }
    if (frm.FromEmailAddress.value.indexOf("@") < 1 || frm.FromEmailAddress.value.indexOf(".") < 1) { alert('Please enter a valid email address.'); frm.FromEmailAddress.focus(); return false; }
   
    return true; 
}