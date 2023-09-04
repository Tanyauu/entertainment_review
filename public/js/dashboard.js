
const editFormHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const user_id = event.target.getAttribute('data-id');

    const text = document.querySelector('#review-desc').value.trim();

    const rating = document.querySelector('#review-desc').value;

    if (text) {
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ user_id, text, rating }),
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

async function ratingRender() {
  try {
    const response = await fetch(`/api/reviews`, {
      method: 'GET',
    });

    const itemdata = await response.json();
    if (Math.floor(itemdata.rating) == 5) {
      star1.setAttribute("class", "w-4 h-4 text-yellow-300");
      star2.setAttribute("class", "w-4 h-4 text-yellow-300");
      star3.setAttribute("class", "w-4 h-4 text-yellow-300");
      star4.setAttribute("class", "w-4 h-4 text-yellow-300");
      star5.setAttribute("class", "w-4 h-4 text-yellow-300");
    } else if (Math.floor(itemdata.rating) ==4) {
      star1.setAttribute("class", "w-4 h-4 text-yellow-300");
      star2.setAttribute("class", "w-4 h-4 text-yellow-300");
      star3.setAttribute("class", "w-4 h-4 text-yellow-300");
      star4.setAttribute("class", "w-4 h-4 text-yellow-300");
      star5.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");     
    } else if (Math.floor(itemdata.rating) ==3) {
      star1.setAttribute("class", "w-4 h-4 text-yellow-300");
      star2.setAttribute("class", "w-4 h-4 text-yellow-300");
      star3.setAttribute("class", "w-4 h-4 text-yellow-300");
      star4.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
      star5.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");     
    } else if (Math.floor(itemdata.rating) ==2) {
      star1.setAttribute("class", "w-4 h-4 text-yellow-300");
      star2.setAttribute("class", "w-4 h-4 text-yellow-300");
      star3.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
      star4.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
      star5.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");     
    } else if (Math.floor(itemdata.rating) ==1) {
      star1.setAttribute("class", "w-4 h-4 text-yellow-300");
      star2.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
      star3.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
      star4.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
      star5.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");     
    } else {
      star1.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
      star2.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
      star3.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
      star4.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
      star5.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");     
    }
  } catch (error) {
    alert(response.statusText);
  }
}

document
  .querySelector('#edit-review-form')
  .addEventListener('submit', editFormHandler);

document
  .querySelector('.delete-review-form')
  .addEventListener('click', delButtonHandler);

ratingRender();