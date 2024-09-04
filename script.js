document.addEventListener('DOMContentLoaded', () => {
    // Example animals data
    const animals = [
        { name: 'blaze', type: 'Pet Dog', description: 'A loyal and loving dog seeking a new home. This friendly pup is full of energy and affection, ready to be your best friend and bring joy to your life.', image: 'https://th.bing.com/th/id/OIP.8ZWvDur3U7nDcEfWlYq-NgHaFj?w=267&h=200&c=7&r=0&o=5&pid=1.7' },
        { name: 'Mittens', type: 'Street Cat', description: 'A playful cat that loves attention.', image: 'https://th.bing.com/th/id/OIP.kAIUTJrUWLaH5a60vbTgvwAAAA?w=164&h=180&c=7&r=0&o=5&pid=1.7' },
        
         { name: 'tommy', type: 'street puppy', description: ' friendly street puppy looking for a loving home. This sweet pup is full of curiosity and affection, ready to bring joy to a caring family.', image: 'https://th.bing.com/th/id/OIP.SOZ4PQWOi6dia0Ov09fJ8wAAAA?w=274&h=196&c=7&r=0&o=5&pid=1.7' },
        
         { name: 'Shelby', type: 'turtle', description: 'A gentle pet turtle looking for a new home. This calm companion loves basking and exploring, perfect for adding a peaceful touch to your space.', image: 'https://th.bing.com/th/id/OIP.2y3OK9WuFlh9BPffc9oNVAHaEK?w=306&h=180&c=7&r=0&o=5&pid=1.7' },
        
        
         { name: 'Daisy', type: 'Rescued Dog', description: 'Mumbai Adoption center ,Daisy a 2.5 months old baby girl ,Vaccinated,              Location Mudh island Contact  +9189760', image: 'https://th.bing.com/th/id/OIP.gRh_3UjYLtd6ke3dgPuDYQHaFj?w=166&h=185&c=7&r=0&o=5&pid=1.7' },
        
         { name: 'upload', type: '', description: '', image: 'https://th.bing.com/th/id/OIP.UKZ0CHwOKft5l-KtM9u7JAAAAA?rs=1&pid=ImgDetMain' },
        // Add more animals as needed
    ];

    const animalList = document.getElementById('animal-list');

    animals.forEach(animal => {
        const animalCard = document.createElement('div');
        animalCard.classList.add('animal-card');
        animalCard.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}">
            <h3>${animal.name}</h3>
            <p><strong>Type:</strong> ${animal.type}</p>
            <p>${animal.description}</p>
        `;
        animalList.appendChild(animalCard);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for contacting us!');
        contactForm.reset();
    });
});
