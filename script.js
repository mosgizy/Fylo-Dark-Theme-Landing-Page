let getClass = element => document.querySelector(`.${element}`);

const getEmail = getClass("input");
const getBtn = getClass("btn-news");
const newsForm = getClass("newsletter-input");
const getErrorMsg = getClass("error")

newsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputValue = getEmail.value;

    // checks if the input contains the "@" sign so that we can check from there if it has all other criterias like the .com or .org etc 
    let checkAt = inputValue.indexOf("@"); 

    if(checkAt >= 0){
        let checkValue = inputValue.slice(checkAt,inputValue.length);
        let lowerEmail = inputValue.slice(0,checkAt);
        console.log(lowerEmail);

        if(!checkValue.includes(".") && lowerEmail !== ""){
            getErrorMsg.textContent = "Please enter a valid email address";    
        }
    }else{
        getErrorMsg.textContent = "Please enter a valid email address";
    }

    getEmail.value = "";
    window.location.reload();
});