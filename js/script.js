// Trova il pulsante e il div
const fauna = document.getElementById('fauna');
const flora = document.getElementById('flora');
const fluviale = document.getElementById('fluviale');
const Rovine = document.getElementById('rovine');

const content = document.getElementById('content');

// Aggiungi un event listener al pulsante
fauna.addEventListener('click', () => {
  // Sostituisci l'intero contenuto del div
  content.innerHTML = `
        <div class="row align-items-start">

            <a href="lumineth.html" class="col box areas">

                <img class="img" src="tunnel.png" alt="Lumineth">
                <h2 class="tty box-txt tcard">Lumineth</h2>

            </a>

            <a href="" class="col box areas low">

                <img class="img" src="tunnel.png" alt="Arakhara">
                <h2 class="tty box-txt tcard">Arakhara</h2>

            </a> 

        </div>

        <div class="row align-items-end join">

            <a href="" class="col box areas low">

                <img class="img" src="tunnel.png" alt="Nyxanthis">
                <h2 class="tty box-txt tcard">Nyxanthis</h2>

            </a>

            <a href="" class="col box areas">
                
                <img class="img" src="tunnel.png" alt="Aerathos">
                <h2 class="tty box-txt tcard">Aerathos</h2>
                
            </a> 

        </div>
  `;
});

flora.addEventListener('click', () => {
    // Sostituisci l'intero contenuto del div
    content.innerHTML = `
        <div class="row align-items-start">

            <a href="lumineth.html" class="col box areas">

                <img class="img" src="tunnel.png" alt="Lumineth">
                <h2 class="tty box-txt tcard">Lumineth</h2>

            </a>

            <a href="" class="col box areas low">

                <img class="img" src="tunnel.png" alt="Arakhara">
                <h2 class="tty box-txt tcard">Arakhara</h2>

            </a> 

        </div>

        <div class="row align-items-end join">

            <a href="" class="col box areas low">

                <img class="img" src="tunnel.png" alt="Nyxanthis">
                <h2 class="tty box-txt tcard">Nyxanthis</h2>

            </a>

            <a href="" class="col box areas">
                
                <img class="img" src="" alt="Aerathos">
                <h2 class="tty box-txt tcard">Aerathos</h2>
                
            </a> 

        </div>
    `;
  });
  fluviale.addEventListener('click', () => {
    // Sostituisci l'intero contenuto del div
    content.innerHTML = `
        <div class="row align-items-start">

            <a href="lumineth.html" class="col box areas">

                <img class="img" src="" alt="Lumineth">
                <h2 class="tty box-txt tcard">Lumineth</h2>

            </a>

            <a href="" class="col box areas low">

                <img class="img" src="tunnel.png" alt="Arakhara">
                <h2 class="tty box-txt tcard">Arakhara</h2>

            </a> 

        </div>

        <div class="row align-items-end join">

            <a href="" class="col box areas low">

                <img class="img" src="tunnel.png" alt="Nyxanthis">
                <h2 class="tty box-txt tcard">Nyxanthis</h2>

            </a>

            <a href="" class="col box areas">
                
                <img class="img" src="tunnel.png" alt="Aerathos">
                <h2 class="tty box-txt tcard">Aerathos</h2>
                
            </a> 

        </div>
    `;
  });

  rovine.addEventListener('click', () => {
    // Sostituisci l'intero contenuto del div
    content.innerHTML = `
        <div class="row align-items-start">

            <a href="lumineth.html" class="col box areas">

                <img class="img" src="tunnel.png" alt="Lumineth">
                <h2 class="tty box-txt tcard">Lumineth</h2>

            </a>

            <a href="" class="col box areas low">

                <img class="img" src="" alt="Arakhara">
                <h2 class="tty box-txt tcard">Arakhara</h2>

            </a> 

        </div>

        <div class="row align-items-end join">

            <a href="" class="col box areas low">

                <img class="img" src="tunnel.png" alt="Nyxanthis">
                <h2 class="tty box-txt tcard">Nyxanthis</h2>

            </a>

            <a href="" class="col box areas">
                
                <img class="img" src="tunnel.png" alt="Aerathos">
                <h2 class="tty box-txt tcard">Aerathos</h2>
                
            </a> 

        </div>
    `;
  });



