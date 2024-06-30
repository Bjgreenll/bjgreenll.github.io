const newQuoteButton = document.getElementById('js-new-quote');

newQuoteButton.addEventListener('click', getQuote);

function getQuote() {
  console.log("New quote button clicked!");

  const apiEndpoint = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
  fetch(apiEndpoint, {headers:{'X-Api-Key':'aZiBzoTLnM2fQ3lqCh2loA==Tv9hzWTuBoXkumGu'}})
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      displayQuote(data[0].quote);
      displayAnswer(data[0].author);
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
  const answerText = document.querySelector('#js-author-text');
  answerText.textContent = answer;
  
}

document.addEventListener('DOMContentLoaded', getQuote);
