function change()
{
    const blok = document.getElementById("bolok2");
 
    if (blok.style.display == "none") {
      blok.style.display = "block";
    } 
    else {
        blok.style.display = "none";
    }

 }


  function direct( )
{
    window.location.href="page6.html";
   

    
 }



    function removing() {
      
    const mylog = document.getElementById("loader");
    const mydone = document.getElementById("Done");
    
    mylog.remove();
    mydone.style.display = "block";
    }
 
    window.setTimeout(removing, 6000);
