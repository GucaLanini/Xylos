const alloggi =    document.getElementById('alloggi');
const ristoranti =    document.getElementById('ristoranti');
const farmacia = document.getElementById('farmacia');
const negozi =   document.getElementById('negozi');
const content =  document.getElementById('content');

alloggi.addEventListener('click', () => {
    console.log("funziona");
    
    content.innerHTML = `

        <div class="row reset-margin d-flex"> 
            <div class="col-6 reset-all">
                  <img src="img/Pantheon.png" alt="Pantheon" class="img-dome">
            </div>

            <div class="col-6 reset-padding">
                  <h2 class="row reset-all">Pantheon</h2>
                  <p class="row reset-all margin-top-50">Il Pantheon è un lussuoso albergo immerso in un ecosistema unico e incontaminato. Costruito su piattaforme sospese tra le cime degli alberi giganti della foresta di Lyvion, offre una vista mozzafiato su un mare verde pulsante di vita. Le sue pareti in vetro bio-trasparente permettono agli ospiti di ammirare panorami spettacolari, dall’aurora multicolore che danza nel cielo ai misteriosi bioluminescenti che illuminano la foresta di notte. Con un'architettura che si fonde armoniosamente con la natura circostante, il Pantheon è il rifugio perfetto per esploratori intergalattici e amanti della tranquillità cosmica.
                  </p>
            </div> 
        </div>

    `;
});

ristoranti.addEventListener('click', () => {
    content.innerHTML = `
        <div class="row reset-margin d-flex"> 
                <div class="col-6 reset-all">
                    <img src="img/Luce_Lumineth.jpg" alt="Luce di Lumineth" class="img-dome">
                </div>

                <div class="col-6 reset-padding">
                    <h2 class="row reset-all">Luce di Lumineth</h2>
                    <p class="row reset-all margin-top-50">Al centro della maestosa cupola di Lumineth, simbolo dell’armonia tra natura e architettura, sorge il ristorante Luce di Lumineth. Circondato dalla vista mozzafiato delle foreste bioluminescenti e delle rovine scintillanti, il ristorante offre un’esperienza unica in un ambiente elegante e immersivo. Il menù celebra i sapori della zona, preparati con ingredienti locali sostenibili. All’interno della cupola, giochi di luci e suoni richiamano i canti dei Vironis e il bagliore naturale delle foreste, rendendo ogni pasto un’esperienza indimenticabile. Un luogo perfetto per gustare la magia di Lumineth, nel cuore pulsante della sua straordinaria cupola.
                    </p>
                </div> 
        </div>
    `;
});
farmacia.addEventListener('click', () => {
    content.innerHTML = `
                      <div class="row reset-margin d-flex"> 
            <div class="col-6 reset-all">
                  <img src="img/Armonia_Lumineth.jpg" alt="Armonia di Lumineth" class="img-dome">
            </div>

            <div class="col-6 reset-padding">
                  <h2 class="row reset-all">Armonia di Lumineth</h2>
                  <p class="row reset-all margin-top-50">Nel cuore della cupola di Lumineth, la Farmacia Armonia di Lumineth è un punto di riferimento per chi cerca rimedi naturali e cure moderne. Specializzata in prodotti locali, offre un'ampia gamma di preparati a base di erbe bioluminescenti, note per le loro proprietà rigeneranti, e oli estratti da piante uniche della foresta. La farmacia, progettata per integrarsi con l’ambiente, utilizza luci soffuse e decorazioni ispirate alle rovine e alla flora locale, creando un’atmosfera accogliente e rilassante. Un luogo dove la tradizione di Lumineth incontra la cura del benessere.
                  </p>
            </div> 
      </div>
    `;
});

negozi.addEventListener('click', () => {
    content.innerHTML = `
        <div class="row reset-margin d-flex"> 
            <div class="col-6 reset-all">
                  <img src="img/ricordi_Lumineth.jpg" alt="Ricordi di Lumineth" class="img-dome">
            </div>

            <div class="col-6 reset-padding">
                  <h2 class="row reset-all">Ricordi di Lumineth</h2>
                  <p class="row reset-all margin-top-50">All’interno della cupola di Lumineth, il negozio di Souvenir Ricordi di Lumineth offre oggetti unici per portare a casa la magia di questa terra straordinaria. Tra gli articoli disponibili ci sono gioielli ispirati alle rovine luminose, riproduzioni artigianali dei Nyxari e piume decorate degli Arboryx, oltre a candele bioluminescenti e tessuti realizzati con motivi della foresta. Ogni prodotto racconta una storia, creato da artisti locali con materiali sostenibili, per offrire un pezzo autentico del cuore pulsante di Lumineth. Perfetto per chi desidera un ricordo speciale di questo luogo incantato.
                  </p>
            </div> 
      </div>
    `;
});