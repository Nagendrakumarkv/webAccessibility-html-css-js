function validateForm() {
    var name =
        document.forms.RegForm.name.value;
    var email =
        document.forms.RegForm.email.value;
    var phone =
        document.forms.RegForm.phone.value;
    var course =
        document.forms.RegForm.course.value;
    var address =
        document.forms.RegForm.Address.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone=/^\d{10}$/;
    var regName = /\d+$/g;

    if (name == "" || regName.test(name)) {
        window.alert("Please enter your name properly.");
        name.focus();
        return false;
    }

    if (address == "") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }
     
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    
    if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }

    if (course.selectedIndex == -1) {
        alert("Please enter your course.");
        what.focus();
        return false;
    }

    return true;
}
