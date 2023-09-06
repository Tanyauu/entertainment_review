const editBtn = document.querySelectorAll('.edit-button');
const deleteBtn = document.querySelectorAll('.delete-button');


const editFormHandler = async (event) => {
  event.preventDefault(); 
    // console.log(event.target);
    const id = event.target.parentElement.getAttribute('data-form');
    const text = document.querySelector(`[data-text="${id}"]`).value.trim();
    const rating = document.querySelector(`[data-rating="${id}"]`).value;
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
  button.addEventListener('click', editFormHandler);
});

deleteBtn.forEach(function(button) {
  button.addEventListener('click', delButtonHandler);
});