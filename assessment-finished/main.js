const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '気温 華氏40度で外は寒かった。 :insertx: は出かけた。 :inserty: に着いた。:insertz:。 体重110ポンドの:insertx:は驚いたが、Bobは驚かなかった。:inserty:ではよくあることだった。';
const insertX = ['アリエル', 'ミッフィー', 'サンタクロース'];
const insertY = ['USJ', '大分', '上野動物園'];
const insertZ = ['雪が降っていた', '渋滞していた', '雨が降っていた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(110/2.2046)} kg`;
    const temperature = `摂氏${Math.round((30-32) * 5 / 9)} `;
    newStory = newStory.replace('華氏40', temperature);
    newStory = newStory.replace('110ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
