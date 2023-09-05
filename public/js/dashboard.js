editBtn = document.querySelectorAll('.review-form');
deleteBtn = document.querySelectorAll('.delete-button');


const editFormHandler = async (event) => {
  event.preventDefault();
  // if (event.target.hasAttribute('data-id')) {    
    console.log(event.target);
    const id = event.target.getAttribute('data-id');
    const text = document.getElementById('review').value.trim();
    const rating = document.getElementById('rating').value;
    console.log(id);
    console.log(text);
    console.log(rating);
    if (text && rating) {
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ text, rating }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update review');
      }
    } 
  // }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/reviews/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete review');
    }
  }
};

editBtn.forEach(function(button) {
  button.addEventListener('submit', editFormHandler);
});

deleteBtn.forEach(function(button) {
  button.addEventListener('click', delButtonHandler);
});

