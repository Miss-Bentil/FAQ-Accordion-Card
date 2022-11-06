// The code says listen for a click on the class question
// If you hear a click, toggle the class active if the parent node- 
//question-and-answers has an active class in any of its children
//If you dont hear a click on any of the questions remove the class active 
//And add active to the newly presed quesiton
  
  
  
const questions = document.querySelectorAll(".question");

questions.forEach((question) => 
    question.addEventListener("click", () => { 
        
        if(question.parentNode.classList.contains("active")) {
        
           question.parentNode.classList.toggle("active");
         
           

        }
   
        else {
            //This ensures not more than one answer is opened
            questions.forEach(questionItem => questionItem.parentNode.classList.remove("active")) 
            question.parentNode.classList.add("active");
                     
        }


    })  
)  


