//When rating li is clicked assign it the class .checked
//Assign all other li only the class .rating-values (is there another way to ensure that only one li contains the class .checked?)
//When submit is clicked but no li has checked --> do othing
//when submit is clicked insert the textContet of li with .checked to #rating-value
//when submit is clicked change the containers by assigning .hidden

//Var
let ratingList = document.getElementById("rating-div-ul");
let submit = document.getElementById("submit");

//Event Listener
ratingList.addEventListener("click", check);
submit.addEventListener("click", transfer);

//Function
function check(e){
    if (e.target.className !== "rating-values"){
        return false;
    }
    let checked = document.querySelectorAll(".checked");
    checked.forEach(item => {
        item.classList.remove("checked");
    })

    e.target.classList.add("checked")
   
}

function transfer(e){
    let span = document.getElementById("rating-value");
    let checkedValue = document.querySelector(".checked");
    if(!checkedValue){
        return false;
    }
    span.innerHTML = checkedValue.innerHTML;

    let tyContainer = document.getElementById("tyContainer");
    let startContainer = document.getElementById("startContainer");

    tyContainer.classList.remove("hidden");
    startContainer.classList.add("hidden");
}

