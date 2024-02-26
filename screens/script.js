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