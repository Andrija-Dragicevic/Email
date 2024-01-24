/* function pokreniMe(dugme) {     //ovo (dugme) je povezano sa onim (this) koje se nalazi u button, i povezuje taj button sa klikom
    let nazivDugmeta = dugme.innerText;
    console.log(dugme);

    let message = document.querySelector('#klikutoDugme');
    message.innerText = nazivDugmeta + ' ' + klasaDugmeta;
}
*/
function validacija() {
    let input = document.querySelector('#email');
    let value = input.value;

    //provjera sadrzi li @ i .
    if(value.includes('@') && value.includes('.')) {

    let pozicijaAt = value.indexOf('@');    //uzimamo poziciju @
    let pozicijaTacka = value.indexOf('.');

    let izmendjuAtiTcka = value.substring(pozicijaAt +1, pozicijaTacka); //uzima vrijednost izmedju pozicija, a ovo +1 je od pozicijaAt

    if(izmendjuAtiTcka.length > 0) {     
        let prijeAt = value.substring(0, pozicijaAt);
        if (prijeAt.length > 4) {
            let posleTacke = value.substring(pozicijaTacka + 1, value.length);
            if(posleTacke.length > 2){
                console.log('validan mejl');
            } else {
                console.log('Posle . nije okej')
            }
        } else {
            console.log('duzina prije at nije dobra');
        }
    } else {
        console.log('nije validan');
    }
} else {
    console.log('ne sadrzi @ i .');
}
}