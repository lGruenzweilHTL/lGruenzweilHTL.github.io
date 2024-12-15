document.addEventListener('DOMContentLoaded', function() {
    const username = 'lGruenzweilHTL';
    const theme = 'radical';
    const projectList = document.getElementById('project-list');

    fetch(`https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=${username}`) // Use preview link because the main link is not working
        .then(response => response.json())
        .then(repos => {
            console.log(repos);
            repos.forEach(repo => {
                const repoName = repo.repo;
                const listItem = document.createElement('li');
                const repoLink = document.createElement('a');
                const repoImage = document.createElement('img');

                repoLink.href = `https://github.com/${username}/${repoName}`;
                repoImage.src = `https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repoName}&theme=${theme}`;
                repoImage.alt = repoName;

                repoLink.appendChild(repoImage);
                listItem.appendChild(repoLink);
                projectList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching pinned repos:', error));
});