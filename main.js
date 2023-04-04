/*
Rating Button Click Functionality
    - If clicked, change color by adding class "rating-btn--clicked".
    - Save rating value to session storage
*/
localStorage.clear('ratingValue'); // clears previous ratingValue whenever page is refreshed
let ratingValue;

let ratingBtn = $('.rating-btn');
ratingBtn.on('click', function (e) {
    /* Styling */
    $('.rating-btn').removeClass('rating-btn--clicked');
    e.currentTarget.classList.add('rating-btn--clicked');
    
    /* Get rating value*/
    if (e.target.value) { // if input.radio-btn is clicked (value)
    ratingValue = e.target.value;
    } else { // if div.rating-btn is clicked (data-value)
    ratingValue = $(this).data('value');
    }

    /* Remove 'disabled' from #submit-btn */
    document.getElementById('submit-btn').disabled = false;

    /* Remove #notify-user */
    $('#notify-user').css('display', 'none');

    /* Save ratingValue to localStorage */
    localStorage.setItem('ratingValue', ratingValue);
})

