
// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const profileSettingsBtn = document.getElementById('profile-settings-btn');
    const passwordSettingsBtn = document.getElementById('password-settings-btn');
    const privacySettingsBtn = document.getElementById('privacy-settings-btn');
    const profileSettings = document.getElementById('profile-settings');
    const passwordSettings = document.getElementById('password-settings');
    const privacySettings = document.getElementById('privacy-settings');

    function showSection(section) {
        profileSettings.style.display = 'none';
        passwordSettings.style.display = 'none';
        privacySettings.style.display = 'none';
        section.style.display = 'block';
    }

    profileSettingsBtn.addEventListener('click', () => {
        showSection(profileSettings);
    });

    passwordSettingsBtn.addEventListener('click', () => {
        showSection(passwordSettings);
    });

    privacySettingsBtn.addEventListener('click', () => {
        showSection(privacySettings);
    });

    // Initially show profile settings
    showSection(profileSettings);

    // Handle form submissions
    document.getElementById('profile-settings-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Profile settings saved!');
        // Handle profile settings form submission here
    });

    document.getElementById('password-settings-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Password settings saved!');
        // Handle password settings form submission here
    });

    document.getElementById('privacy-settings-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Privacy settings saved!');
        // Handle privacy settings form submission here
    });
});