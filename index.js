'use strict'

async function getActivity() {
  const response = await fetch('https://www.boredapi.com/api/activity/');
  const data = await response.json();

  return data;
}

async function createActivityCards() {
  try {
    const activities = await Promise.all([
      getActivity(),
      getActivity(),
      getActivity(),
    ]);
  
    const cardsWrapper = document.querySelector('.cards-wrapper');
    cardsWrapper.innerHTML = '';
  
    for (const activity of activities) {
      const cardDiv = document.createElement('div');
      cardDiv.innerText = activity.activity;
      cardDiv.classList.add('card');
      cardsWrapper.append(cardDiv);
    }
  } catch (error) {
    throw new Error('Error: ' + error);
  }
}

document.querySelector('button').addEventListener('click', createActivityCards);

createActivityCards();