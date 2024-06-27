const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'Why did the chicken Cross the road, to fight :insertx: . When he got done he went to :inserty:, he stared in horror for a few moments, then :insertz:. after he saw kids eat a whole bucket of popcorn chicken, a duck started laughing at him but he wasnt upset because — :insertx: was waiting for the a new menu item , and he was hungry that day.';
const insertX = ['Kernel Sanders ',  'peter griffin ', 'wong at the city wok'];
const insertY = ['popeyes', 'Disneyland', 'the White House'];
const insertZ = ['self detonated', 'walked into the nearest raisin canes', 'tried to fly away and was immediatly hit by a bus'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

 
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll(':insertx:', name);
  }
  else
  {
    newStory = newStory.replaceAll(':insertx:',xItem);
  }

  

  story.textContent = newStory;
  story.style.visibility = 'visible';
}