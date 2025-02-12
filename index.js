document.addEventListener('DOMContentLoaded', function() {
    const testimonials = [
        {
            text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            author: "Voluptatem Quia",
            title: "Lorem ipsum dolor"
        },
        // Ajoutez d'autres témoignages ici
        {
            text: "jeijzcbeicbzoicnzoicnzpecnzieocnoezcnknclksncksbdniuneozncoiixncclksncoizenczeo,clzkdecjzoencozecinzeocn zeochzouecbzeocib.",
            author: "Fuciniauna nainaoijpzn",
            title: "Lorem ipsum dolor"
        },
        // Ajoutez d'autres témoignages ici
    ];

    let currentIndex = 0;
    const prevButton = document.querySelector('.prev-arrow');
    const nextButton = document.querySelector('.next-arrow');
    const testimonialText = document.querySelector('.testimonial-text');
    const authorName = document.querySelector('.author-name');
    const authorTitle = document.querySelector('.author-title');

    function updateTestimonial() {
        const testimonial = testimonials[currentIndex];
        
        // Anime la transition
        testimonialText.style.opacity = 0;
        authorName.style.opacity = 0;
        authorTitle.style.opacity = 0;

        setTimeout(() => {
            testimonialText.textContent = testimonial.text;
            authorName.textContent = testimonial.author;
            authorTitle.textContent = testimonial.title;

            testimonialText.style.opacity = 1;
            authorName.style.opacity = 1;
            authorTitle.style.opacity = 1;
        }, 300);
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial();
    });
});