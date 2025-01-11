document.addEventListener('DOMContentLoaded', function() {
    // Hide the menu bar
    let menuBar = document.querySelector('.jp-MenuBar');
    if (menuBar) {
        menuBar.style.display = 'none';
    }

    // Hide the toolbar
    let toolBar = document.querySelector('.jp-Toolbar');
    if (toolBar) {
        toolBar.style.display = 'none';
    }
});
