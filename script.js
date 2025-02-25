let input = document.getElementById('mail');
let images = document.getElementsByClassName('img');
let p2 = document.querySelector('.p2');
let sub = document.getElementById('sub');
let dis = document.getElementById('dis');
let displayChange = document.querySelector('.message');
let email = document.querySelector('.email')
let symbol = true;
sub.addEventListener('click',function(){
    let inputValue = input.value;
    let inputLength = inputValue.length;
    for(i = 0; i < inputLength; i++){
        if( inputValue[i] === "!"){
            symbol = false;
        };
    };
    if(inputValue[0] != "." & symbol & inputLength > 5){
        email.innerHTML = inputValue;
        displayChange.classList.toggle('hide');
        input.classList.remove('error')
        p2.classList.add('hide')
    }else{
        input.classList.add('error')
        p2.classList.remove('hide')
        symbol = true;
    }
});

dis.addEventListener('click',function(){
    displayChange.classList.toggle('hide');
})