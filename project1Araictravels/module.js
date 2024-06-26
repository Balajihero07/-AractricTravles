
 function TAMILNADU() {
  
    const searchboxresult = document.createElement('div');
    searchboxresult.className = 'searchboxresult';

    const boximage = document.createElement('div');
    boximage.className = 'boximage';

    const img = document.createElement('img');
    img.src = 'Images/image3.jpg';
    img.alt = '';

    const contentbox = document.createElement('div');
    contentbox.className = 'contentbox';

    const title = document.createElement('h3');
    title.textContent = 'Resorts';

    const descriptionContainer = document.createElement('div');
    descriptionContainer.style.width = '300px';

    const description = document.createElement('h5');
    description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate totam, dolor illum eos nemo sed asperiores consequuntur beatae possimus repudiandae. Iure odio assumenda repellat ipsam sint provident consequatur officiis veritatis.';

    descriptionContainer.appendChild(description);

    const ratingsContainer = document.createElement('div');
    ratingsContainer.className = 'height-50 container d-flex';

    // Create the padding div
    const paddingDiv = document.createElement('div');
    paddingDiv.className = 'p-3';

    // Create the inner flex container div
    const innerFlexContainer = document.createElement('div');
    innerFlexContainer.className = 'd-flex justify-content-between align-items-center';

    // Create the ratings div
    const ratings = document.createElement('div');
    ratings.className = 'ratings';

    // Create the star elements
    for (let i = 0; i < 4; i++) {
        const star = document.createElement('i');
        star.className = 'fa fa-star rating-color';
        ratings.appendChild(star);
    }

    const emptyStar = document.createElement('i');
    emptyStar.className = 'fa fa-star';
    ratings.appendChild(emptyStar);

    // Create the review count element
    const reviewCount = document.createElement('h5');
    reviewCount.className = 'review-count';
    reviewCount.textContent = '4.5';

    // Append the ratings and review count to the inner flex container
    innerFlexContainer.appendChild(ratings);
    innerFlexContainer.appendChild(reviewCount);

    // Append the inner flex container to the padding div
    paddingDiv.appendChild(innerFlexContainer);

    // Append the padding div to the ratings container
    ratingsContainer.appendChild(paddingDiv);

    // Append all child elements to the content box
    contentbox.appendChild(title);
    contentbox.appendChild(descriptionContainer);
    contentbox.appendChild(ratingsContainer);

    // Append the image and content box to the image container
    boximage.appendChild(img);
    boximage.appendChild(contentbox);

    // Append the image container to the main container
    searchboxresult.appendChild(boximage);

    // Append the main container to the body or a specific parent element
    document.getElementById('resort-listings').appendChild(searchboxresult);
}
