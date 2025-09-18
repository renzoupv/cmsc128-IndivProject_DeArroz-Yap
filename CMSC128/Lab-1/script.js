document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-content li a");
    const sections = document.querySelectorAll(".content-section");

    // Helper: show a section by id
    function showSection(id) {
        sections.forEach(section => {
            section.classList.remove("active");
            section.hidden = true;
        });
        const target = document.getElementById(id);
        if (target) {
            target.classList.add("active");
            target.hidden = false;
        }
    }

    // Default: show Inbox
    if (sections.length > 0) {
        showSection("inbox");
        menuItems[0].parentElement.classList.add("active");
    }

    // Click events
    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            // Remove active from all menu items
            menuItems.forEach(link => link.parentElement.classList.remove("active"));

            // Set active on clicked item
            item.parentElement.classList.add("active");

            // Show related section
            const targetId = item.getAttribute("data-target");
            showSection(targetId);
        });
    });
});
