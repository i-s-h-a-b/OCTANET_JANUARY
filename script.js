document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('animeGrid');
    const header = document.querySelector('header');
    const logoImage = '/logo.png'; // Replace with the correct path to your logo image
    const headerText = document.querySelector('h1');

    // Example images
    const images = [
        'naru.jpeg',
        'spy.jpeg',
        'chain.jpeg',
        'nezu.jpeg',
        'wings.jpeg',
        'tokyo.jpeg',
    ];

    images.forEach((imageSrc, index) => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const image = document.createElement('img');
        image.src = imageSrc;
        image.alt = `Anime ${index + 1}`;

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const button = document.createElement('a');
        button.href = '#'; // Add your link here
        button.classList.add('button');
        button.textContent = 'View Details';

        buttonContainer.appendChild(button);
        gridItem.appendChild(image);
        gridItem.appendChild(buttonContainer);

        gridContainer.appendChild(gridItem);
    });

    let lastScrollPosition = 0;
const logoShownThreshold = 50; // Adjust this threshold as needed

window.addEventListener('scroll', function () {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition + logoShownThreshold) {
        // Scrolling down, hide text and show logo
        headerText.style.opacity = '0';
        header.style.backgroundImage = `url(${logoImage})`;
        header.style.backgroundRepeat = 'no-repeat';
        header.style.backgroundSize = 'contain';
        header.style.backgroundPosition = 'center'; // Center the logo
    } else if (currentScrollPosition < lastScrollPosition - logoShownThreshold) {
        // Scrolling up, show text and hide logo
        headerText.style.opacity = '1';
        header.style.backgroundImage = 'none';
    }

    lastScrollPosition = currentScrollPosition;
    });
});




