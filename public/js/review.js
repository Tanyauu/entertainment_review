// let star1 = document.querySelector("#star-1");
// let star2 = document.querySelector("#star-2");
// let star3 = document.querySelector("#star-3");
// let star4 = document.querySelector("#star-4");
// let star5 = document.querySelector("#star-5");

const reviewFormHandler = async (event) => {
  event.preventDefault();
  const item_id = window.location.toString().split('/')[
    window.location.toString().split('/').length-1
  ];

  const text = document.querySelector('#review-desc').value.trim();

  const rating = document.querySelector('#review-rating').value;
  console.log(text);
  console.log(rating);
  if (text) {
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

// async function ratingRender() {
//   try {
//     const response = await fetch(`/api/reviews`, {
//       method: 'GET',
//     });

//     const itemdata = await response.json();
//     if (Math.floor(itemdata.rating) == 5) {
//       star1.setAttribute("class", "w-4 h-4 text-yellow-300");
//       star2.setAttribute("class", "w-4 h-4 text-yellow-300");
//       star3.setAttribute("class", "w-4 h-4 text-yellow-300");
//       star4.setAttribute("class", "w-4 h-4 text-yellow-300");
//       star5.setAttribute("class", "w-4 h-4 text-yellow-300");
//     } else if (Math.floor(itemdata.rating) ==4) {
//       star1.setAttribute("class", "w-4 h-4 text-yellow-300");
//       star2.setAttribute("class", "w-4 h-4 text-yellow-300");
//       star3.setAttribute("class", "w-4 h-4 text-yellow-300");
//       star4.setAttribute("class", "w-4 h-4 text-yellow-300");
//       star5.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");     
//     } else if (Math.floor(itemdata.rating) ==3) {
//       star1.setAttribute("class", "w-4 h-4 text-yellow-300");
//       star2.setAttribute("class", "w-4 h-4 text-yellow-300");
//       star3.setAttribute("class", "w-4 h-4 text-yellow-300");
//       star4.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
//       star5.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");     
//     } else if (Math.floor(itemdata.rating) ==2) {
//       star1.setAttribute("class", "w-4 h-4 text-yellow-300");
//       star2.setAttribute("class", "w-4 h-4 text-yellow-300");
//       star3.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
//       star4.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
//       star5.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");     
//     } else if (Math.floor(itemdata.rating) ==1) {
//       star1.setAttribute("class", "w-4 h-4 text-yellow-300");
//       star2.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
//       star3.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
//       star4.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
//       star5.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");     
//     } else {
//       star1.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
//       star2.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
//       star3.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
//       star4.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");
//       star5.setAttribute("class", "w-4 h-4 text-gray-300 dark:text-gray-500");     
//     }
//   } catch (error) {
//     alert(response.statusText);
//   }
// }



document
  .querySelector('.review-form')
  .addEventListener('submit', reviewFormHandler);

// ratingRender();