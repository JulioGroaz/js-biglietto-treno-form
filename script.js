const bottone = document.querySelector("button");


bottone.addEventListener("click", function(){
    let distanzaKm = parseFloat( this.querySelector("distanza [type= number]"));
    let anni = parseInt( this.querySelector("anni[type= number]"));
    const PrezzoBiglietto = distanzaKm * 0.267113;
    function arrotondaInEccesso(prezzo) {
        return Math.ceil(prezzo * 100) / 100;
    }
    
    let PrezzoScontato;
    if (anni < 18) {
        PrezzoScontato =PrezzoBiglietto - ((PrezzoBiglietto/100) * 24.552);
        PrezzoScontato = arrotondaInEccesso(PrezzoScontato);
        console.log(PrezzoScontato);
        alert(PrezzoScontato);

    } else if (anni >= 65) {
        PrezzoScontato =PrezzoBiglietto - ((PrezzoBiglietto/100) * 37.893);
        PrezzoScontato = arrotondaInEccesso(PrezzoScontato);
        console.log(PrezzoScontato);
        alert(PrezzoScontato);
    } else {
        console.log(PrezzoBiglietto);
        alert(PrezzoBiglietto);
    }

});
