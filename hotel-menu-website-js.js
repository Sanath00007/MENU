document.addEventListener('DOMContentLoaded', function() {
    // Get all category headers
    const categoryHeaders = document.querySelectorAll('.category-header');
    
    // Add click event to each category header
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle the active class on the parent category item
            const categoryItem = this.parentElement;
            
            // If the clicked category is already active, just close it
            if (categoryItem.classList.contains('active')) {
                categoryItem.classList.remove('active');
            } else {
                // Optional: Close all other categories first
                // document.querySelectorAll('.category-item').forEach(item => {
                //     item.classList.remove('active');
                // });
                
                // Open the clicked category
                categoryItem.classList.add('active');
                
                // Smooth scroll to the clicked category after a short delay
                setTimeout(() => {
                    categoryItem.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        });
    });
    
    // Add touch-friendly swipe for the offers container
    const offersContainer = document.querySelector('.offers-container');
    let startX, moveX = 0;
    
    offersContainer.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    }, { passive: true });
    
    offersContainer.addEventListener('touchmove', function(e) {
        moveX = e.touches[0].clientX;
    }, { passive: true });
    
    offersContainer.addEventListener('touchend', function() {
        const swipeDistance = startX - moveX;
        if (Math.abs(swipeDistance) > 50) {
            // Determine direction and scroll accordingly
            const scrollAmount = swipeDistance > 0 ? 300 : -300;
            offersContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }, { passive: true });
    
    // Optional: Auto-open the first category on page load
    // Uncomment the following lines if you want the first category to be open by default
    /*
    const firstCategory = document.querySelector('.category-item');
    if (firstCategory) {
        firstCategory.classList.add('active');
    }
    */
});
