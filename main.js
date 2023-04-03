/*
Rating Button Click Functionality
    - If clicked, change color by adding class "rating-btn--clicked".
    - Save rating value to session storage
*/
let ratingBtn = $('.rating-btn');
ratingBtn.on('click', function (e) {
    /* Styling */
    $('.rating-btn').removeClass('rating-btn--clicked');
    e.currentTarget.classList.add('rating-btn--clicked');
    
    /* Get rating value*/
    let ratingValue;
    if (e.target.value) { // if input.radio-btn is clicked (value)
    ratingValue = e.target.value;
    } else { // if div.rating-btn is clicked (data-value)
    ratingValue = $(this).data('value');
    }

    /* Save ratingValue to localStorage */
    localStorage.setItem('ratingValue', ratingValue);
})