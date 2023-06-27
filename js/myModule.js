// import { Octokit } from "https://esm.sh/octokit@2.0.19";
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

// const myClientID = 'fb0239b54e9fbea2ad83';

export function showPopup() {
  $(".ui.modal").modal("show");
}

export function grantAccessToRepo(repo) {
  const octokit = new Octokit({
    auth: getToken(),
  });

  octokit.rest.repos.addCollaborator({
    owner: "avahajr",
    repo: repo,
    name: username,
    permissions: "pull",
  });
  closeModal();
}

// Close the open modal.
export function closeModal() {
  $(".ui.modal").modal("hide");
}

window.showPopup = showPopup;
window.closeModal = closeModal;
window.grantAccessToRepo = grantAccessToRepo;
// window.unlockRepoButton=unlockRepoButton;
