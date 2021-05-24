import styles from '../styles/Home.module.css'
import React from 'react'
import funCards from '../data/funcards'

function generateRandomIndex(min: number, max: number) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function getRandomCard() {
    return funCards[generateRandomIndex(0, funCards.length-1)]
}


function Card() {
    var card = getRandomCard()
    return (
        <div>
            <h2 className={styles.questionType}>
                {card.type}
            </h2>

            <h1 className={styles.question}>
                {card.question}
            </h1>
        </div>
    )
}

export default Card