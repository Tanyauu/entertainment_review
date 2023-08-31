const reviewFormHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const review_id = event.target.getAttribute('data-id');

    const description = document.querySelector('#review-desc').value.trim();

    const rating = document.querySelector('#review-rating').value;
  
    if (description) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ review_id, description, rating }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/item');
      } else {
        alert('Failed to create review');
      }
    }
  }
};


document
  .querySelector('.review-form')
  .addEventListener('submit', reviewFormHandler);
