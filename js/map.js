document.addEventListener('DOMContentLoaded', () => {
    const filterItems = document.querySelectorAll('.filter-item');
    const zonas = document.querySelectorAll('.zona');
    const pins = document.querySelectorAll('.pin');
    const popup = document.getElementById("popup");


    pins.forEach(pin => {
        pin.addEventListener("click", () => {
            const nome_pin = pin.getAttribute("id");
            popup.classList.toggle("popup-display");
            
            const show = document.querySelectorAll(`[name="pu-${nome_pin}"]`);
            show.forEach(element => {
                element.classList.toggle("card-pu-vis");
            });
        });
    });

 
    zonas.forEach(zona => {
        zona.addEventListener("click", () => {
            zona.classList.toggle("superstroke");

            const nome_zona = zona.getAttribute("id");
            const area = document.querySelectorAll(`.area-${nome_zona}`);
            const rect_area = document.querySelectorAll(`.p-area-${nome_zona}`);

            area.forEach(icon => {
                icon.classList.toggle("visible-area");
            });

            rect_area.forEach(rect => {
                rect.classList.toggle("pin-vis-area");
            });
        });
    });

  
    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            
            item.classList.toggle('active');

            
            const filterType = item.getAttribute('data-filter');
            const type = document.querySelectorAll(`.type-${filterType}`);
            const rect_type = document.querySelectorAll(`.p-type-${filterType}`);

            
            type.forEach(icon => {
                icon.classList.toggle("visible-icon");
            });

            rect_type.forEach(rect => {
                rect.classList.toggle("pin-vis-icon");
            });
        });
    });
});


function pop_down() {
    const cards = document.querySelectorAll(".card-pu-vis");

    const popup = document.getElementById("popup");
    popup.classList.toggle("popup-display");

    cards.forEach(element => {
        element.classList.remove("card-pu-vis");
    });
}

