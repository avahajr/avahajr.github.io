import { Octokit } from "https://esm.sh/octokit";

function showPopup() {
    $('.ui.modal').modal('show');
};

function grantAccessToRepo(repo) {
    var username = document.getElementById("username").value;
    const octokit = new Octokit({
        auth: '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'
    })
    
    octokit.request('PUT /repos/{owner}/{repo}/collaborators/{username}', {
        owner: 'avahajr',
        repo: repo,
        username: username,
        permission: 'triage',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    closeModal();		
}
// Close the open modal.
function closeModal() {
    $('.ui.modal').modal('hide');
}

export { showPopup, closeModal, grantAccessToRepo };