
let input = document.getElementById("InputBox");
input.addEventListener('keyup', UserName);
function UserName() {
    let TextEntered = input.value;

    //creat a new github object 
    let Github = new GithubFinder

    //call the github function 
    Github.github(TextEntered).then(function (data) {

        // console.log(data)
        let Output = document.getElementById("output");
        Output.innerHTML = `
    <div class="d-flex justify-content-evenly flex-wrap">
        <div class="">
             <img src="${data.avatar_url}" class="img-fluid d-block " >

           <a href="${data.html_url}" target="_blank" class="btn btn-primary btn-lg btn-block mt-3 mb-3 ">
           View Profile
           </a>
        </div>
        <div class="">
                        <span class="badge  bg-primary p-2">Public_Repos : ${data.public_repos}</span>
                        <span class="badge bg-secondary p-2">Public_Gists : ${data.public_gists}</span>
                        <span class="badge bg-success p-2">Followers : ${data.followers}</span>
                        <span class="badge bg-danger p-2">Following : ${data.following}</span>    
                        
                        <div class="card mt-3" style="width: 28rem;">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item ">Name : ${data.name}</li>
                                    <li class="list-group-item ">Location : ${data.location}</li>
                                    <li class="list-group-item ">Comapny : ${data.company}</li>
                                    <li class="list-group-item ">Website/Blog : ${data.blog}</li>
                                    <li class="list-group-item ">Member Since : ${data.created_at}</li>
                                    <li class="list-group-item ">Last Updated In : ${data.updated_at}</li>
                                </ul>
                         </div>


        </div>
    </div>
       `
    })
    .catch(function(error){
        console.log(error)
    })



    // let Output = document.getElementById("output");
    // Output.innerHTML  = TextEntered ;





}