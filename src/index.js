// write your code here
const ramensOnPage = [];

document.addEventListener("DOMContentLoaded", () => {
    const ramenMenu = document.getElementById("ramen-menu");
    const createNewRamen = document.getElementById("new-ramen")

    createNewRamen.addEventListener('submit', (e) => {
        e.preventDefault();
        //debugger

        const newRamen = {
            id: ramensOnPage.length + 1,
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target.newComment.value
        }

        ramensOnPage.push(newRamen);
        displayRamenMenu(newRamen);
        //console.log(newRamen);
    })

    const fetchData = () => {
        fetch("http://localhost:3000/ramens")
        .then(response => response.json())
        .then(ramens => loadPage(ramens))
    }

    fetchData();
    
    const loadPage = (ramens) => {
        ramens.forEach(displayRamenMenu);
        ramens.forEach(getRamens);
        displayRamen(ramens[0]);

        //console.log(ramensOnPage);
    }

    const displayRamenMenu = (ramen) => {
        const ramenImage = document.createElement("img");
        ramenImage.src = ramen.image;
        ramenImage.innerText = ramen.id;
        ramenImage.addEventListener('click', (e) => {displayDetails(e.target)});
        ramenMenu.appendChild(ramenImage);
    }

    const getRamens = (ramen) => {
        const newRamen = {
            id: ramen.id,
            name: ramen.name,
            restaurant: ramen.restaurant,
            image: ramen.image,
            rating: ramen.rating,
            comment: ramen.comment
        }

        ramensOnPage.push(newRamen);
    }

    function displayDetails(ramen){
        let index = 0;
        for(index = 0; index < ramensOnPage.length; index++){
            if(ramensOnPage[index].id == ramen.textContent){
                break;
            }
        }

        //console.log(ramensOnPage[index]);
        displayRamen(ramensOnPage[index]);
    }

    const displayRamen = (ramen) => {
        //console.log(ramen)
     const ramenDiv = document.getElementById("ramen-detail")
     const ramenRating = document.getElementById("rating-display")
     const ramenComment = document.getElementById("comment-display")

     ramenDiv.innerHTML = `
        <img class="detail-image" src=${ramen.image} />
        <h2 class="name">${ramen.name}</h2>
        <h3 class="restaurant">${ramen.restaurant}</h3>`;

    ramenRating.innerText = ramen.rating;
    ramenComment.innerText = ramen.comment
    }

    //Advance Deliverables
    
    

})