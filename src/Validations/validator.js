//<<----------------Validation for Email ---------------->>  
const isValidemail = function (email) {
    return (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/).test(email);
}

//<<----------------Validation for Mobile No. ---------------->>
const isValidphone = function (phone) {
    return (/^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$/).test(phone);
}

//<<----------------Validation for password ---------------->>  
const isValidpassword = function (pass) {
    return (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&])[a-zA-Z0-9@#$%&]{8,15}$/).test(pass);
}

module.exports={isValidemail,isValidpassword,isValidphone}