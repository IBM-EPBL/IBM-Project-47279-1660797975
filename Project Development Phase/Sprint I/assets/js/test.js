/* login page js */
console.log ("test")
// password showing functionality
function pass_visiblity() {
    var input_pass = document.getElementById("login-pass");
    if (input_pass.type === "password") {
        input_pass.type = "text";
    } else {
        input_pass.type = "password";
    }
}
// password showing functionality ends

// if password field is not empty then is display img else not
var pass_field = document.getElementById("login-pass");
var eye_img = document.getElementsByClassName("om-hidden-eye")[0];
if (pass_field) {
    pass_field.addEventListener("mouseover", function (e) {
        if (pass_field.value.length > 0) {
            eye_img.classList.add("om-block");
            eye_img.classList.remove("om-hidden");
        } else {
            eye_img.classList.add("om-hidden");
            eye_img.classList.remove("om-block");
        }
    });
}
// email validation function

var parent_mail = document.getElementById("om-parent-mail");

function login_main_vallidator() {
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

//validate password
var pass_field = document.getElementById("login-pass");
var parent_pass = document.getElementById("om-paren-pass-field");

function pass_validater() {
    if (pass_field.value == "12345678") {
        parent_pass.classList.remove("error-found");
    } else {
        parent_pass.classList.add("error-found");
    }
}




//submit validator function 
function submit_validater() {
    pass_validater()
    login_main_vallidator()
}

/* forgot page js script */

// // email validation function
// function byId(param) {
//     return document.getElementById(param);
// }


// function mail_vallidator() {
//     var stage1 = document.getElementById("stage-1");
//     var stage2 = document.getElementById("stage-2");
//     var email = document.getElementById("forgot-mail");
//     var mail_display = document.getElementsByClassName("om-mail-user")[0];
//     var regx = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
//     if (regx.test(email.value)) {
//         console.log("valid");
//         stage1.classList.add("om-hidden");
//         stage2.classList.remove("om-hidden");
//         mail_display.innerHTML = email.value;

//     } else {
//         console.log("invalid");
//     }
// }

// let tabChange = function (val) {
//     let ele = document.querySelectorAll('.om-opt-field');
//     if (ele[val - 1].value != '') {
//         ele[val].focus()
//     } else if (ele[val - 1].value == '') {
//         ele[val - 2].focus()
//     }
// }

//brands page js

// var kebab = document.getElementsByClassName("om-share-trigger")[0];
// var share_box = document.getElementsByClassName("om-share-shade")[0];
// kebab.addEventListener("click", function () {
//     share_box.classList.add("om-show");
// });