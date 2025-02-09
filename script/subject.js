// Function to create and show the modal with the YouTube video
function showVideoModal(videoUrl) {
    // Create the modal container
    const modal = document.createElement('div');
    modal.classList.add('video-modal');

    // Create the iframe for the YouTube video
    const iframe = document.createElement('iframe');
    iframe.src = `${videoUrl}?autoplay=1&rel=0`;
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    closeButton.onclick = () => {
        document.body.removeChild(modal);
    };

    // Append the iframe and close button to the modal
    modal.appendChild(iframe);
    modal.appendChild(closeButton);

    // Append the modal to the body
    document.body.appendChild(modal);
}

// Function to initialize button event listeners
function initializeVideoButtons() {
    const buttons = [
        { id: 'algebraBtn', url: 'https://www.youtube.com/embed/tTomwopxKFE' },
        { id: 'anglesBtn', url: 'https://www.youtube.com/embed/dA94zyaLuhk' },
        { id: 'equationsBtn', url: 'https://www.youtube.com/embed/ECfPJpVgARM' },
        { id: 'fractionsBtn', url: 'https://www.youtube.com/embed/5hG8e9jGeaA' },
        { id: 'functionsBtn', url: 'https://www.youtube.com/embed/0_FlzTVk6ls' },
        { id: 'indicesBtn', url: 'https://www.youtube.com/embed/lauh7KjEfXk' },
        { id: 'matrixBtn', url: 'https://www.youtube.com/embed/IoLAWcxxLJc' },
        { id: 'prismBtn', url: 'https://www.youtube.com/embed/MCoAXKFXXQk' },
        { id: 'quadraticBtn', url: 'https://www.youtube.com/embed/5ZhNmKb-dqk' },
        { id: 'setsBtn', url: 'https://www.youtube.com/embed/3ioBM9PMBI0' },
        { id: 'transfBtn', url: 'https://www.youtube.com/embed/3ioBM9PMBI0' },
        { id: 'trigoBtn', url: 'https://www.youtube.com/watch?v=g8VCHoSk5_o&list=PL0o_zxa4K1BVCB8iCVCGOES9pEF6byTMT' }
    ];

    buttons.forEach(button => {
        const btnElement = document.getElementById(button.id);
        if (btnElement) {
            btnElement.addEventListener('click', () => {
                showVideoModal(button.url);
            });
        }
    });
}

// Initialize the buttons when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeVideoButtons);