const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

const textList = ["are you sure?", "Really sure?", "Just think about it!", "If you say no, I'll be very sad", "I'll be very very sad", "Pukka", "Final?", "Lock kr diya jaaye?", "Ok Fine I will stop asking :(", "... Just kidding! Plese say YES!", "You're breaking my heart"];
let noClickCount = 0;

noButton.addEventListener('click', () => {
    noClickCount++;
    const index = (noClickCount - 1) % textList.length;
    yesButton.style.fontSize = `${noClickCount * 20 + 16}px`;
    yesButton.style.transform = "scale(1.2)";
    noButton.textContent = textList[index];

    // Adjust height of the "No" button dynamically
    noButton.style.height = `${noButton.scrollHeight}px`;

    // Add or remove the "no-clicked" class to maintain button shape and size
    if (noClickCount > 1) {
        noButton.classList.add('no-clicked');
    }
});

yesButton.addEventListener('click', () => {
    window.location.href = "success.html";
});
