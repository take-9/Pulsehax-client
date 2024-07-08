const html = document.getElementsByTagName("html")[0];
const themeToggle = document.getElementById("theme-toggle");
const save = document.getElementById("save-popup");
let saveTransCompleted = true;
function savePopup(text) {
    save.innerText = `Saved ${text}!`;
    save.className = "save-popup-show";
    if(saveTransCompleted) {
        saveTransCompleted = false;
        setTimeout(() => {
            save.className = "save-popup-hidden";
            saveTransCompleted = true;
        }, 1000);
    }
};
themeToggle.addEventListener("click", function() {
    userSettings.theme = userSettings.theme === "dark-theme" ? "light-theme" : "dark-theme";
    chrome.storage.local.set({Settings:userSettings}, function() {
        savePopup("Theme");
    });
    html.className = userSettings.theme;
    themeToggle.value = userSettings.theme === "dark-theme" ? "Switch to Light Theme" : "Switch to Dark Theme";
});

const openEditorMenu = document.getElementById("open-editor-menu");
execute(`response = {edit: game.edit, shiftTab: game.shiftTab}`, function(response) {
    openEditorMenu.value = response.response.shiftTab ? "Close Editor Menu" : "Open Editor Menu";
    openEditorMenu.disabled = openEditorMenu.value === "Close Editor Menu" ? false : !response.response.edit;
});
openEditorMenu.addEventListener("click", function() {
    execute(`game.shiftTab = !${openEditorMenu.value === "Close Editor Menu"};`, function(response) {
        if(response.response) {
            openEditorMenu.value = "Close Editor Menu";
        } else {
            openEditorMenu.value = "Open Editor Menu";
        }
    });
});