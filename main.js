//implemento un ascoltatore di eventi al tasto gioca

document.getElementById('play').addEventListener('click', play);

//funzione che gestisce tutto il gioco
function play() {

    console.log('Avvio del gioco');

    const gioco = document.getElementById('gioco');
    //resetto il campo di gioco
    gioco.innerHTML = "";
    
    const difficolta = document.getElementById('difficolta').value;

    let numeroCelle;
    let cellePerRiga;

    switch (difficolta) {
        case "facile":
        default:
            numeroCelle = 100;
            break;
        case "medio":
            numeroCelle = 81;
            break;
        case "difficile":
            numeroCelle = 49;
            break;
    }


generaCampoGioco(numeroCelle);

    function generaCampoGioco(numeroCelle) {

        cellePerRiga = Math.sqrt(numeroCelle);

        for (let i = 1; i <= numeroCelle; i++) {

            const nodo = document.createElement('div');
            nodo.classList.add('quadrato');

            const dimensione = `calc(100% / ${cellePerRiga})`;
            nodo.style.width = dimensione;
            nodo.style.height = dimensione;
        
            nodo.innerText = i;
        
            nodo.addEventListener('click', function() {
                this.classList.add('clicked');
            });
        
            gioco.appendChild(nodo);
        
        }

        return true;

    }


}
