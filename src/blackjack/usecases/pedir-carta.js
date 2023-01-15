/**
 * 
 * @param {Array<String>} deckActual Es un arreglo de string
 * @returns {Array<String>} Retorna una carta
 */
export const pedirCarta = (deckActual) => {

    if ( deckActual.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deckActual.pop();
    return carta;
}



