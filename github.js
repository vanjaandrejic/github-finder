class GitHub {
    constructor() {
      this.client_id = 'c37c7419cfadb42dde26';
      this.client_secret = '72abdb56e9e0adb36504d0c7a0416fa7ecef52b3';
      this.repos_count = 5;
      this.repos_sort - 'created: asc';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
  
      return {
        profile,
        repos
      }
    }
  }