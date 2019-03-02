
// Adds the Jquery library.
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

 // The computer generates a random number

  randomNum = Math.floor((Math.random() * 120) + 19);

  console.log(randomNum);

  // Displays this random number by in the counter div

  $("#counter").html(randomNum);
  
  
  
