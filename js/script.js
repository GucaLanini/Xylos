//variabili 
const fauna = document.getElementById('fauna');
const flora = document.getElementById('flora');
const fluviale = document.getElementById('fluviale');
const rovine = document.getElementById('rovine');

const content = document.getElementById('content');


//funzioni pagine luoghi
fauna.addEventListener('click', () => {
  // Sostituisci l'intero contenuto del div
  content.innerHTML = `

                  <div class="row reset-all align-items-start">

                    <div class="row reset-all">

                        <div class="col reset-all margin-right">
            
                            <div class="row card reset-all area-item">
            
                                <img src="img/zona 1/zona 1/d3d964f4fa2dbdded9ee1ec6ac46ad1e.jpg" class="card-img img-long reset-padding up" alt="Nyxari">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Nyxari</h2>
                                    <p class="text">
                                        I Nyxari sono felini, simili alle tigri terrestri, con un manto luminoso. Sono animali solitari ma curiosi. Se attratti da uno stimolo luminoso, possono avvicinarsi cautamente.
                                    </p>
                                </div>
            
                            </div>
            
                            <div class="row card reset-all area-item">
            
                                <img src="img/zona 1/zona 1/farfalla.jpg" class="card-img img-long reset-padding low" alt="Lyserian">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Lyserian</h2>
                                    <p class="text">
                                        Farfalle dalle ali trasparenti che volano in gruppi di centinaia, creando spettacoli di luce fluttuante. Le loro ali si accendono in sfumature di blu e arancione mentre si muovono.
                                    </p>
                                </div>
            
                            </div>
            
                        </div>
            
                        <div class="col reset-all margin-left">
            
                            <div class="row card reset-all area-item">
            
                                <img src="img/zona 1/zona 1/rana.jpg" class="card-img img-long reset-padding low" alt="Arakhara">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Luminex</h2>
                                    <p class="text">
                                        I Luminex sono anfibi simili a rane che saltano in gruppi vicino al pelo dell’acqua, sincronizzando il loro bagliore con i movimenti del kayak.    
                                    </p>
                                </div>
            
                            </div>
            
                            <div class="row card reset-all area-item">
            
                                <img src="img/zona 1/zona 1/uccello2.jpg" class="card-img img-long reset-padding up" alt="Arboryx">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Arboryx</h2>
                                    <p class="text">
                                        Gli Arboryx, con i loro nidi costruiti a decine di metri da terra, sono il simbolo della foresta. I loro piumaggi iridescenti, spettacolari da osservare, specialmente durante i voli collettivi.
                                    </p>
                                </div>
            
                            </div>
            
                        </div>
                    </div>
                   
        
                </div>

  `;
});

flora.addEventListener('click', () => {
    // Sostituisci l'intero contenuto del div
    content.innerHTML = `
                <div class="row reset-all align-items-start">

                    <div class="row reset-all">

                        <div class="col reset-all margin-right">
            
                            <div class="row card reset-all area-item">
            
                                <img src="img/zona 1/zona 1/funghi.jpg" class="card-img img-long reset-padding up" alt="Mescalite">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Mescalite</h2>
                                    <p class="text">
                                        Il Mescalite è un fungo bioluminescente originario del pianeta alieno Avalon Prime, celebre per la sua straordinaria biodiversità e paesaggi psichedelici. Questo organismo si distingue non solo per la sua estetica sorprendente, ma anche per le sue proprietà biochimiche uniche che lo rendono una delle forme di vita più misteriose e studiate del pianeta.
                                    </p>
                                </div>
            
                            </div>
            
                            <div class="row card reset-all area-item">
            
                                <img src="img/zona 1/zona 1/aurelias.jpg" class="card-img img-long reset-padding low" alt="Plinus">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Plinus</h2>
                                    <p class="text">
                                       Un fiore bioluminescente dalle petali traslucidi che emettono una luce soffusa e avvolgente nelle tonalità del blu e del verde. La sua luminosità è il risultato di un meccanismo bioluminescente.
                                    </p>
                                </div>
            
                            </div>
            
                        </div>
            
                        <div class="col reset-all margin-left">
            
                            <div class="row card reset-all area-item">
            
                                <img src="img/zona 1/zona 1/campanla.jpg" class="card-img img-long reset-padding low" alt="Aurelias">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Aurelias</h2>
                                    <p class="text">
                                        La Lumiflora Aurealis è una pianta a forma di campana. Quando sfiorata, emette un bagliore colorato che si diffonde lungo i suoi petali, quasi come un’onda di luce.    
                                    </p>
                                </div>
            
                            </div>
            
                            <div class="row card reset-all area-item">
            
                                <img src="img/zona 1/zona 1/orchidea.jpg" class="card-img img-long reset-padding up" alt="Luminorchid">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Luminorchid</h2>
                                    <p class="text">
                                        Un’orchidea che cresce tra le chiome degli alberi. I suoi fiori blu si illuminano delicatamente al tramonto, attirando impollinatori. Questa pianta è amata per la sua rara bellezza e longevità.
                                    </p>
                                </div>
            
                            </div>
            
                        </div>
                    </div>
                   
        
                </div>
    `;
  });
