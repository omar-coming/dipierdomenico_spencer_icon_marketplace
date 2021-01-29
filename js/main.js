function lightMode() {
    document.documentElement.style.setProperty('--color1', '#5BC2E7');
    document.documentElement.style.setProperty('--color2', '#fff');
    document.documentElement.style.setProperty('--color3', '#e75bbd');
    document.documentElement.style.setProperty('--color4', '#a9e8ff');
    document.documentElement.style.setProperty('--color5', '#000000');
    }

    function darkMode() {
      document.documentElement.style.setProperty('--color1', '#222');
      document.documentElement.style.setProperty('--color2', '#cecece');
      document.documentElement.style.setProperty('--color3', '#8f3535');
      document.documentElement.style.setProperty('--color4', '#555');
      document.documentElement.style.setProperty('--color5', '#999');
      }

      function changeSize() {
        var x = document.getElementById("grid-container");
        if (x.style.maxWidth === "100%") {
          x.style.maxWidth = "1200px";
        } else {
          x.style.maxWidth = "100%";
        }
      } 

    function pdfBigger() {
      var x = document.getElementById("infoSheet");
      if (x.style.height === "100vh") {
        x.style.height = "25vh";
      } else {
        x.style.height = "100vh";
      }
    } 

    function mobileMenu() {
      var x = document.getElementById("menu");
      if (x.style.top === "0%") {
        x.style.top = "-100%";
      } else {
        x.style.top = "0%";
      }
    } 
    
function reply_click(clicked_id) {
        console.log(clicked_id);
    }

