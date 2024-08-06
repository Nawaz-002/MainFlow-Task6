const images = document.querySelectorAll('.gallery img');
    const zoomLevel = 1.2;

    images.forEach(image => {
      image.addEventListener('mousemove', (event) => {
        image.style.transform = `scale(${zoomLevel})`;
        image.style.opacity = '1' ;
      });

      image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
        image.style.opacity = '.6' ;
      });
    });