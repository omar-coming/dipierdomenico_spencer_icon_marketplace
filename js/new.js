(() => {
    console.log('fired up');

    let theIcon = document.querySelector('.iconContainer img'),
        theIcons = document.querySelectorAll('.iconContainer img');

    function logMyId() {
        console.log('clicked on an image');
        console.log("Icon Selected:", this.id);
    }

    theIcon.addEventListener("click", logMyId);

    theIcons.forEach(icon => icon.addEventListener("click", logMyId));

})()