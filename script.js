document.addEventListener("DOMContentLoaded", function() {
    // Close dialog
    const closeDialogBtn = document.getElementById('close-dialog');
    const vipDialog = document.getElementById('vip-dialog');
    
    closeDialogBtn.addEventListener('click', () => {
        vipDialog.style.display = 'none';
    });
    
    // Start Prediction Button Animation
    const startBtn = document.getElementById('start-prediction');
    startBtn.addEventListener('click', () => {
        startBtn.innerHTML = "Loading Predictions...";
        startBtn.classList.add("loading-animation");
        setTimeout(() => {
            startBtn.innerHTML = "Start Prediction";
            startBtn.classList.remove("loading-animation");
        }, 3000); // Simulate loading
    });
    
    // Dynamic Background Color Change
    const colors = ["#ff8a00", "#e52e71", "#0066ff", "#ff4b5c", "#28a745"];
    let currentColorIndex = 0;

    function changeBackgroundColor() {
        document.body.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    setInterval(changeBackgroundColor, 5000); // Change every 5 seconds
});
