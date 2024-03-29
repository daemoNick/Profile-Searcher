class Github {
     constructor(){
         this.client_id = 'd97318878bfa6a40b35e';
         this.client_secret = '57617ff90ea093d7bb3d1db17ebe79c5f3e80cab';  
         this.repos_count = 5;
         this.repos_sort = 'created: asc';
     }

     async getUser(user){
         const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

         const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

         const profile = await profileResponse.json();
         const repos = await repoResponse.json();

         return {
             profile: profile,
             repos: repos
         }
     }
}