document.addEventListener('DOMContentLoaded', function() {
    const adminPanelIcon = document.getElementById('admin_panel');
    const adminPanelPopup = document.getElementById('admin_panel_popup');

    // Open the pop-up when the admin panel icon is clicked
    adminPanelIcon.addEventListener('click', function() {
        adminPanelPopup.style.display = 'block';
    });

    // Close the pop-up when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsidePopup = adminPanelPopup.contains(event.target);
        const isClickOnIcon = adminPanelIcon.contains(event.target);

        if (!isClickInsidePopup && !isClickOnIcon) {
            adminPanelPopup.style.display = 'none';
        }
    });
});