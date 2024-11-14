function applyDeviceStyles() {
    const styleLink = document.getElementById('dynamic-style');

    // Detect if the device is a mobile or desktop
    if (window.innerWidth <= 768) {
        styleLink.href = 'android.css'; // Apply mobile styles
    } else {
        styleLink.href = 'pc.css'; // Apply desktop styles
    }
}

// Call the function on initial load and on window resize
applyDeviceStyles();
window.addEventListener('resize', applyDeviceStyles);

// Redirect to prediction page on clicking the Start button
document.getElementById('start-prediction').addEventListener('click', () => {
    window.location.href = '/prediction'; // Redirects to the 'prediction' route
});

// Floating animation for dialog boxes and buttons
function floatingAnimation(element) {
    let position = 0;
    let direction = 1;

    setInterval(() => {
        if (position >= 10 || position <= -10) {
            direction *= -1; // Reverse direction when reaching limit
        }
        position += direction;
        element.style.transform = `translateY(${position}px)`;
    }, 100); // Adjust interval for speed
}

// Apply floating animation to dialog box
const vipDialog = document.getElementById('vip-dialog');
floatingAnimation(vipDialog);

// Close dialog when clicking the close button
document.getElementById('close-dialog').addEventListener('click', () => {
    vipDialog.style.display = 'none'; // Hide the VIP dialog box
});