fluviale.addEventListener('click', () => {
    // Sostituisci l'intero contenuto del div
    content.innerHTML = `
                <div class="row reset-all align-items-start">

                    <div class="row reset-all">

                        <div class="col reset-all margin-right">
            
                            <div class="row card reset-all area-item">
            
                                <img src="img/zona 1/zona 1/b8865d85f827140da1f5fc72d6b0e477.jpg" class="card-img img-long reset-padding up" alt="Laudor">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Laudor</h2>
                                    <p class="text">
                                        Laudor è una spiaggia celebre per la sua straordinaria bioluminescenza che trasforma il paesaggio in un mosaico vibrante di luci pulsanti al calar del sole. Questa meraviglia naturale è considerata una delle mete più spettacolari della galassia, attirando scienziati, esploratori e sognatori da ogni angolo dell’universo. 
                                    </p>
                                </div>
            
                            </div>
            

            
                        </div>
            
                        <div class="col reset-all margin-left">
            
                            <div class="row card reset-all area-item">
            
                                <img src="img/zona 1/zona 1/pesci.jpg" class="card-img img-long reset-padding up" alt="Nymphyr">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Nymphyr</h2>
                                    <p class="text">
                                        Pesci di piccole dimensioni che nuotano in banchi, creando scie luminose blu e argento sotto la superficie dell’acqua, visibili specialmente durante le soste in baia.    
                                    </p>
                                </div>
            
                            </div>
            
                        </div>
                    </div>
                    <div class="row card reset-all area-item">
            
                        <img src="img/zona 1/zona 1/e7b8d8d64fcfaefbc4ab0e17b7fb732a.jpg" class="card-img img-long reset-padding low" alt="Plankton Aok">
    
                        <div class="overlay"></div>
    
                        <div class="text-item">
                            <h2 class="semibold">Plankton Aok</h2>
                            <p class="text">
                               Un regno di luci e ombre, si trova la Valle delle Lanterne: una distesa di rocce levigate dove cascate di acqua luminescente scivolano giù da scogliere di cristallo, tuffandosi in laghi incandescenti. 
                            </p>
                        </div>
            
                     </div>
        
                </div>
    `;
  });
rovine.addEventListener('click', () => {
    // Sostituisci l'intero contenuto del div
    content.innerHTML = `
                <div class="row reset-all align-items-start">

                    <div class="row reset-all">

                        <div class="col reset-all margin-right">
            
                            <div class="row card reset-all area-item">
            
                                <img src="img/zona 1/zona 1/0167d479aa47624215ac938373d3a6fc.jpg" class="card-img img-long reset-padding up" alt="Rovine di Azathot">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Rovine di Azathot</h2>
                                    <p class="text">
                                        Le Rovine di Azathot sono un luogo di mistero e meraviglia, situato nel cuore di un mondo avvolto dalla bioluminescenza. Queste rovine antiche si ergono tra una foresta lussureggiante, dove alberi giganteschi, dalle cortecce  brillano di un blu profondo. 
                                    </p>
                                </div>
            
                            </div> 
            
                        </div>
            
                        <div class="col reset-all margin-left">
            
                            <div class="row card reset-all area-item">
            
                                <img src="img/zona 1/zona 1/9651de678bc1343066eb8e68ec625299.jpg" class="card-img img-long reset-padding up" alt="Città sospesa di Cortex">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Città sospesa di Cortex</h2>
                                    <p class="text">
                                        Le Rovine della Città Sospesa di Coretex sono un luogo affascinante e inquietante, situato in una regione selvaggia dove la bioluminescenza pervade ogni angolo della natura. La città, un tempo un capolavoro di ingegneria avanzata.    
                                    </p>
                                </div>
            
                            </div>
            
                        </div>
                    </div>
                   
        
                </div>
    `;
  });
