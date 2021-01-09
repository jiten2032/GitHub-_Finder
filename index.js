
let input = document.getElementById("InputBox");
input.addEventListener('keyup', UserName);
function UserName() {
    let TextEntered = input.value;

    //creat a new github object 
    let Github = new GithubFinder

    //call the github function 
    Github.github(TextEntered).then(function (data) {
        console.log(data)
    })
    .catch(function(error){
        console.log(error)
    })



    // let Output = document.getElementById("output");
    // Output.innerHTML  = TextEntered ;





}