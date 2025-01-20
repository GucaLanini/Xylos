const this_fauna =    document.getElementById('this_fauna');
const this_flora =    document.getElementById('this_flora');
const this_fluviale = document.getElementById('this_fluviale');
const this_rovine =   document.getElementById('this_rovine');
const this_content =  document.getElementById('this_content');

this_fauna.addEventListener('click', () => {
    this_content.innerHTML = `

            <div class="row reset-all align-items-start">

             <div class="row reset-all">

                 <div class="col reset-all margin-right">
     
                     <div class="row card reset-all area-item">
     
                         <img src="img/zona_3/zona 3/jeco 2.jpg" class="card-img img-long reset-padding up" alt="Luminix">
     
                         <div class="overlay"></div>
                         
                         <div class="text-item">
                             <h2 class="semibold">Luminix</h2>
                             <p class="text">Un piccolo geco dalle squame brillanti che riflette i colori dell’arcobaleno, spesso visibile arrampicato sugli archi e colonne antiche.</p>
                         </div>
     
                     </div>
     
                     <div class="row card reset-all area-item">
     
                         <img src="img/zona_3/zona 3/ruga 2.jpg" class="card-img img-long reset-padding low" alt="Rugaxys">
     
                         <div class="overlay"></div>
     
                         <div class="text-item">
                             <h2 class="semibold">Rugaxys</h2>
                             <p class="text">Le tartarughe giganti Rugaxys sono imponenti e gentili, con gusci decorati da striature fluorescenti che si illuminano leggermente al buio, creando uno spettacolo visivo unico.</p>
                         </div>
     
                     </div>
     
                 </div>
     
                 <div class="col reset-all margin-left">
     
                     <div class="row card reset-all area-item ">
     
                         <img src="img/zona_3/zona 3/colibrì 2.jpg" class="card-img img-long reset-padding maxxx" alt="Cortox">
     
                         <div class="overlay"></div>
     
                         <div class="text-item">
                             <h2 class="semibold">Cortox</h2>
                             <p class="text">Il Cortox è un uccello bioluminescente che popola le foreste di Xylos, un mondo intriso di luce naturale. Con le sue piume sottili e iridescenti, il Cortox emette un bagliore tenue che varia dal blu elettrico al verde.</p>
                         </div>
     
                     </div>
     
                 </div>
             </div>
            
 
         </div>

    `;
});
this_flora.addEventListener('click', () => {
    this_content.innerHTML = `
                <div class="row reset-all align-items-start">

                    <div class="row reset-all">

                        <div class="col reset-all margin-right">
            
                            <div class="row card reset-all area-item">
            
                                <img src="img/luminis.png" class="card-img img-long reset-padding up" alt="Luminis">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Luminis</h2>
                                    <p class="text">La flora di Nyxanthis è ricca e diversificata, adattata perfettamente a questo ambiente unico. Tra le rovine emerse si ergono fiori di <strong>Luminis</strong>, come gioielli viventi, decorano le colonne e gli archi delle città sommerse con la loro fluorescenza incantata, emettendo una luce pulsante soffusa e magica che illumina le notti e sembra respirare insieme al mare, avvolgendo le rovine in un alone di mistero e fascino. Di notte, i Luminis brillano con maggiore intensità, creando un panorama mozzafiato: un universo sommerso che sembra danzare sotto l’abbraccio delle onde. Questa flora straordinaria non è solo un elemento di bellezza, ma anche un rifugio per i pesci iridescenti e le altre creature marine che abitano le profondità. I Luminis sono il cuore pulsante del Mare di Nyxanthis, un simbolo della fusione tra natura e storia, tra vita e memoria, che rende questo luogo unico e indimenticabile. </p>
                                </div>
            
                            </div> 
            
                        </div>
                    </div>
                    
        
                </div>
    `;
});
this_fluviale.addEventListener('click', () => {
    this_content.innerHTML = `
                <div class="row reset-all align-items-start">

                    <div class="row reset-all">

                        <div class="col reset-all margin-right">
            
                            <div class="row card reset-all area-item">
            
                                <img src="img/zona_3/zona 3/crab 2.jpg" class="card-img img-long reset-padding up" alt="Crabxys">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Crabxys</h2>
                                    <p class="text">Creatura bioluminescente che abita le spiagge di sabbia fine del mondo di Ophira, un luogo dove ogni angolo della natura emette una luce propria.</p>
                                </div>
            
                            </div>
            

            
                        </div>
            
                        <div class="col reset-all margin-left">
            
                            <div class="row card reset-all area-item">
            
                                <img src="img/zona_3/zona 3/pescefantasma 2.jpg" class="card-img img-long reset-padding up" alt="Phantys">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Phantys</h2>
                                    <p class="text">Un pesce traslucido che nuota vicino alla superficie, il cui corpo emette una luce pallida che ricorda le luci delle stelle.</p>
                                </div>
            
                            </div>
            
                        </div>
                    </div>
                    <div class="row card reset-all area-item">
            
                        <img src="img/zona_3/zona 3/stella marina 2.jpg" class="card-img img-long reset-padding low" alt="Stelaxys">
    
                        <div class="overlay"></div>
    
                        <div class="text-item">
                            <h2 class="semibold">Stelaxys</h2>
                            <p class="text">Una stella marina bioluminescente che emette una delicata luce, spesso visibile sulle strutture delle città sommerse.</p>
                        </div>
            
                    </div>
        
                </div>
    `;
});
this_rovine.addEventListener('click', () => {
    this_content.innerHTML = `
                <div class="row reset-all align-items-start">

                    <div class="row reset-all">

                        <div class="col reset-all margin-right">
            
                            <div class="row card reset-all area-item">
            
                                <img src = "img/nyx_map.png" class="card-img img-long reset-padding up" alt="Rovine del mare">
            
                                <div class="overlay"></div>
            
                                <div class="text-item">
                                    <h2 class="semibold">Rovine del mare</h2>
                                    <p class="text">Le rovine del Mare di Nyxanthis sono testimonianze straordinarie di una civiltà perduta, sia sommerse che emerse, offrendo uno spettacolo affascinante per esploratori e studiosi. Sotto le acque turchesi, intricate città sommerse si svelano tra relitti di antiche navi, ormai corallizzati e popolati da una vivace fauna marina. Sulla terraferma, lungo le coste, si ergono le rovine emerse, scolpite in una pietra bianca iridescente che riflette i colori del mare. Questi resti architettonici, circondati da vegetazione lussureggiante e alte palme, narrano storie di un'epoca passata, intrecciando storia e natura in un panorama mozzafiato. Le rovine attirano archeologi, avventurieri e amanti della natura, offrendo un’esperienza unica di esplorazione e relax.</p>
                                </div>
            
                            </div> 
            
                        </div>
                    </div>
                    
        
                </div>
    `;
});


