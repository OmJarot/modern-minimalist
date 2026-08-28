const openInvitation = document.getElementById("openInvitation");
const invitationContent = document.getElementById("invitationContent");

openInvitation.addEventListener("click", () => {

    invitationContent.scrollIntoView({
        behavior: "smooth"
    });

});