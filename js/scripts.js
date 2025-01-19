document.addEventListener('DOMContentLoaded', () => {
    function nextButton() {
        const button = document.getElementById("next");
        if (button) {
            console.log("Next button found.");
            button.addEventListener('click', () => {
                window.location.href = 'question.html';
            });
        } else {
            console.log("Next button not found on this page.");
        }
    }

    function yesButton() {
        const yesButton = document.getElementById("Yes");
        if (yesButton) {
            console.log("Yes button found.");
            yesButton.addEventListener('click', () => {
                window.location.href = 'yes.html';
            });
        } else {
            console.log("Yes button not found on this page.");
        }
    }

    function noButton() {
        const noButton = document.getElementById("No");
        if (noButton) {
            console.log("No button found.");
            noButton.addEventListener('click', () => {
                window.location.href = 'no.html';
            });
        } else {
            console.log("No button not found on this page.");
        }
    }

    // Call the functions
    nextButton();
    yesButton();
    noButton();
});
