document.addEventListener('DOMContentLoaded', () => {
    
    if (window.location.pathname === '/2.1_lumineth.html') {
        
        const fauna = document.getElementById('fauna');
        const flora = document.getElementById('flora');
        const fluviale = document.getElementById('fluviale');
        const rovine = document.getElementById('rovine');
        const content = document.getElementById('content');

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
                    
                                <img src="img/dioluminescenza.png" class="card-img img-long reset-padding low" alt="Plankton Aok">
            
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
                    
                                        <img src="img/rovine.jpg" class="card-img img-long reset-padding up" alt="Rovine di Azathot">
                    
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
                    
                                        <img src="img/cortex.jpg" class="card-img img-long reset-padding up" alt="Città sospesa di Cortex">
                    
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
        
    }

    if (window.location.pathname === '/2.2_arakhara.html') {
        
        const ara_fauna = document.getElementById('ara-fauna');
        const ara_flora = document.getElementById('ara-flora');
        const ara_fluviale = document.getElementById('ara-fluviale');
        const ara_rovine = document.getElementById('ara-rovine');
        const ara_content = document.getElementById('ara-content');

        ara_fauna.addEventListener('click', () => {
            ara_content.innerHTML = `
        
                            <div class="row reset-all align-items-start">
        
                            <div class="row reset-all">
        
                                <div class="col reset-all margin-right">
                    
                                    <div class="row card reset-all area-item">
                    
                                        <img src="img/zona_2/zona 2/serpente 2.jpg" class="card-img img-long reset-padding up" alt="Anodick">
                    
                                        <div class="overlay"></div>
                                        
                                        <div class="text-item">
                                            <h2 class="semibold">Anodick</h2>
                                            <p class="text">
                                                Una creatura dalla pelle anodizzata che brilla come un arcobaleno metallico. Le sue scaglie iridescenti cambiano colore con il movimento, passando da zaffiro a verde smeraldo e oro liquido. I suoi occhi luminosi emanano un bagliore ipnotico, mentre la sua scia luminosa danza nell’aria come pura magia. Tanto venerato quanto temuto, il Prismaglio è il simbolo vivente della magnificenza e del mistero di Arakhara.
                                            </p>
                                        </div>
                    
                                    </div>
                    
                                    <div class="row card reset-all area-item">
                    
                                        <img src="img/zona_2/zona 2/ragno.jpg" class="card-img img-long reset-padding low" alt="Luminorchid">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Luminorchid</h2>
                                            <p class="text">Un ragno gigante con zampe lunghe e delicate e un corpo lucente di un blu.  Non è aggressivo, ma la sua presenza imponente lascia i visitatori senza fiato</p>
                                        </div>
                    
                                    </div>
                    
                                </div>
                    
                                <div class="col reset-all margin-left">
                    
                                    <div class="row card reset-all area-item ">
                    
                                        <img src="img/zona_2/zona 2/falena 2.jpg" class="card-img img-long reset-padding low" alt="Stellar Moth">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Stellar Moth</h2>
                                            <p class="text">Grandi falene luminose che si raccolgono attorno alle rovine fluttuanti, emettendo bagliori argentati.</p>
                                        </div>
                    
                                    </div>
                    
                                    <div class="row card reset-all area-item">
                                        
                                        <img src="img/zona_2/zona 2/scarabeo 2.jpg" class="card-img img-long reset-padding up" alt="Gloscaw">
                    
                                        <div class="overlay"></div>
                                        
                                        <div class="text-item">
                                            <h2 class="semibold">Gloscaw</h2>
                                            <p class="text">Scarabei bioluminescenti che si radunano attorno alle rovine al calare del sole, emettendo una luce verde brillante.</p>
                                        </div>
                    
                                    </div>
                    
                                </div>
                            </div>
                            
                
                        </div>
        
            `;
        });
        ara_flora.addEventListener('click', () => {
            ara_content.innerHTML = `
                        <div class="row reset-all align-items-start">
        
                            <div class="row reset-all">
        
                                <div class="col reset-all margin-right">
                    
                                    <div class="row card reset-all area-item">
                    
                                        <img src="img/zona_2/zona 2/lucciole2.jpg" class="card-img img-long reset-padding up" alt="Dooce">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Dooce</h2>
                                            <p class="text">Sono piante aliene che si illuminano al tocco degli insetti. Quando un insetto si posa, i loro petali e foglie semi-trasparenti si accendono in vivaci colori fluorescenti, creando onde di luce che pulsano attraverso le nervature. Alcune piante si illuminano interamente, altre emettono solo lampi concentrici, trasformando la foresta in un gioco di luci e colori. Questi bagliori attirano altri insetti, rendendo la simbiosi tra flora e fauna un vero spettacolo naturale.</p>
                                        </div>
                    
                                    </div>
                    
                                    <div class="row card reset-all area-item">
                    
                                        <img src="img/zona_2/zona 2/fioredeserto 2.jpg" class="card-img img-long reset-padding low" alt="Rapunzel">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Rapunzel</h2>
                                            <p class="text">Piccole piante che sbocciano solo di notte, emettendo una tenue gialla. Crescono sporadicamente tra le dune e sono visibili solo sotto il cielo stellato.</p>
                                        </div>
                    
                                    </div>
                    
                                </div>
                    
                                <div class="col reset-all margin-left">
                    
                                    <div class="row card reset-all area-item">
                    
                                        <img src="img/zona_2/zona 2/cactus2 2.jpg" class="card-img img-long reset-padding low" alt="Cacuroth">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Cacuroth</h2>
                                            <p class="text">Una pianta resistente con spine luminose colorate e che cresce in prossimità delle rovine fluttuanti.</p>
                                        </div>
                    
                                    </div>
                    
                                    <div class="row card reset-all area-item">
                    
                                        <img src="img/zona_2/zona 2/funghetto 2.jpg" class="card-img img-long reset-padding up" alt="Tame impala">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Tame impala</h2>
                                            <p class="text">Esemplare bioluminescente che cresce nei boschi ombrosi del mondo di Aethara. La sua cappella, a forma di piccola cupola, è di un bianco traslucido che emette una luce azzurra tenue, visibile anche a grande</p>
                                        </div>
                    
                                    </div>
                    
                                </div>
                            </div>
                            
                
                        </div>
            `;
        });
        ara_fluviale.addEventListener('click', () => {
            ara_content.innerHTML = `
                        <div class="row reset-all align-items-start">
        
                            <div class="row reset-all">
        
                                <div class="col reset-all margin-right">
                    
                                    <div class="row card reset-all area-item">
                    
                                        <img src="img/zona_2/zona 2/fluttuanti 2.jpg" class="card-img img-long reset-padding up" alt="Rocce fluttuanti">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Rocce fluttuanti</h2>
                                            <p class="text">un paesaggio straordinario di rocce fluttuanti si estende all'infinito sotto un cielo di colori cangianti. Grandi formazioni rocciose, levigate dal vento e dal tempo, galleggiano sospese nell’aria. </p>
                                        </div>
                    
                                    </div>
                    
        
                    
                                </div>
                    
                                <div class="col reset-all margin-left">
                    
                                    <div class="row card reset-all area-item">
                    
                                        <img src="img/desertomir.jpg" class="card-img img-long reset-padding up" alt="Deserto Mir">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Deserto Mir</h2>
                                            <p class="text">il paesaggio è dominato da dune di sabbia argentata che scintillano sotto un cielo di un blu profondo e infinito. La sabbia, fine e quasi metallica, riflette la luce delle stelle, che appaiono particolarmente brillanti.</p>
                                        </div>
                    
                                    </div>
                    
                                </div>
                            </div>
                            <div class="row card reset-all area-item">
                    
                                <img src="img/zona_2/zona 2/dunenotte2 2.jpg" class="card-img img-long reset-padding low" alt="Deserto Moan">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Deserto Moan</h2>
                                    <p class="text">le dune si estendono a perdita d'occhio, come onde di fuoco pietrificato, scolpite dal vento in forme sinuose e imponenti.</p>
                                </div>
                    
                            </div>
                
                        </div>
            `;
        });
        ara_rovine.addEventListener('click', () => {
            ara_content.innerHTML = `
                        <div class="row reset-all align-items-start">
        
                            <div class="row reset-all">
        
                                <div class="col reset-all margin-right">
                    
                                    <div class="row card reset-all area-item">
                    
                                        <img src="img/zona_2/zona 2/deserto 2.jpg" class="card-img img-long reset-padding up" alt="Tempio di Mesron">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Tempio di Mesron</h2>
                                            <p class="text">antica città scolpita nelle montagne di roccia, simile a Petra, ma avvolta da un mistero ancora più profondo. Le sue imponenti facciate sono state intagliate direttamente nella pietra rossa delle scogliere, creando un labirinto di templi, tombe e palazzi, tutti decorati con intricati rilievi.</p>
                                        </div>
                    
                                    </div> 
                    
                                </div>
                            </div>
                            
                
                        </div>
            `;
        });
        
    }

});


