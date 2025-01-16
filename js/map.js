document.addEventListener('DOMContentLoaded', () => {
    const filterItems = document.querySelectorAll('.filter-item');
    const zonas = document.querySelectorAll('.zona');
    const pins = document.querySelectorAll('.pin');
    const popup = document.getElementById("popup");






    pins.forEach(pin => {
        pin.addEventListener("click", () =>{
            const nome_pin = pin.getAttribute("id");
            popup.classList.toggle("popup-display");
            const show = document.getElementsByName(nome_pin);
            show.forEach(element => {
                element.classList.toggle("card-pu-vis");
            });
        });
    });

    
    zonas.forEach(zona => {
        zona.addEventListener("click", () =>{

            
            zona.classList.toggle("superstroke");
     
            const nome_zona = zona.getAttribute("id");
            const area = document.getElementsByClassName("area-" + nome_zona);
            const rect_area = document.getElementsByClassName("p-area-" + nome_zona);


            Array.from(area).forEach(icon => {
                icon.classList.toggle("visible-area");
            });
            
            Array.from(rect_area).forEach(rect => {
                rect.classList.toggle("pin-vis-area");
            });

        });
    });

    filterItems.forEach(item => {
    item.addEventListener('click', () => {
       // Toggle active class
       item.classList.toggle('active');
        

       // Get the filter type
       const filterType = item.getAttribute('data-filter');
       const type = document.getElementsByClassName("type-" + filterType);
       const rect_type = document.getElementsByClassName("p-type-" + filterType);
     
       
       // Itera su ogni elemento della collezione e aggiungi la classe "visible"
       Array.from(type).forEach(icon => {
           icon.classList.toggle("visible-icon");;
       });
       Array.from(rect_type).forEach(rect => {
            rect.classList.toggle("pin-vis-icon");;
        });

    });

    });
 });


 function pop_down(){
    const card = document.querySelectorAll("card-pop-up");
        
    popup.classList.toggle("popup-display");

    card.forEach(element => {
        element.classList.toggle("card-pu-vis");
    });

    console.log("funziona");
};