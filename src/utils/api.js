import { AsyncStorage } from 'react-native';
import sampleData from './sampleData';

const STORAGE_KEY = 'QuickFlash:decks'

AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(sampleData));


export const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => JSON.parse(results))
    .catch(err => console.log("problem getting decks", err.message));
}

export const getDeck = (deckName) => {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(results => {
      let decks = JSON.parse(results);
      Object.values(decks).filter(deck => deck.name === deckName)
    })
    .catch(err => console.log("problem getting deck", err.message));
}


export const addCard = ({ deckName, card }) => {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(results => {
      let decks = JSON.parse(results);
      let currentDeck = Object.values(decks).filter(deck => deck.name === deckName);
      currentDeck.qa.push(card);
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
    })
    .catch(err => console.log("problem adding card", err.message));
}

// export const addDeck = (deckName) => {
//   return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
//     [deckName]: { name: deckName, qa: [] } 
//   }))
// }

export const addDeck = (deckName) => {
  return AsyncStorage.getItem(STORAGE_KEY)
  .then((results) => {
    let decks = JSON.parse(results);
    let newDecks = {
      ...decks,
      ...{ [deckName]: { name: deckName, qa: [] } },
    };
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newDecks));
  })
  .catch(err => console.log("problem adding deck", err.message));
}

// additional functionality
// export const deleteCard = () => {

// }

// additional functionality
// export const deleteDeck = (deckName) => {

// }
