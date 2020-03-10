var submit = document.getElementById("formSubmit").addEventListener("click", function(event)
{
    event.preventDefault();//stop page from submitting

    var fullName = document.getElementById("nameField");
    var age = document.getElementById("ageField");
    var birthDate = document.getElementById("dateField");

    var nameval = /[^a-z\s]/gi;
    if((fullName.value == "") || (nameval.test(fullName.value))) // non-letters and empty
     {  
         alert("The entered name is invalid!");
         document.getElementById("nameField").style.border = "2px solid red"; // change border
     }   
     else
      document.getElementById("nameField").style.border = "2px solid green"; // change border

      if((age.value == "") || (parseInt(age.value,10)>100) || (parseInt(age.value,10)>100)) // non-numbers and empty
      {
          alert("The entered age is invalid!");
          document.getElementById("ageField").style.border = "2px solid red"; // change border
      }   
      else
      document.getElementById("ageField").style.border = "2px solid green"; // change border

      var dateYear = birthDate.value.substring(0,4); // separate year
      var currentDate = new Date(); // get current date
      var thisYear = currentDate.getFullYear(); // get current year from current date
      var currentAge = thisYear - dateYear; // get current age

      if ((birthDate.value == " ") || (currentAge != age.value))
    	{
          alert("The entered date of birth is invalid!");
          document.getElementById("dateField").style.border = "2px solid red"; // change border
        }   
     else
     document.getElementById("dateField").style.border = "2px solid green"; // change border

}
);
