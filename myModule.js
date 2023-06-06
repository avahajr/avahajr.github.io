// import { Octokit } from "https://esm.sh/octokit@2.0.19";
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

export function showPopup() {
    $('.ui.modal').modal('show');
};

export function grantAccessToRepo(repo) {
    var username = document.getElementById("username").value;
    const octokit = new Octokit({
        auth: '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'
    })
    
    octokit.rest.repos.addCollaborator({
        owner: 'avahajr',
        repo: repo,
        name: username,
    });
    closeModal();		
}




// Close the open modal.
export function closeModal() {
    $('.ui.modal').modal('hide');
    document.getElementById("username").reset;
}

window.showPopup=showPopup;
window.closeModal=closeModal;
window.grantAccessToRepo=grantAccessToRepo;