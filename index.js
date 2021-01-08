//Client secrets = 78eb382a710f335e8b0db0bade6b09b861839be5 ;
// Client ID = b054f411b14d9231c21d ;

let input = document.getElementById("InputBox");
input.addEventListener('keyup', UserName);
function UserName() {
let TextEntered =  input.value ;
let Output = document.getElementById("output");
Output.innerHTML  = TextEntered ;


}