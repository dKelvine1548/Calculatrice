const buttons = [...document.querySelectorAll('.button')];
const listkeycode = buttons.map(num => num.dataset.key);
const ecran = document.querySelector('ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer (valeur);
})

document.addEventListener('click', (e)=>{
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

const calculer = (valeur) =>{
    if(listkeycode.includes(valeur)){
        switch(valeur){
            case'01':
               ecran.textContent ="";
               break;
            case "19":
               const calcul = eval (ecran.textContent);
               ecran.textContent = calcul;
            break;
            default :
            const indexKeycode = listkeycode.indexOf(valeur)
            const num = buttons[indexKeycode];
            ecran.textContent += num.innerHTML;

        }
    }
}