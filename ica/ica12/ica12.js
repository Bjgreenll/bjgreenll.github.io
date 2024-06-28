const newQuoteButton = document.getElementById('js-new-quote');
const answerButton = document.getElementById('js-answer');

newQuoteButton.addEventListener('click', getQuote);
answerButton.addEventListener('click', showAnswer);
function getQuote() {
  console.log("New quote button clicked!");

  const apiEndpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
  fetch(apiEndpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      displayQuote(data.question);
      displayAnswer(data.answer);
    })
    .catch(error => {
      console.error('Fetch error:', error);
      alert('Failed to fetch a new quote.');
    });
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

function displayAnswer(answer) {
  const answerText = document.querySelector('#js-answer-text');
  answerText.textContent = answer;
  answerText.style.display="none";
}
function showAnswer() {
  const answerText = document.querySelector('#js-answer-text');
  answerText.style.display="block";
}

document.addEventListener('DOMContentLoaded', getQuote);
