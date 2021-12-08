const form = document.querySelector('.myform');
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const email1 = document.querySelector('.email1');
const company = document.querySelector('.company');
let blankInput = document.querySelector('#timebox');



const select1 = document.querySelector('#ddlsem');

const radiobtn = document.getElementsByName('genderval');




const check1 = document.querySelector('.check1');
const check2 = document.querySelector('.check2');
const check3 = document.querySelector('.check3');

const btnsubmit = document.querySelector('.btnsubmit');
const btncncl = document.querySelector('.btncncl');
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const numPattern = ('^[0-9]+$');



function checkEmail() {
    if (emailPattern.test(email1.value)) {
        return true;
    }
    else {
        alert("Email Format Invalid")
        window.location.href = "index.html"
    }
}

//Dropdown box

ddlsem.addEventListener('change', () => {
    if (ddlsem.value === "1") {
        blankInput.textContent = ddlsem.options[ddlsem.selectedIndex].text
    } else if (ddlsem.value === '2') {
        blankInput.textContent = ddlsem.options[ddlsem.selectedIndex].text
    } else if (ddlsem.value === '3') {
        blankInput.textContent = ddlsem.options[ddlsem.selectedIndex].text
    }
})



btnsubmit.addEventListener('click', (e) => {

    e.preventDefault()
    
   
    if (fname.value !== '' && lname.value !== '' && email1.value !== '' && company.value !== '') {

        if(ddlsem.value === "1"){
            window.location.href = "./securityengr.html"
        }else if(ddlsem.value === '2'){
            window.location.href = "./userinterface.html"
        } else if(ddlsem.value === '3'){
            window.location.href = "./computeraided.html"
        } 
       
    }else{
        alert("There are empty fields!!!")
    }

    checkEmail();
 
})




