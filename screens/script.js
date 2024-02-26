document.addEventListener('DOMContentLoaded', function () {
    // Get the current page file name (e.g., "index.html" or "choices.html")
    var currentPage = window.location.pathname.split('/').pop();

    // Get the corresponding tab element
    var currentTab = document.getElementById(currentPage.replace('.html', '') + '-tab');

    // Add the 'active-tab' class to the current tab
    if (currentTab) {
        currentTab.classList.add('active-tab');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var revealButton = document.getElementById('revealButton');
    var textBox = document.getElementById('textBox');
    var playerOneColorDisplay = document.getElementById('playerOneColorDisplay');

    revealButton.addEventListener('click', function () {
        // Get the selected color for Player One
        var playerOneColorInputs = document.querySelectorAll('input[name="playerOneColor"]');
        var selectedPlayerOneColor = Array.from(playerOneColorInputs).find(input => input.checked);

        // Update the text in the text box
        playerOneColorDisplay.textContent = selectedPlayerOneColor ? selectedPlayerOneColor.value : 'None selected';
        textBox.style.display = 'block';
    });
});