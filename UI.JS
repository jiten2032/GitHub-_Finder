//Client secrets = 78eb382a710f335e8b0db0bade6b09b861839be5 ;
// Client ID = b054f411b14d9231c21d ;


class GithubFinder {

    async github(users) {
        let ResponseProfile = await fetch(`https://api.github.com/users/${users}?client_id=b054f411b14d9231c21d?Client_secret=78eb382a710f335e8b0db0bade6b09b861839be5`);
        let ProfileData = await ResponseProfile.json();
        return ProfileData
        
    }





}

// async function usersProfile() {
//     let ResponseProfile = await fetch(`https://api.github.com/users/`);
//     let ProfileData = await ResponseProfile.json();
//     return ProfileData;
// }

// Github()
//     .then(function (users) {
//         console.log(users)
//         // Output.innerHTML = 
//         // let name = users.name
//         // let img = users.avatar_url
//         // let location = users.location
//         // let follower = users.followers
//         // let repos = users.public_repos

//     })
//     .catch(function (err) {


//     })