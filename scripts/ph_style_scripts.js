var root = document.querySelector(':root');
var root_style = getComputedStyle(root);
var darkmode = false;

function toggle_dark_mode() {
    if (darkmode) {
        root.style = root_style
    } else {
        root.style.setProperty('--background', '010e1b');
        root.style.setProperty('--colour1', 'dee2e6');
        root.style.setProperty('--colour2', '12d640');
        root.style.setProperty('--colour3', 'd95080');
        root.style.setProperty('--colour4', '3bb8ef');
        root.style.setProperty('--colour5', 'e2e22e');
    }
}