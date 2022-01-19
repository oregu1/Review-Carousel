const users  = [
    {
        id: 1,
        name: "John",
        job: "UX-designer",
        imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.lG1AdVlD5LgxrjKkc45yKAHaFd%26pid%3DApi&f=1",
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ducimus tempora laboriosam reprehenderit commodi impedit, debitis doloribus itaque enim. Magni corrupti recusandae repellendus laboriosam laborum porro sequi dolores necessitatibus cupiditate.Quis, voluptate modi. Facere similiqu"
    },
    {
        id: 2,
        name: "Philip",
        job: "Writer",
        imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2Yd3KhE2s0UWUZl5KCxnVAHaD4%26pid%3DApi&f=1",
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ducimus tempora laboriosam reprehenderit commodi impedit, debitis doloribus itaque enim. Magni corrupti recusandae repellendus laboriosam laborum porro sequi dolores necessitatibus cupiditate."
    },
    {
        id: 3,
        name: "Melissa",
        job: "Python-developer",
        imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.s7-Tl2y-Ipu1tjd-GllwkwHaE8%26pid%3DApi&f=1",
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ducimus tempora laboriosam reprehenderit commodi impedit, debitis doloribus itaque enim. Magni corrupti recusandae repellendus laboriosam laborum porro sequi dolores necessitatibus cupiditate.Quis"
    },
    {
        id: 4,
        name: "Bella",
        job: "Artist",
        imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.z561g0qUHNQVZOpuz5fKOAHaEK%26pid%3DApi&f=1",
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ducimus tempora laboriosam reprehenderit commodi impedit, debitis doloribus itaque enim. Magni corrupti recusandae repellendus laboriosam laborum porro sequi"
    },
]


//Step 1. Get all the needed elements
const reviewImg = document.getElementById('reviewImg');
const reviewUserName = document.getElementById('reviewUserName');
const reviewJob = document.getElementById('reviewJob');
const reviewText = document.getElementById('reviewText');
console.log(reviewImg)

//Buttons
const reviewPrevBtn = document.getElementById('reviewPrev');
const reviewNextBtn = document.getElementById('reviewNext');

//Step 2.
let currentReview = 0;
// Start our function when window loads
window.addEventListener('DOMContentLoaded', ()=> {
    loadReviews(currentReview)
})
//Create function which loads person's data
function loadReviews(person) {
    const review = users[person];

    reviewImg.src = review.imgSrc;
    reviewUserName.textContent = review.name;
    reviewJob.textContent = review.job;
    reviewText.textContent = review.reviewText;
}

//Step 3. Next & Prev buttons logic
reviewNextBtn.addEventListener('click', ()=> {
    currentReview++
    if(currentReview > users.length - 1) {
        currentReview = 0;
    }
    loadReviews(currentReview)
    
})

reviewPrevBtn.addEventListener('click', ()=> {
    currentReview--
    if(currentReview < 0) {
        currentReview = users.length - 1;
    }
    loadReviews(currentReview)
})