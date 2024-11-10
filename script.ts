// Get all tab buttons and tab content
const tabButtons = document.querySelectorAll('.tab-button');
const tabs = document.querySelectorAll('.tab');

// Function to handle tab switching
function switchTab(event: Event) {
    const targetTab = (event.target as HTMLButtonElement).dataset.tab;

    // Remove active class from all buttons and tabs
    tabButtons.forEach(button => button.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    // Add active class to the clicked button
    (event.target as HTMLButtonElement).classList.add('active');

    // Find the target tab element
    const targetTabElement = document.getElementById(targetTab!);
    if (targetTabElement) {
        // Add active class to the corresponding tab if it exists
        targetTabElement.classList.add('active');
    } else {
        console.error(`Tab with ID "${targetTab}" not found.`);
    }
}

// Add event listeners to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', switchTab);
});