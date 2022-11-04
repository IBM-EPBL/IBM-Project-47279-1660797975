function login_main_vallidator() {
    var parent_mail = document.getElementById("om-parent-mail");
    var login_email = document.getElementById("login-mail");
    var regx = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
    if (regx.test(login_email.value)) {
        console.log("valid");
        parent_mail.classList.remove("error-found");
    } else {
        console.log("invalid");
        parent_mail.classList.add("error-found");
    }
}

function submit_validater() {
    console.log("test")
    var pass_field = document.getElementById("login-pass");
    var parent_pass = document.getElementById("om-paren-pass-field");
    if (pass_field.value == "12345678") {
        parent_pass.classList.remove("error-found");
    } else {
        parent_pass.classList.add("error-found");
    }
    login_main_vallidator();
}

function mail_vallidator() {
    var stage1 = document.getElementById("stage-1");
    var stage2 = document.getElementById("stage-2");
    var email = document.getElementById("forgot-mail");
    var mail_display = document.getElementsByClassName("om-mail-user")[0];
    var regx = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
    if (regx.test(email.value)) {
        console.log("valid");
        stage1.classList.add("om-hidden");
        stage2.classList.remove("om-hidden");
        mail_display.innerHTML = email.value;

    } else {
        console.log("invalid");
    }
}