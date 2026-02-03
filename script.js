document.getElementById('copy-trigger').addEventListener('click', function() {
    const ipText = document.getElementById('serverIP').innerText;
    
    navigator.clipboard.writeText(ipText).then(() => {
        const toast = document.getElementById('toast');
        toast.style.display = 'block';
        
        // Hide notification after 2 seconds
        setTimeout(() => {
            toast.style.display = 'none';
        }, 2000);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
});