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


  
/****CALENDARIO****/
document.addEventListener('DOMContentLoaded', () => {
    const currentMonthElement = document.getElementById('current-month');
    const daysContainer = document.getElementById('days-container');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentDate = new Date();
    let selectedDay = null;
    let selectedTime = null;

    function getMonthName(monthIndex) {
        const monthNames = [
            'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
            'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
        ];
        return monthNames[monthIndex];
    }

    function generateCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        daysContainer.innerHTML = '';

        for (let i = 0; i < firstDay; i++) {
            const emptySlot = document.createElement('div');
            emptySlot.classList.add('day', 'empty');
            daysContainer.appendChild(emptySlot);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;

            dayElement.addEventListener('click', () => {
                if (selectedDay) {
                    selectedDay.classList.remove('selected');
                }
                dayElement.classList.add('selected');
                selectedDay = dayElement;
                saveSelection();
            });

            daysContainer.appendChild(dayElement);
        }

        currentMonthElement.textContent = `${getMonthName(month)} ${year}`;
    }

    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
    });

    /****SALVATAGGIO SELEZIONE****/
    function saveSelection() {
        const selectedDate = selectedDay ? selectedDay.textContent.trim() : null;
        const selectedMonth = getMonthName(currentDate.getMonth());
        const selectedYear = currentDate.getFullYear();
        const selectedHour = selectedTime ? selectedTime.textContent.trim() : null;

        if (selectedDate && selectedHour) {
            const selectedData = {
                date: `${selectedDate} ${selectedMonth} ${selectedYear}`,
                time: selectedHour
            };

            localStorage.setItem('selectedData', JSON.stringify(selectedData));

            console.log('Dati salvati:', selectedData);
        } else {
            console.warn('Seleziona sia una data che un orario.');
        }
    }

    const timeOptions = document.querySelectorAll('.time-option');
    timeOptions.forEach(time => {
        time.addEventListener('click', () => {
            if (selectedTime) {
                selectedTime.classList.remove('selected');
            }
            time.classList.add('selected');
            selectedTime = time;
            saveSelection();
        });
    });

    generateCalendar(currentDate);
});


/***TOTALE DINAMICO***/

document.addEventListener('DOMContentLoaded', () => {
    
    const cards = document.querySelectorAll('.card-tariffs');

    function calculateTotalPrice() {
        let totalPrice = 0;

        cards.forEach(card => {
            const unitPrice = parseFloat(card.dataset.unitPrice);
            const quantity = parseInt(card.querySelector('.number').textContent, 10);
            totalPrice += unitPrice * quantity;
        });

        document.getElementById('total-price').textContent = `${totalPrice.toFixed(2)}€`;
    }


    function updateCounter(button, increment) {
        const counter = button.closest('.counter').querySelector('.number');
        let currentValue = parseInt(counter.textContent, 10);

        if (increment) {
    currentValue = currentValue + 1;
        } else {
    currentValue = Math.max(0, currentValue - 1);
}        counter.textContent = currentValue;


        calculateTotalPrice();
    }


    cards.forEach(card => {
        const minusButton = card.querySelector('.minus');
        const plusButton = card.querySelector('.plus');


        minusButton.addEventListener('click', () => {
            updateCounter(minusButton, false);
        });


        plusButton.addEventListener('click', () => {
            updateCounter(plusButton, true);
        });
    });
});

/*****Il menù non si chiude***/

document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function (event) {
            event.stopPropagation(); // Impedisce la chiusura del dropdown
        });
    });


/***classe selected a dropdown***/
document.addEventListener('DOMContentLoaded', () => {
    let currentPlace = null;
    let currentDestination = null;

    const selectedPlaces = document.querySelectorAll('.dropdown-item-route-start');
    selectedPlaces.forEach(place => {
        place.addEventListener('click', () => {
            if (currentPlace) {
                currentPlace.classList.remove('selected');
            }
            place.classList.add('selected');
            currentPlace = place;
            saveRouteSelection();
        });
    });

    const selectedDestinations = document.querySelectorAll('.dropdown-item-route-end');
    selectedDestinations.forEach(destination => {
        destination.addEventListener('click', () => {
            if (currentDestination) {
                currentDestination.classList.remove('selected');
            }
            destination.classList.add('selected');
            currentDestination = destination;
            saveRouteSelection();
        });
    });

    function saveRouteSelection() {
        const place = currentPlace ? currentPlace.textContent.trim() : null;
        const destination = currentDestination ? currentDestination.textContent.trim() : null;

        console.log(`Place: ${place}, Destination: ${destination}`);
    }
});


/***RIEPILOGO***/

const selectedData = JSON.parse(localStorage.getItem('selectedData'));

if (selectedData) {
    document.getElementById('selected-date').textContent = selectedData.date;
    document.getElementById('selected-time').textContent = selectedData.time;
} else {
    let resultElement = document.getElementById('selection-result');
}
if (!resultElement) {
        resultElement = document.createElement('p');
        resultElement.id = 'selection-result';
        document.body.appendChild(resultElement);
    }
    resultElement.textContent = "Nessuna data e ora selezionata.";





/***COUNTER***/

function updateCounter(button, increment) {
    const counter = button.closest('.counter').querySelector('.number');
    let currentValue = parseInt(counter.textContent, 10);

    if (increment) {
currentValue = currentValue + 1;
    } else {
currentValue = Math.max(0, currentValue - 1);
}        counter.textContent = currentValue;
}

const cards = document.querySelectorAll('.counter');


cards.forEach(card => {
    const minusButton = card.querySelector('.minus');
    const plusButton = card.querySelector('.plus');


    minusButton.addEventListener('click', () => {
        updateCounter(minusButton, false);
    });


    plusButton.addEventListener('click', () => {
        updateCounter(plusButton, true);
    });
});