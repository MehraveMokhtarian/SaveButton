const searchButton = document.querySelector('#save-button')
const searchButtonContent = document.querySelector('#save-button div')

searchButton.addEventListener('click', toggleButton)

function toggleButton() {
    searchButtonContent.classList.toggle('loading');
    simulateSavingProcess();
}

function simulateSavingProcess() {
    // Simulate a delay for the saving process (in milliseconds)
    const savingDuration = 2000; // Adjust this value as needed

    setTimeout(() => {
        // After the saving process is done, revert to normal UI
        searchButtonContent.classList.toggle('loading');
    }, savingDuration);
    //ToDo : a Toast must pop up
}