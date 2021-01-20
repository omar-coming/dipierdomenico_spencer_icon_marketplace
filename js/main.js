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


    
function reply_click(clicked_id) {
        console.log(clicked_id);
    }
