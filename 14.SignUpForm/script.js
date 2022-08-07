const passwordElement = document.getElementById('password');
const cpasswordElement = document.getElementById('cpassword');

cpasswordElement.addEventListener('input', (e) => {
    if(cpasswordElement.value !== passwordElement.value){
        cpasswordElement.classList.add('error');
    }    
    else{
        cpasswordElement.classList.remove('error');
    }
});