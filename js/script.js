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