const form = document.querySelector('.myform');
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const company = document.querySelector('.company');
const contactnum = document.querySelector('.contactnum');
const email1 = document.querySelector('.email1');
const email2 = document.querySelector('.email2');

const radiomale = document.querySelector('.radiomale');
const radiofemale = document.querySelector('.radiofemale');

const select1 = document.querySelector('.select1');

const check1 = document.querySelector('.check1');
const check2 = document.querySelector('.check2');
const check3 = document.querySelector('.check3');

const btnsubmit = document.querySelector('.btnsubmit');
const btncncl = document.querySelector('.btncncl');
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const numPattern = ('^[0-9]+$');



//functions

function checkInputs(){
    if (fname.value || lname.value || company.value || contactnum.value || email1.value || email2.value !==''){
        return true
    }else{
        alert('You Have Empty Values')
    }
}


function checkEmail() {
    if (emailPattern.test(email1.value && email2.value)) {
        return true;
    }
    else {
        alert("Email Format Invalid")
    }
}

function checkNum(){
    if (contactnum !== numPattern){
        alert('Numbers Only')
    }
}


btnsubmit.addEventListener('click',()=>{
    checkInputs()
    checkEmail()
    checkNum()
})




