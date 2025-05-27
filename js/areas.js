
document.addEventListener ("DOMContentLoaded", () => {

    
    if (window.location.pathname === '/2.1_lumineth.html') {
        
        const fauna = document.getElementById('fauna');
        const flora = document.getElementById('flora');
        const fluviale = document.getElementById('fluviale');
        const rovine = document.getElementById('rovine');
        const content = document.getElementById('content');
        

        fauna.addEventListener('click', () => {
        
        content.innerHTML = `
             <div class="row align-items-start">
 
             <div class="col margin-right">
                 
                 <div class="row card area-item">
                     <img src="img/zona_1/zona_1/d3d964f4fa2dbdded9ee1ec6ac46ad1e.jpg" class="card-img up" alt="Nyxari">
                     <div class="overlay"></div>
                     
                     <div class="text-item">
                         <h2 class="semibold">Nyxari</h2>
                         <p>
                             I Nyxari sono felini, simili alle tigri terrestri, con un manto luminoso. Sono animali solitari ma curiosi. Se attratti da uno stimolo luminoso, possono avvicinarsi cautamente.
                         </p>
                     </div>
                 </div>
             
                 <div class="row card area-item">
                     <img src="img/zona_1/zona_1/farfalla.jpg" class="card-img low" alt="Lyserian">
                     <div class="overlay"></div>
                     <div class="text-item">
                         <h2 class="semibold">Lyserian</h2>
                         <p >
                             Farfalle dalle ali trasparenti che volano in gruppi di centinaia, creando spettacoli di luce fluttuante. Le loro ali si accendono in sfumature di blu e arancione mentre si muovono.
                         </p>
                     </div>
                 </div>            
             </div>  
 
             <div class="col margin-left">
              
                 <div class="row card area-item ">
 
                     <img src="img/zona_1/zona_1/rana.jpg" class="card-img low" alt="Arakhara">
 
                     <div class="overlay"></div>
 
                     <div class="text-item">
                         <h2 class="semibold">Luminex</h2>
                         <p >
                             I Luminex sono anfibi simili a rane che saltano in gruppi vicino al pelo dell’acqua, sincronizzando il loro bagliore con i movimenti del kayak.    
                         </p>
                     </div>
 
                 </div>
 
                 <div class="row card area-item">
                    
                     <img src="img/arboryx.png" class="card-img up" alt="Arboryx">
 
                     <div class="overlay"></div>
                     
                     <div class="text-item">
                         <h2 class="semibold">Arboryx</h2>
                         <p >
                             Gli Arboryx, con i loro nidi costruiti a decine di metri da terra, sono il simbolo della foresta. I loro piumaggi iridescenti, spettacolari da osservare, specialmente durante i voli collettivi.
                         </p>
                     </div>
 
                 </div>
             </div>
        </div>
        `;
        });
        flora.addEventListener('click', () => {
            // Sostituisci l'intero contenuto del div
            content.innerHTML = `
                        <div class="row  align-items-start">

                            <div class="row ">

                                <div class="col  margin-right">
                    
                                    <div class="row card  area-item">
                    
                                        <img src="img/zona_1/zona_1/funghi.jpg" class="card-img img-long  up" alt="Mescalite">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Mescalite</h2>
                                            <p >
                                                Il Mescalite è un fungo bioluminescente originario del pianeta alieno Avalon Prime, celebre per la sua straordinaria biodiversità e paesaggi psichedelici. Questo organismo si distingue non solo per la sua estetica sorprendente, ma anche per le sue proprietà biochimiche uniche che lo rendono una delle forme di vita più misteriose e studiate del pianeta.
                                            </p>
                                        </div>
                    
                                    </div>
                    
                                    <div class="row card area-item">
                    
                                        <img src="img/zona_1/zona_1/aurelias.jpg" class="card-img img-long  low" alt="Plinus">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Plinus</h2>
                                            <p >
                                            Un fiore bioluminescente dalle petali traslucidi che emettono una luce soffusa e avvolgente nelle tonalità del blu e del verde. La sua luminosità è il risultato di un meccanismo bioluminescente.
                                            </p>
                                        </div>
                    
                                    </div>
                    
                                </div>
                    
                                <div class="col margin-left">
                    
                                    <div class="row card area-item">
                    
                                        <img src="img/zona_1/zona_1/campanla.jpg" class="card-img img-long low" alt="Aurelias">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Aurelias</h2>
                                            <p >
                                                La Lumiflora Aurealis è una pianta a forma di campana. Quando sfiorata, emette un bagliore colorato che si diffonde lungo i suoi petali, quasi come un’onda di luce.    
                                            </p>
                                        </div>
                    
                                    </div>
                    
                                    <div class="row card area-item">
                    
                                        <img src="img/zona_1/zona_1/orchidea.jpg" class="card-img img-long up" alt="Luminorchid">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Luminorchid</h2>
                                            <p >
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
                        <div class="row align-items-start">

                            <div class="row">

                                <div class="col margin-right">
                    
                                    <div class="row card area-item">
                    
                                        <img src="img/zona_1/zona_1/b8865d85f827140da1f5fc72d6b0e477.jpg" class="card-img img-long up" alt="Laudor">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Laudor</h2>
                                            <p >
                                                Laudor è una spiaggia celebre per la sua straordinaria bioluminescenza che trasforma il paesaggio in un mosaico vibrante di luci pulsanti al calar del sole. Questa meraviglia naturale è considerata una delle mete più spettacolari della galassia, attirando scienziati, esploratori e sognatori da ogni angolo dell’universo. 
                                            </p>
                                        </div>
                    
                                    </div>
                    

                    
                                </div>
                    
                                <div class="col margin-left">
                    
                                    <div class="row card area-item">
                    
                                        <img src="img/zona_1/zona_1/pesci.jpg" class="card-img img-long up" alt="Nymphyr">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Nymphyr</h2>
                                            <p >
                                                Pesci di piccole dimensioni che nuotano in banchi, creando scie luminose blu e argento sotto la superficie dell’acqua, visibili specialmente durante le soste in baia.    
                                            </p>
                                        </div>
                    
                                    </div>
                    
                                </div>
                            </div>
                            <div class="row card area-item">
                    
                                <img src="img/dioluminescenza.png" class="card-img img-long low" alt="Plankton Aok">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Plankton Aok</h2>
                                    <p >
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
                        <div class="row align-items-start">

                            <div class="row">

                                <div class="col margin-right">
                    
                                    <div class="row card area-item">
                    
                                        <img src="img/rovine.jpg" class="card-img img-long up" alt="Rovine di Azathot">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Rovine di Azathot</h2>
                                            <p >
                                                Le Rovine di Azathot sono un luogo di mistero e meraviglia, situato nel cuore di un mondo avvolto dalla bioluminescenza. Queste rovine antiche si ergono tra una foresta lussureggiante, dove alberi giganteschi, dalle cortecce  brillano di un blu profondo. 
                                            </p>
                                        </div>
                    
                                    </div> 
                    
                                </div>
                    
                                <div class="col margin-left">
                    
                                    <div class="row card area-item">
                    
                                        <img src="img/cortex.jpg" class="card-img img-long up" alt="Città sospesa di Cortex">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Città sospesa di Cortex</h2>
                                            <p >
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
        
        const ara_fauna = document.getElementById('fauna');
        const ara_flora = document.getElementById('flora');
        const ara_fluviale = document.getElementById('fluviale');
        const ara_rovine = document.getElementById('rovine');
        const ara_content = document.getElementById('content');

        ara_fauna.addEventListener('click', () => {
            ara_content.innerHTML = `
               <div class="row align-items-start">
 
             <div class="col margin-right">
                 
                 <div class="row card area-item">
                     <img src="img/zona_2/zona_2/serpente.jpg" class="card-img up" alt="Nyxari">
                     <div class="overlay"></div>
                     
                     <div class="text-item">
                        <h2 class="semibold">Anodick</h2>
                        <p >
                            Una creatura dalla pelle anodizzata che brilla come un arcobaleno metallico. Le sue scaglie iridescenti cambiano colore con il movimento, passando da zaffiro a verde smeraldo e oro liquido. I suoi occhi luminosi emanano un bagliore ipnotico, mentre la sua scia luminosa danza nell’aria come pura magia. Tanto venerato quanto temuto, il Prismaglio è il simbolo vivente della magnificenza e del mistero di Arakhara.
                        </p>
                    </div>
                 </div>
             
                 <div class="row card area-item">
                     <img src="img/zona_2/zona_2/ragno.jpg" class="card-img low" alt="Lyserian">
                     <div class="overlay"></div>
                     <div class="text-item">
                        <h2 class="semibold">Luminorchid</h2>
                        <p >Un ragno gigante con zampe lunghe e delicate e un corpo lucente di un blu.  Non è aggressivo, ma la sua presenza imponente lascia i visitatori senza fiato</p>
                    </div>
                 </div>            
             </div>  
 
             <div class="col margin-left">
              
                <div class="row card area-item ">
 
                    <img src="img/zona_2/zona_2/falena.jpg" class="card-img low" alt="Arakhara">
 
                    <div class="overlay"></div>
                    <div class="text-item">
                        <h2 class="semibold">Stellar Moth</h2>
                        <p >Grandi falene luminose che si raccolgono attorno alle rovine fluttuanti, emettendo bagliori argentati.</p>
                    </div>
 
                </div>
 
                <div class="row card area-item">
                    
                    <img src="img/zona_2/zona_2/scarabeo.jpg" class="card-img up" alt="Arboryx">
 
                    <div class="overlay"></div>
                     
                    <div class="text-item">
                        <h2 class="semibold">Gloscaw</h2>
                        <p >Scarabei bioluminescenti che si radunano attorno alle rovine al calare del sole, emettendo una luce verde brillante.</p>
                    </div>
 
                </div>
             </div>
        </div>
        
            `;
        });
        ara_flora.addEventListener('click', () => {
            ara_content.innerHTML = `
                        <div class="row align-items-start">
        
                            <div class="row">
        
                                <div class="col   margin-right">
                    
                                    <div class="row card   area-item">
                    
                                        <img src="img/zona_2/zona_2/lucciole2.jpg" class="card-img img-long   up" alt="Dooce">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Dooce</h2>
                                            <p >Sono piante aliene che si illuminano al tocco degli insetti. Quando un insetto si posa, i loro petali e foglie semi-trasparenti si accendono in vivaci colori fluorescenti, creando onde di luce che pulsano attraverso le nervature. Alcune piante si illuminano interamente, altre emettono solo lampi concentrici, trasformando la foresta in un gioco di luci e colori. Questi bagliori attirano altri insetti, rendendo la simbiosi tra flora e fauna un vero spettacolo naturale.</p>
                                        </div>
                    
                                    </div>
                    
                                    <div class="row card   area-item">
                    
                                        <img src="img/zona_2/zona_2/fioredeserto.jpg" class="card-img img-long   low" alt="Rapunzel">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Rapunzel</h2>
                                            <p >Piccole piante che sbocciano solo di notte, emettendo una tenue gialla. Crescono sporadicamente tra le dune e sono visibili solo sotto il cielo stellato.</p>
                                        </div>
                    
                                    </div>
                    
                                </div>
                    
                                <div class="col   margin-left">
                    
                                    <div class="row card   area-item">
                    
                                        <img src="img/zona_2/zona_2/cactus2.jpg" class="card-img img-long low" alt="Cacuroth">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Cacuroth</h2>
                                            <p >Una pianta resistente con spine luminose colorate e che cresce in prossimità delle rovine fluttuanti.</p>
                                        </div>
                    
                                    </div>
                    
                                    <div class="row card   area-item">
                    
                                        <img src="img/zona_2/zona_2/funghetto.jpg" class="card-img img-long   up" alt="Tame impala">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Tame impala</h2>
                                            <p >Esemplare bioluminescente che cresce nei boschi ombrosi del mondo di Aethara. La sua cappella, a forma di piccola cupola, è di un bianco traslucido che emette una luce azzurra tenue, visibile anche a grande</p>
                                        </div>
                    
                                    </div>
                    
                                </div>
                            </div>
                            
                
                        </div>
            `;
        });
        ara_fluviale.addEventListener('click', () => {
            ara_content.innerHTML = `
                        <div class="row   align-items-start">
        
                            <div class="row  ">
        
                                <div class="col   margin-right">
                    
                                    <div class="row card   area-item">
                    
                                        <img src="img/zona_2/zona_2/fluttuanti.jpg" class="card-img img-long   up" alt="Rocce fluttuanti">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Rocce fluttuanti</h2>
                                            <p >un paesaggio straordinario di rocce fluttuanti si estende all'infinito sotto un cielo di colori cangianti. Grandi formazioni rocciose, levigate dal vento e dal tempo, galleggiano sospese nell’aria. </p>
                                        </div>
                    
                                    </div>
                    
        
                    
                                </div>
                    
                                <div class="col   margin-left">
                    
                                    <div class="row card   area-item">
                    
                                        <img src="img/desertomir.jpg" class="card-img img-long   up" alt="Deserto Mir">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Deserto Mir</h2>
                                            <p >il paesaggio è dominato da dune di sabbia argentata che scintillano sotto un cielo di un blu profondo e infinito. La sabbia, fine e quasi metallica, riflette la luce delle stelle, che appaiono particolarmente brillanti.</p>
                                        </div>
                    
                                    </div>
                    
                                </div>
                            </div>
                            <div class="row card   area-item">
                    
                                <img src="img/zona_2/zona_2/dunenotte2.jpg" class="card-img img-long   low" alt="Deserto Moan">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Deserto Moan</h2>
                                    <p >le dune si estendono a perdita d'occhio, come onde di fuoco pietrificato, scolpite dal vento in forme sinuose e imponenti.</p>
                                </div>
                    
                            </div>
                
                        </div>
            `;
        });
        ara_rovine.addEventListener('click', () => {
            ara_content.innerHTML = `
                        <div class="row   align-items-start">
        
                            <div class="row  ">
        
                                <div class="col   margin-right">
                    
                                    <div class="row card   area-item">
                    
                                        <img src="img/zona_2/zona_2/deserto.jpg" class="card-img img-long   up" alt="Tempio di Mesron">
                    
                                        <div class="overlay"></div>
                    
                                        <div class="text-item">
                                            <h2 class="semibold">Tempio di Mesron</h2>
                                            <p >antica città scolpita nelle montagne di roccia, simile a Petra, ma avvolta da un mistero ancora più profondo. Le sue imponenti facciate sono state intagliate direttamente nella pietra rossa delle scogliere, creando un labirinto di templi, tombe e palazzi, tutti decorati con intricati rilievi.</p>
                                        </div>
                    
                                    </div> 
                    
                                </div>
                            </div>
                            
                
                        </div>
            `;
        });
        
    }

    if (window.location.pathname === '/2.3_nyxanthis.html') {
        const this_fauna =    document.getElementById('fauna');
        const this_flora =    document.getElementById('flora');
        const this_fluviale = document.getElementById('fluviale');
        const this_rovine =   document.getElementById('rovine');
        const this_content =  document.getElementById('content'); 



this_fauna.addEventListener('click', () => {

    this_content.innerHTML = `

       <div class="row align-items-start">
 
            <div class="col margin-right">
                
                <div class="row card area-item">
                    <img src="img/zona_3/zona_3/jeco.jpg" class="card-img up" alt="Nyxari">
                    <div class="overlay"></div>
                    
                    <div class="text-item">
                        <h2 class="semibold">Luminix</h2>
                        <p >Un piccolo geco dalle squame brillanti che riflette i colori dell’arcobaleno, spesso visibile arrampicato sugli archi e colonne antiche.</p>
                    </div>
                </div>
            
                <div class="row card area-item">
                    <img src="img/zona_3/zona_3/ruga.jpg" class="card-img low" alt="Lyserian">
                    <div class="overlay"></div>
     
                    <div class="text-item">
                        <h2 class="semibold">Rugaxys</h2>
                        <p >Le tartarughe giganti Rugaxys sono imponenti e gentili, con gusci decorati da striature fluorescenti che si illuminano leggermente al buio, creando uno spettacolo visivo unico.</p>
                    </div>
                </div>            
            </div>  

            <div class="col margin-left ">
             
               <div class="row card area-item">
                   <img src="img/zona_3/zona_3/colibrì.jpg" class="card-img mid" alt="Arakhara">

                   <div class="overlay"></div>
                   <div class="text-item">
                        <h2 class="semibold">Cortox</h2>
                        <p >Il Cortox è un uccello bioluminescente che popola le foreste di Xylos, un mondo intriso di luce naturale. Con le sue piume sottili e iridescenti, il Cortox emette un bagliore tenue che varia dal blu elettrico al verde.</p>
                   </div>
               </div>
            </div>
       </div>

    `;
});
this_flora.addEventListener('click', () => {
    this_content.innerHTML = `
                <div class="row   align-items-start">

                    <div class="row  ">

                        <div class="col   margin-right">
            
                            <div class="row card   area-item">
            
                                <img src="img/luminis.png" class="card-img img-long   up" alt="Luminis">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Luminis</h2>
                                    <p >La flora di Nyxanthis è ricca e diversificata, adattata perfettamente a questo ambiente unico. Tra le rovine emerse si ergono fiori di <strong>Luminis</strong>, come gioielli viventi, decorano le colonne e gli archi delle città sommerse con la loro fluorescenza incantata, emettendo una luce pulsante soffusa e magica che illumina le notti e sembra respirare insieme al mare, avvolgendo le rovine in un alone di mistero e fascino. Di notte, i Luminis brillano con maggiore intensità, creando un panorama mozzafiato: un universo sommerso che sembra danzare sotto l’abbraccio delle onde. Questa flora straordinaria non è solo un elemento di bellezza, ma anche un rifugio per i pesci iridescenti e le altre creature marine che abitano le profondità. I Luminis sono il cuore pulsante del Mare di Nyxanthis, un simbolo della fusione tra natura e storia, tra vita e memoria, che rende questo luogo unico e indimenticabile. </p>
                                </div>
            
                            </div> 
            
                        </div>
                    </div>
                    
        
                </div>
    `;
});
this_fluviale.addEventListener('click', () => {
    this_content.innerHTML = `
                <div class="row align-items-start">

                    <div class="row">

                        <div class="col margin-right">
            
                            <div class="row card area-item">
            
                                <img src="img/zona_3/zona_3/crab.jpg" class="card-img img-long up" alt="Crabxys">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Crabxys</h2>
                                    <p >Creatura bioluminescente che abita le spiagge di sabbia fine del mondo di Ophira, un luogo dove ogni angolo della natura emette una luce propria.</p>
                                </div>
            
                            </div>
            

            
                        </div>
            
                        <div class="col margin-left">
            
                            <div class="row card area-item">
            
                                <img src="img/zona_3/zona_3/pescefantasma.jpg" class="card-img img-long up" alt="Phantys">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Phantys</h2>
                                    <p >Un pesce traslucido che nuota vicino alla superficie, il cui corpo emette una luce pallida che ricorda le luci delle stelle.</p>
                                </div>
            
                            </div>
            
                        </div>
                    </div>
                    <div class="row card area-item">
            
                        <img src="img/zona_3/zona_3/stella_marina.jpg" class="card-img img-long low" alt="Stelaxys">
    
                        <div class="overlay"></div>
    
                        <div class="text-item">
                            <h2 class="semibold">Stelaxys</h2>
                            <p >Una stella marina bioluminescente che emette una delicata luce, spesso visibile sulle strutture delle città sommerse.</p>
                        </div>
            
                    </div>
        
                </div>
    `;
});
this_rovine.addEventListener('click', () => {
    this_content.innerHTML = `
                <div class="row align-items-start">

                    <div class="row">

                        <div class="col margin-right">
            
                            <div class="row card area-item">
            
                                <img src = "img/citta_sommersa.jpg" class="card-img img-long up" alt="Rovine del mare">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Rovine del mare</h2>
                                    <p >Le rovine del Mare di Nyxanthis sono testimonianze straordinarie di una civiltà perduta, sia sommerse che emerse, offrendo uno spettacolo affascinante per esploratori e studiosi. Sotto le acque turchesi, intricate città sommerse si svelano tra relitti di antiche navi, ormai corallizzati e popolati da una vivace fauna marina. Sulla terraferma, lungo le coste, si ergono le rovine emerse, scolpite in una pietra bianca iridescente che riflette i colori del mare. Questi resti architettonici, circondati da vegetazione lussureggiante e alte palme, narrano storie di un'epoca passata, intrecciando storia e natura in un panorama mozzafiato. Le rovine attirano archeologi, avventurieri e amanti della natura, offrendo un’esperienza unica di esplorazione e relax.</p>
                                </div>
            
                            </div> 
            
                        </div>
                    </div>
                    
        
                </div>
    `;
});


    }

    if (window.location.pathname === '/2.4_dome.html') {
        const alloggi =    document.getElementById('alloggi');
const ristoranti =    document.getElementById('ristoranti');
const farmacia = document.getElementById('farmacia');
const negozi =   document.getElementById('negozi');
const content =  document.getElementById('content');

alloggi.addEventListener('click', () => {

    
    content.innerHTML = `

        <div class="row d-flex"> 
                <div class="col-6">
                  <img src="img/Pantheon.png" alt="Pantheon" class="img-dome">
            </div>

            <div class="col-6">
                  <h2 class="row ">Pantheon</h2>
                  <p class="row margin-top-50">Il Pantheon è un lussuoso albergo immerso in un ecosistema unico e incontaminato. Costruito su piattaforme sospese tra le cime degli alberi giganti della foresta di Lyvion, offre una vista mozzafiato su un mare verde pulsante di vita. Le sue pareti in vetro bio-trasparente permettono agli ospiti di ammirare panorami spettacolari, dall’aurora multicolore che danza nel cielo ai misteriosi bioluminescenti che illuminano la foresta di notte. Con un'architettura che si fonde armoniosamente con la natura circostante, il Pantheon è il rifugio perfetto per esploratori intergalattici e amanti della tranquillità cosmica.
                  </p>
            </div> 
        </div>

    `;
});

ristoranti.addEventListener('click', () => {
    content.innerHTML = `
        <div class="row d-flex"> 
                <div class="col-6">
                    <img src="img/Luce_Lumineth.jpg" alt="Luce di Lumineth" class="img-dome">
                </div>

                <div class="col-6 ">
                    <h2 class="row">Luce di Lumineth</h2>
                    <p class="row  margin-top-50">Al centro della maestosa cupola di Lumineth, simbolo dell’armonia tra natura e architettura, sorge il ristorante Luce di Lumineth. Circondato dalla vista mozzafiato delle foreste bioluminescenti e delle rovine scintillanti, il ristorante offre un’esperienza unica in un ambiente elegante e immersivo. Il menù celebra i sapori della zona, preparati con ingredienti locali sostenibili. All’interno della cupola, giochi di luci e suoni richiamano i canti dei Vironis e il bagliore naturale delle foreste, rendendo ogni pasto un’esperienza indimenticabile. Un luogo perfetto per gustare la magia di Lumineth, nel cuore pulsante della sua straordinaria cupola.
                    </p>
                </div> 
        </div>
    `;
});
farmacia.addEventListener('click', () => {
    content.innerHTML = `
            <div class="row d-flex"> 
            <div class="col-6">
                  <img src="img/Armonia_Lumineth.jpg" alt="Armonia di Lumineth" class="img-dome">
            </div>

            <div class="col-6">
                  <h2 class="row">Armonia di Lumineth</h2>
                  <p class="row margin-top-50">Nel cuore della cupola di Lumineth, la Farmacia Armonia di Lumineth è un punto di riferimento per chi cerca rimedi naturali e cure moderne. Specializzata in prodotti locali, offre un'ampia gamma di preparati a base di erbe bioluminescenti, note per le loro proprietà rigeneranti, e oli estratti da piante uniche della foresta. La farmacia, progettata per integrarsi con l’ambiente, utilizza luci soffuse e decorazioni ispirate alle rovine e alla flora locale, creando un’atmosfera accogliente e rilassante. Un luogo dove la tradizione di Lumineth incontra la cura del benessere.
                  </p>
            </div> 
      </div>
    `;
});

negozi.addEventListener('click', () => {
    content.innerHTML = `
        <div class="row d-flex"> 
            <div class="col-6">
                  <img src="img/ricordi_Lumineth.jpg" alt="Ricordi di Lumineth" class="img-dome">
            </div>

            <div class="col-6">
                  <h2 class="row">Ricordi di Lumineth</h2>
                  <p class="row margin-top-50">All’interno della cupola di Lumineth, il negozio di Souvenir Ricordi di Lumineth offre oggetti unici per portare a casa la magia di questa terra straordinaria. Tra gli articoli disponibili ci sono gioielli ispirati alle rovine luminose, riproduzioni artigianali dei Nyxari e piume decorate degli Arboryx, oltre a candele bioluminescenti e tessuti realizzati con motivi della foresta. Ogni prodotto racconta una storia, creato da artisti locali con materiali sostenibili, per offrire un pezzo autentico del cuore pulsante di Lumineth. Perfetto per chi desidera un ricordo speciale di questo luogo incantato.
                  </p>
            </div> 
      </div>
    `;
});
    }
    




});
