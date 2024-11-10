// Get all tab buttons and tab content
var tabButtons = document.querySelectorAll('.tab-button');
var tabs = document.querySelectorAll('.tab');
// Function to handle tab switching
function switchTab(event) {
    var targetTab = event.target.dataset.tab;
    // Remove active class from all buttons and tabs
    tabButtons.forEach(function (button) { return button.classList.remove('active'); });
    tabs.forEach(function (tab) { return tab.classList.remove('active'); });
    // Add active class to the clicked button
    event.target.classList.add('active');
    // Find the target tab element
    var targetTabElement = document.getElementById(targetTab);
    if (targetTabElement) {
        // Add active class to the corresponding tab if it exists
        targetTabElement.classList.add('active');
    }
    else {
        console.error("Tab with ID \"".concat(targetTab, "\" not found."));
    }
}
// Add event listeners to each tab button
tabButtons.forEach(function (button) {
    button.addEventListener('click', switchTab);
});
