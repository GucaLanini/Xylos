document.addEventListener('DOMContentLoaded', () => {
    const filterItems = document.querySelectorAll('.filter-item');
    const zonas = document.querySelectorAll('.zona');
    const popper = document.querySelectorAll(".start");
    

    zonas.forEach(zona => {
        zona.addEventListener("click", () =>{

            const nome_zona = zona.getAttribute("id");


            zona.classList.toggle("superstroke");
     

            const area = document.getElementsByClassName("area-" + nome_zona);


            Array.from(area).forEach(icon => {
                icon.classList.toggle("visible");
            });



            console.log(popper);

            

            console.log(`Toggled filter: ${zona}`);
            console.log(nome_zona);
        });
    });

    filterItems.forEach(item => {
    item.addEventListener('click', () => {
       // Toggle active class
       item.classList.toggle('active');
        

       // Get the filter type
       const filterType = item.getAttribute('data-filter');
       const type = document.getElementsByClassName("type-" + filterType);
     
       
       // Itera su ogni elemento della collezione e aggiungi la classe "visible"
       Array.from(type).forEach(icon => {
           icon.classList.toggle("visible");;
       });



       // Handle icon activation/deactivation (connect this logic to your map)
       console.log(`Toggled filter: ${filterType}`);
       console.log("icon-" + filterType);
    });

    });
 });

