function darkMode() {
    document.documentElement.style.setProperty('--color1', 'white');
    document.documentElement.style.setProperty('--color2', 'black');
    }

function lightMode() {
    document.documentElement.style.setProperty('--color1', 'black');
    document.documentElement.style.setProperty('--color2', 'white');
    }

function changeBig() {
    document.getElementById("grid-container").style.maxWidth="100%";
    }


function changeSmall() {
    document.getElementById("grid-container").style.maxWidth="1200px";
    }

    function pdfBigger() {
      var x = document.getElementById("infoSheet");
      if (x.style.height === "25vh") {
        x.style.height = "100vh";
      } else {
        x.style.height = "25vh";
      }
    } 

    function mobileMenu() {
      var x = document.getElementById("menu");
      if (x.style.top === "0%") {
        x.style.top = "100%";
      } else {
        x.style.top = "0%";
      }
    } 
    
function reply_click(clicked_id) {
        console.log(clicked_id);
    }

