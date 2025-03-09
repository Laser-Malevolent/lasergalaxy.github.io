// Function to save progress
function saveProgress(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Function to load progress
function loadProgress(key) {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : null;
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    // Load progress when the page loads
    const progress = loadProgress('pageProgress');
    if (progress) {
        // ...existing code to apply the loaded progress...
    }

    // Save progress before the page unloads
    window.addEventListener('beforeunload', () => {
        const progress = {
            // ...existing code to gather progress data...
        };
        saveProgress('pageProgress', progress);
    });
});

