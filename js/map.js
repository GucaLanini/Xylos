
    const filterItems = document.querySelectorAll('.filter-item');
    const zonas = document.querySelectorAll('.zona');
    const pins = document.querySelectorAll('.pin');
    const popup = document.getElementById("popup");



    if (document.referrer.includes('http://127.0.0.1:5500/3.1.2_your-travel.html')) {
        
        const insert = document.getElementById("insert");
        insert.innerHTML= `
                    <a href="3.1.2_your-travel.html" class="col-auto reset-padding">
                        <svg width="95" height="95" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50.3016 22.5913C51.8474 21.0455 51.8474 18.5392 50.3016 16.9934C48.7557 15.4475 46.2495 15.4475 44.7036 16.9934L16.9953 44.7017C15.4495 46.2475 15.4495 48.7538 16.9953 50.2996L44.7036 78.0079C46.2495 79.5538 48.7557 79.5538 50.3016 78.0079C51.8474 76.4621 51.8474 73.9558 50.3016 72.41L29.3505 51.459L75.2109 51.459C77.3971 51.459 79.1693 49.6868 79.1693 47.5007C79.1693 45.3145 77.3971 43.5423 75.2109 43.5423L29.3505 43.5423L50.3016 22.5913Z" fill="#C8F1F9"/>
                        </svg>
                    </a>
                    <h1 class="col reset-padding reset-margin">Mappa</h1>
        `;
        
    }

    console.log (document.referrer);

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



function pop_down() {
    const cards = document.querySelectorAll(".card-pu-vis");

    const popup = document.getElementById("popup");
    popup.classList.toggle("popup-display");

    cards.forEach(element => {
        element.classList.remove("card-pu-vis");
    });
}

