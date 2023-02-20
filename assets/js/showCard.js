// const featureSelection = document.querySelectorAll(".content-title");

export default function showCard(indexFeature) {
    const cardsHidden = document.querySelectorAll(".card-feature");
    const cardSelected = cardsHidden[indexFeature];

    cardsHidden.forEach(card => {
        if(card == cardSelected) {
            card.classList.remove("card-hidden");
        } else {
            card.classList.add("card-hidden");
        }
    })
    
    
}