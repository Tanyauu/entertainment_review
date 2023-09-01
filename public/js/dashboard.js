
const editFormHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const text = document.querySelector('#review-desc').value.trim();

    const rating = document.querySelector('#review-desc').value;

    if (text) {
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
  }
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


document
  .querySelector('.edit-review-form')
  .addEventListener('submit', editFormHandler);

document
  .querySelector('.review-list')
  .addEventListener('click', delButtonHandler);
