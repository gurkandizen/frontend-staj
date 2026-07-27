export function initTabs() {
    const menuTabs = document.querySelectorAll(".menu-tab");
    const menuPanels = document.querySelectorAll(".menu-panel");

    menuTabs.forEach(tab => tab.addEventListener("click", () => {
        menuTabs.forEach(t => t.classList.remove("is-active"));
        menuPanels.forEach(panel => panel.classList.remove("is-active"));

        tab.classList.add("is-active");

        menuPanels.forEach(panel => {
            if(panel.dataset.panel === tab.dataset.tab) {
                panel.classList.add("is-active");
            }
        });
    }));
}