const r = {
    'MUMBAI':MUMBAI,
    'CHENNAI':CHENNAI,
    'NEYVELI':NEYVELI,
    'CUDDALORE':CUDDALORE,
    'BANGALORE':BANGALORE,
    'DELHI':DELHI,
    'OOTY':OOTY,
    'HYDERABAD':HYDERABAD,
    'MUNNAR':MUNNAR
};

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("searchButton").addEventListener('click', function() {
        let locat = document.getElementById("searchBar").value.toUpperCase();
        console.log(locat);
        if (r[locat]) {
             r[locat]();
        } else {
            console.log("Location not found");
            document.getElementById("resort-listings").style.margin="30px"
            document.getElementById("resort-listings").style.fontFamily="serif;"
            document.getElementById("resort-listings").innerHTML=" RESORTS NOT AVAILABLE IN  "+locat;
        }
    });
});
function refresh(){
    setTimeout(function(){
        location.reload();
    }, 3000);
}
//MUMBAI
function MUMBAI() {
    // Create the main container div
    const searchboxresult = document.createElement('div');
    searchboxresult.className = 'searchboxresult';

    // Create the image container div
    const boximage = document.createElement('div');
    boximage.className = 'boximage';

    // Create the image element
    const img = document.createElement('img');
    img.src = 'Images/resorts9.jpg';
    img.alt = '';

    // Create the content box div
    const contentbox = document.createElement('div');
    contentbox.className = 'contentbox';

    // Create the title element
    const title = document.createElement('h3');
    title.textContent = 'The king residency';

    // Create the description container div
    const descriptionContainer = document.createElement('div');
    descriptionContainer.style.width = '300px';
    const area=document.createElement('h4')
    area.textContent='Mumbai';
    descriptionContainer.appendChild(area);
    // Create the description element
    const description = document.createElement('h5');
    description.textContent = 'Metro access,Well situated in the Andheri district of Mumbai, The king residency is set 2.5 km from Phoenix Market City Mall, 5.1 km from Powai Lake and 12 km from Dadar Railway Station.';

    // Append the description to its container
    descriptionContainer.appendChild(description);

    // Create the ratings container div
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

    const anchor = document.createElement('a');

    anchor.href = 'resorts.html';

// Set the class attributes
   anchor.className = 'btn btn-primary';
    anchor.setAttribute('data-mdb-ripple-init', '');
    anchor.style='margin-top:-25px'

// Set the inner text
anchor.textContent = 'Book Here';

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
    contentbox.appendChild(anchor);

    // Append the image and content box to the image container
    boximage.appendChild(img);
    boximage.appendChild(contentbox);

    // Append the image container to the main container
    searchboxresult.appendChild(boximage);

    // Append the main container to the body or a specific parent element
    document.getElementById('resort-listings').appendChild(searchboxresult);
}
//CHENNAI
function CHENNAI() {
  
    const searchboxresult = document.createElement('div');
    searchboxresult.className = 'searchboxresult';

    const boximage = document.createElement('div');
    boximage.className = 'boximage';

    const img = document.createElement('img');
    img.src = 'Images/chennai.webp';
    img.alt = '';
    

    const contentbox = document.createElement('div');
    contentbox.className = 'contentbox';

    const title = document.createElement('h3');
    title.textContent = 'The Madras Grand';

    const descriptionContainer = document.createElement('div');
    descriptionContainer.style.width = '300px';

    const area=document.createElement('h4')
    area.textContent='Chennai';
    descriptionContainer.appendChild(area);

    const description = document.createElement('h5');
    description.textContent = 'Conveniently set in Chennai, The Madras Grand provides air-conditioned rooms with free WiFi, free private parking and room service.';

    descriptionContainer.appendChild(description);

    const ratingsContainer = document.createElement('div');
    ratingsContainer.className = 'height-50 container d-flex';

    const paddingDiv = document.createElement('div');
    paddingDiv.className = 'p-3';

    const innerFlexContainer = document.createElement('div');
    innerFlexContainer.className = 'd-flex justify-content-between align-items-center';

    const ratings = document.createElement('div');
    ratings.className = 'ratings';

const anchor = document.createElement('a');

    anchor.href = 'resorts.html';

    anchor.className = 'btn btn-primary';
    anchor.setAttribute('data-mdb-ripple-init', '');
    anchor.style='margin-top:-25px'
    anchor.textContent = 'Book Here';

    for (let i = 0; i < 4; i++) {
        const star = document.createElement('i');
        star.className = 'fa fa-star rating-color';
        ratings.appendChild(star);
    }

    const emptyStar = document.createElement('i');
    emptyStar.className = 'fa fa-star';
    ratings.appendChild(emptyStar);

    const reviewCount = document.createElement('h5');
    reviewCount.className = 'review-count';
    reviewCount.textContent = '4.5';

    innerFlexContainer.appendChild(ratings);
    innerFlexContainer.appendChild(reviewCount);

    paddingDiv.appendChild(innerFlexContainer);

    ratingsContainer.appendChild(paddingDiv);

    contentbox.appendChild(title);
    contentbox.appendChild(descriptionContainer);
    contentbox.appendChild(ratingsContainer);
    contentbox.appendChild(anchor);
    boximage.appendChild(img);
    boximage.appendChild(contentbox);
    searchboxresult.appendChild(boximage);
    document.getElementById('resort-listings').appendChild(searchboxresult);
}
//NEYVELI
function NEYVELI() {
  
    const searchboxresult = document.createElement('div');
    searchboxresult.className = 'searchboxresult';

    const boximage = document.createElement('div');
    boximage.className = 'boximage';

    const img = document.createElement('img');
    img.src = 'Images/neyveli.webp';
    img.alt = '';
    

    const contentbox = document.createElement('div');
    contentbox.className = 'contentbox';

    const title = document.createElement('h3');
    title.textContent = 'OYO Flagship M. P Residency';

    const descriptionContainer = document.createElement('div');
    descriptionContainer.style.width = '300px';

    const area=document.createElement('h4')
    area.textContent='Neyveli';
    descriptionContainer.appendChild(area);

    const description = document.createElement('h5');
    description.textContent = 'OYO Flagship M. P Residency offers free WiFithroughout the property and rooms with air conditioning in Neyveli. All guest rooms in the hotel are fitted with a TV. Guests at OYO Flagship M';
    descriptionContainer.appendChild(description);
     


    const ratingsContainer = document.createElement('div');
    ratingsContainer.className = 'height-50 container d-flex';

    const paddingDiv = document.createElement('div');
    paddingDiv.className = 'p-3';

    const innerFlexContainer = document.createElement('div');
    innerFlexContainer.className = 'd-flex justify-content-between align-items-center';

    const ratings = document.createElement('div');
    ratings.className = 'ratings';

const anchor = document.createElement('a');

    anchor.href = 'resorts.html';

    anchor.className = 'btn btn-primary';
    anchor.setAttribute('data-mdb-ripple-init', '');
    anchor.style='margin-top:-25px'
    anchor.textContent = 'Book Here';

    for (let i = 0; i < 4; i++) {
        const star = document.createElement('i');
        star.className = 'fa fa-star rating-color';
        ratings.appendChild(star);
    }

    const emptyStar = document.createElement('i');
    emptyStar.className = 'fa fa-star';
    ratings.appendChild(emptyStar);

    const reviewCount = document.createElement('h5');
    reviewCount.className = 'review-count';
    reviewCount.textContent = '4.5';

    innerFlexContainer.appendChild(ratings);
    innerFlexContainer.appendChild(reviewCount);

    paddingDiv.appendChild(innerFlexContainer);

    ratingsContainer.appendChild(paddingDiv);

    contentbox.appendChild(title);
    contentbox.appendChild(descriptionContainer);
    contentbox.appendChild(ratingsContainer);
    contentbox.appendChild(anchor);
    boximage.appendChild(img);
    boximage.appendChild(contentbox);
    searchboxresult.appendChild(boximage);
    document.getElementById('resort-listings').appendChild(searchboxresult);
}
//CUDDALORE
function CUDDALORE() {
  
    const searchboxresult = document.createElement('div');
    searchboxresult.className = 'searchboxresult';

    const boximage = document.createElement('div');
    boximage.className = 'boximage';

    const img = document.createElement('img');
    img.src = 'Images/cuddalore.webp';
    img.alt = '';
    

    const contentbox = document.createElement('div');
    contentbox.className = 'contentbox';

    const title = document.createElement('h3');
    title.textContent = 'Hotel Suriyapriya';

    const descriptionContainer = document.createElement('div');
    descriptionContainer.style.width = '300px';

    const area=document.createElement('h4')
    area.textContent='cuddalore';
    descriptionContainer.appendChild(area);

    const description = document.createElement('h5');
    description.textContent = 'Hotel Suriyapriya is offering accommodation in Cuddalore. The hotel offers both free WiFi and free private parking.';
    descriptionContainer.appendChild(description);
     


    const ratingsContainer = document.createElement('div');
    ratingsContainer.className = 'height-50 container d-flex';

    const paddingDiv = document.createElement('div');
    paddingDiv.className = 'p-3';

    const innerFlexContainer = document.createElement('div');
    innerFlexContainer.className = 'd-flex justify-content-between align-items-center';

    const ratings = document.createElement('div');
    ratings.className = 'ratings';

const anchor = document.createElement('a');

    anchor.href = 'resorts.html';

    anchor.className = 'btn btn-primary';
    anchor.setAttribute('data-mdb-ripple-init', '');
    anchor.style='margin-top:-25px'
    anchor.textContent = 'Book Here';

    for (let i = 0; i < 4; i++) {
        const star = document.createElement('i');
        star.className = 'fa fa-star rating-color';
        ratings.appendChild(star);
    }

    const emptyStar = document.createElement('i');
    emptyStar.className = 'fa fa-star';
    ratings.appendChild(emptyStar);

    const reviewCount = document.createElement('h5');
    reviewCount.className = 'review-count';
    reviewCount.textContent = '4.5';

    innerFlexContainer.appendChild(ratings);
    innerFlexContainer.appendChild(reviewCount);

    paddingDiv.appendChild(innerFlexContainer);

    ratingsContainer.appendChild(paddingDiv);

    contentbox.appendChild(title);
    contentbox.appendChild(descriptionContainer);
    contentbox.appendChild(ratingsContainer);
    contentbox.appendChild(anchor);
    boximage.appendChild(img);
    boximage.appendChild(contentbox);
    searchboxresult.appendChild(boximage);
    document.getElementById('resort-listings').appendChild(searchboxresult);
}
//BANGALORE
function BANGALORE() {
  
    const searchboxresult = document.createElement('div');
    searchboxresult.className = 'searchboxresult';

    const boximage = document.createElement('div');
    boximage.className = 'boximage';

    const img = document.createElement('img');
    img.src = 'Images/cuddalore.webp';
    img.alt = '';
    

    const contentbox = document.createElement('div');
    contentbox.className = 'contentbox';

    const title = document.createElement('h3');
    title.textContent = 'Olive HAL 2nd Stage - by Embassy';

    const descriptionContainer = document.createElement('div');
    descriptionContainer.style.width = '300px';

    const area=document.createElement('h4')
    area.textContent='Bangalore';
    descriptionContainer.appendChild(area);

    const description = document.createElement('h5');
    description.textContent = 'Located within 8 km of Chinnaswamy Stadium and 8.3 km of Kanteerava Indoor Stadium, Olive HAL 2nd Stage - by Embassy Group provides rooms in Bangalore.';
    descriptionContainer.appendChild(description);
     


    const ratingsContainer = document.createElement('div');
    ratingsContainer.className = 'height-50 container d-flex';

    const paddingDiv = document.createElement('div');
    paddingDiv.className = 'p-3';

    const innerFlexContainer = document.createElement('div');
    innerFlexContainer.className = 'd-flex justify-content-between align-items-center';

    const ratings = document.createElement('div');
    ratings.className = 'ratings';

const anchor = document.createElement('a');

    anchor.href = 'resorts.html';

    anchor.className = 'btn btn-primary';
    anchor.setAttribute('data-mdb-ripple-init', '');
    anchor.style='margin-top:-25px'
    anchor.textContent = 'Book Here';

    for (let i = 0; i < 4; i++) {
        const star = document.createElement('i');
        star.className = 'fa fa-star rating-color';
        ratings.appendChild(star);
    }

    const emptyStar = document.createElement('i');
    emptyStar.className = 'fa fa-star';
    ratings.appendChild(emptyStar);

    const reviewCount = document.createElement('h5');
    reviewCount.className = 'review-count';
    reviewCount.textContent = '4.5';

    innerFlexContainer.appendChild(ratings);
    innerFlexContainer.appendChild(reviewCount);

    paddingDiv.appendChild(innerFlexContainer);

    ratingsContainer.appendChild(paddingDiv);

    contentbox.appendChild(title);
    contentbox.appendChild(descriptionContainer);
    contentbox.appendChild(ratingsContainer);
    contentbox.appendChild(anchor);
    boximage.appendChild(img);
    boximage.appendChild(contentbox);
    searchboxresult.appendChild(boximage);
    document.getElementById('resort-listings').appendChild(searchboxresult);
}
//DELHI
function DELHI() {
  
    const searchboxresult = document.createElement('div');
    searchboxresult.className = 'searchboxresult';

    const boximage = document.createElement('div');
    boximage.className = 'boximage';

    const img = document.createElement('img');
    img.src = 'Images/delhi.WEBP';
    img.alt = '';
    

    const contentbox = document.createElement('div');
    contentbox.className = 'contentbox';

    const title = document.createElement('h3');
    title.textContent = 'Satvik Resort';

    const descriptionContainer = document.createElement('div');
    descriptionContainer.style.width = '300px';

    const area=document.createElement('h4')
    area.textContent='Delhi';
    descriptionContainer.appendChild(area);

    const description = document.createElement('h5');
    description.textContent = 'Set in New Delhi, 17 km from Qutub Minar, Satvik Resort offers accommodation with a restaurant, free private parking, an outdoor swimming pool and a garden.';
    descriptionContainer.appendChild(description);
     


    const ratingsContainer = document.createElement('div');
    ratingsContainer.className = 'height-50 container d-flex';

    const paddingDiv = document.createElement('div');
    paddingDiv.className = 'p-3';

    const innerFlexContainer = document.createElement('div');
    innerFlexContainer.className = 'd-flex justify-content-between align-items-center';

    const ratings = document.createElement('div');
    ratings.className = 'ratings';

const anchor = document.createElement('a');

    anchor.href = 'resorts.html';

    anchor.className = 'btn btn-primary';
    anchor.setAttribute('data-mdb-ripple-init', '');
    anchor.style='margin-top:-25px'
    anchor.textContent = 'Book Here';

    for (let i = 0; i < 4; i++) {
        const star = document.createElement('i');
        star.className = 'fa fa-star rating-color';
        ratings.appendChild(star);
    }

    const emptyStar = document.createElement('i');
    emptyStar.className = 'fa fa-star';
    ratings.appendChild(emptyStar);

    const reviewCount = document.createElement('h5');
    reviewCount.className = 'review-count';
    reviewCount.textContent = '4.5';

    innerFlexContainer.appendChild(ratings);
    innerFlexContainer.appendChild(reviewCount);

    paddingDiv.appendChild(innerFlexContainer);

    ratingsContainer.appendChild(paddingDiv);

    contentbox.appendChild(title);
    contentbox.appendChild(descriptionContainer);
    contentbox.appendChild(ratingsContainer);
    contentbox.appendChild(anchor);
    boximage.appendChild(img);
    boximage.appendChild(contentbox);
    searchboxresult.appendChild(boximage);
    document.getElementById('resort-listings').appendChild(searchboxresult);
}
//ooty
function OOTY() {
  
    const searchboxresult = document.createElement('div');
    searchboxresult.className = 'searchboxresult';

    const boximage = document.createElement('div');
    boximage.className = 'boximage';

    const img = document.createElement('img');
    img.src = 'Images/ooty.WEBP';
    img.alt = '';
    

    const contentbox = document.createElement('div');
    contentbox.className = 'contentbox';

    const title = document.createElement('h3');
    title.textContent = 'Beverly villa';

    const descriptionContainer = document.createElement('div');
    descriptionContainer.style.width = '300px';

    const area=document.createElement('h4')
    area.textContent='Ooty';
    descriptionContainer.appendChild(area);

    const description = document.createElement('h5');
    description.textContent = 'Located in Ooty and with Ooty Lake reachable within 4 km, Beverly villa provides express check-in and check-out, allergy-free rooms, a garden, free WiFithroughout the property and a terrace.';
    descriptionContainer.appendChild(description);
     


    const ratingsContainer = document.createElement('div');
    ratingsContainer.className = 'height-50 container d-flex';

    const paddingDiv = document.createElement('div');
    paddingDiv.className = 'p-3';

    const innerFlexContainer = document.createElement('div');
    innerFlexContainer.className = 'd-flex justify-content-between align-items-center';

    const ratings = document.createElement('div');
    ratings.className = 'ratings';

const anchor = document.createElement('a');

    anchor.href = 'resorts.html';

    anchor.className = 'btn btn-primary';
    anchor.setAttribute('data-mdb-ripple-init', '');
    anchor.style='margin-top:-25px'
    anchor.textContent = 'Book Here';

    for (let i = 0; i < 4; i++) {
        const star = document.createElement('i');
        star.className = 'fa fa-star rating-color';
        ratings.appendChild(star);
    }

    const emptyStar = document.createElement('i');
    emptyStar.className = 'fa fa-star';
    ratings.appendChild(emptyStar);

    const reviewCount = document.createElement('h5');
    reviewCount.className = 'review-count';
    reviewCount.textContent = '4.5';

    innerFlexContainer.appendChild(ratings);
    innerFlexContainer.appendChild(reviewCount);

    paddingDiv.appendChild(innerFlexContainer);

    ratingsContainer.appendChild(paddingDiv);

    contentbox.appendChild(title);
    contentbox.appendChild(descriptionContainer);
    contentbox.appendChild(ratingsContainer);
    contentbox.appendChild(anchor);
    boximage.appendChild(img);
    boximage.appendChild(contentbox);
    searchboxresult.appendChild(boximage);
    document.getElementById('resort-listings').appendChild(searchboxresult);
}
//HYDERABAD
function HYDERABAD() {
  
    const searchboxresult = document.createElement('div');
    searchboxresult.className = 'searchboxresult';

    const boximage = document.createElement('div');
    boximage.className = 'boximage';

    const img = document.createElement('img');
    img.src = 'Images/hyderabad.WEBP';
    img.alt = '';
    

    const contentbox = document.createElement('div');
    contentbox.className = 'contentbox';

    const title = document.createElement('h3');
    title.textContent = 'Wild Wings Premium Hotel';

    const descriptionContainer = document.createElement('div');
    descriptionContainer.style.width = '300px';

    const area=document.createElement('h4')
    area.textContent='Hyderabad';
    descriptionContainer.appendChild(area);

    const description = document.createElement('h5');
    description.textContent = 'Situated within 5.7 km of ISB and 8.8 km of Golkonda Fort, Wild Wings Premium Hotel features rooms with air conditioning and a private bathroom in Hyderabad';
    descriptionContainer.appendChild(description);
     


    const ratingsContainer = document.createElement('div');
    ratingsContainer.className = 'height-50 container d-flex';

    const paddingDiv = document.createElement('div');
    paddingDiv.className = 'p-3';

    const innerFlexContainer = document.createElement('div');
    innerFlexContainer.className = 'd-flex justify-content-between align-items-center';

    const ratings = document.createElement('div');
    ratings.className = 'ratings';

const anchor = document.createElement('a');

    anchor.href = 'resorts.html';

    anchor.className = 'btn btn-primary';
    anchor.setAttribute('data-mdb-ripple-init', '');
    anchor.style='margin-top:-25px'
    anchor.textContent = 'Book Here';

    for (let i = 0; i < 4; i++) {
        const star = document.createElement('i');
        star.className = 'fa fa-star rating-color';
        ratings.appendChild(star);
    }

    const emptyStar = document.createElement('i');
    emptyStar.className = 'fa fa-star';
    ratings.appendChild(emptyStar);

    const reviewCount = document.createElement('h5');
    reviewCount.className = 'review-count';
    reviewCount.textContent = '4.5';

    innerFlexContainer.appendChild(ratings);
    innerFlexContainer.appendChild(reviewCount);

    paddingDiv.appendChild(innerFlexContainer);

    ratingsContainer.appendChild(paddingDiv);

    contentbox.appendChild(title);
    contentbox.appendChild(descriptionContainer);
    contentbox.appendChild(ratingsContainer);
    contentbox.appendChild(anchor);
    boximage.appendChild(img);
    boximage.appendChild(contentbox);
    searchboxresult.appendChild(boximage);
    document.getElementById('resort-listings').appendChild(searchboxresult);
}
//MUNNAR
function MUNNAR() {
  
    const searchboxresult = document.createElement('div');
    searchboxresult.className = 'searchboxresult';

    const boximage = document.createElement('div');
    boximage.className = 'boximage';

    const img = document.createElement('img');
    img.src = 'Images/munnar.WEBP';
    img.alt = '';
    

    const contentbox = document.createElement('div');
    contentbox.className = 'contentbox';

    const title = document.createElement('h3');
    title.textContent = 'Thoppil Homestay Munnar';

    const descriptionContainer = document.createElement('div');
    descriptionContainer.style.width = '300px';

    const area=document.createElement('h4')
    area.textContent='Munnar';
    descriptionContainer.appendChild(area);

    const description = document.createElement('h5');
    description.textContent = 'Set in Munnar and only 25 km from Cheeyappara Waterfalls, Thoppil Homestay Munnar features accommodation with mountain views, free WiFi and free private parking.';
    descriptionContainer.appendChild(description);
     


    const ratingsContainer = document.createElement('div');
    ratingsContainer.className = 'height-50 container d-flex';

    const paddingDiv = document.createElement('div');
    paddingDiv.className = 'p-3';

    const innerFlexContainer = document.createElement('div');
    innerFlexContainer.className = 'd-flex justify-content-between align-items-center';

    const ratings = document.createElement('div');
    ratings.className = 'ratings';

const anchor = document.createElement('a');

    anchor.href = 'resorts.html';

    anchor.className = 'btn btn-primary';
    anchor.setAttribute('data-mdb-ripple-init', '');
    anchor.style='margin-top:-25px'
    anchor.textContent = 'Book Here';

    for (let i = 0; i < 4; i++) {
        const star = document.createElement('i');
        star.className = 'fa fa-star rating-color';
        ratings.appendChild(star);
    }

    const emptyStar = document.createElement('i');
    emptyStar.className = 'fa fa-star';
    ratings.appendChild(emptyStar);

    const reviewCount = document.createElement('h5');
    reviewCount.className = 'review-count';
    reviewCount.textContent = '4.5';

    innerFlexContainer.appendChild(ratings);
    innerFlexContainer.appendChild(reviewCount);

    paddingDiv.appendChild(innerFlexContainer);

    ratingsContainer.appendChild(paddingDiv);

    contentbox.appendChild(title);
    contentbox.appendChild(descriptionContainer);
    contentbox.appendChild(ratingsContainer);
    contentbox.appendChild(anchor);
    boximage.appendChild(img);
    boximage.appendChild(contentbox);
    searchboxresult.appendChild(boximage);
    document.getElementById('resort-listings').appendChild(searchboxresult);
}