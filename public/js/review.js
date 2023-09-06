const reviewFormHandler = async (event) => {
  event.preventDefault();
  const item_id = window.location.toString().split('/')[
    window.location.toString().split('/').length-1
  ];

  const text = document.querySelector('#review-desc').value.trim();
  const rating = document.querySelector('#review-rating').value;

  if (text && rating) {
    const response = await fetch(`/api/reviews`, {
      method: 'POST',
      body: JSON.stringify({ item_id, text, rating }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/api/items/${item_id}`);
    } else {
      alert('Failed to create review');
    }
  }
};

document
  .querySelector('.review-form')
  .addEventListener('submit', reviewFormHandler);
