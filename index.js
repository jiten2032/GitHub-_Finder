
let input = document.getElementById("InputBox");
input.addEventListener('keyup', UserName);
function UserName() {
    let TextEntered = input.value;
    if (TextEntered != '') {
        //creat a new github object 
        let Github = new GithubFinder
        Github.github(TextEntered).then(function (data) {
            // console.log(data)
            if (`${data.message}` == "Not Found") {
                document.getElementById("output").innerHTML = `
                         <div class="container alert alert-danger mt-3 text-center" role="alert">
                        <h4 class="alert-heading">Oh Sorry!</h4>
                        <p>Entered Username not Available</p>
                        <hr>
                        <p class="mb-0">Please Enter a Valid Username.</p>
                        </div> `
            }
            else {


                let Output = document.getElementById("output");
                Output.innerHTML = `
                  <div class="container d-flex justify-content-evenly flex-wrap mt-5 ">
                    <div class="mt-3 ms-2">
                          <img src="${data.avatar_url}" class="img-fluid d-block " >
    
                         <a href="${data.html_url}" target="_blank" class="btn btn-primary btn-lg btn-block mx-auto d-block mt-3 mb-3 ">
                           View Profile
                          </a>
                   </div>
                  <div class="mt-3">
                         <div class="text-center container-fluid d-block mx-auto">
                            <span class="badge  bg-primary">Public_Repos : ${data.public_repos}</span>
                            <span class="badge bg-secondary ">Public_Gists : ${data.public_gists}</span>
                            <span class="badge bg-success ">Followers : ${data.followers}</span>
                            <span class="badge bg-danger p-1">Following : ${data.following}</span>    
                        </div> 
                            <div class="card mt-3 d-block mx-auto">
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
            }


        })
            .catch(function (error) {
                document.getElementById("output").innerHTML = `<h1 class="text-center" >${error}</h1>`
            })

    }
    else {

        document.getElementById("output").innerHTML = "";
    }

}