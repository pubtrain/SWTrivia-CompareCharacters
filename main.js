'use strict';
const characterCardOne = document.getElementById('char-card1');
const characterCardTwo = document.getElementById('char-card2');
const submitBtn = document.getElementById('submitBtn');
const selectCharacter1 = document.getElementById('selectCharacter1');
const selectCharacter2 = document.getElementById('selectCharacter2');
const selectWrap1 = document.getElementById('select-wrap1');
const selectWrap2 = document.getElementById('select-wrap2');
const infoBubble1 = document.getElementById('infoBubble1');
const infoBubble2 = document.getElementById('infoBubble2');
let characterOne;
let characterTwo;

const diffButtons = (character) => {
  const diffBtns = document.querySelectorAll('#diffBtn');
  diffBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      let attribute = btn.getAttribute('data-id');
      if (character === characterOne) {
        checkerBtn(characterOne, characterTwo, attribute, btn);
      } else {
        checkerBtn(characterTwo, characterOne, attribute, btn);
      }
    });
  });
};

class Character {
  constructor(name, gender, height, mass, hairColor, who) {
    this.name = name;
    this.gender = gender;
    this.height = height;
    this.mass = mass;
    this.hairColor = hairColor;
    this.who = who;
    this.pictureUrl;

    if (name == 'Luke Skywalker') {
      this.pictureUrl = './img/Luke_skywalker.webp';
    } else if (name == 'Owen Lars') {
      this.pictureUrl = './img/OwenLars.webp';
    } else if (name == 'C-3PO') {
      this.pictureUrl = './img/C3po_bild.webp';
    } else if (name == 'R2-D2') {
      this.pictureUrl = './img/r2d2.webp';
    } else if (name == 'Darth Vader') {
      this.pictureUrl = './img/darth-vader-cool-600x375.jpeg';
    } else if (name == 'Leia Organa') {
      this.pictureUrl = './img/leia.jpeg';
    } else if (name == 'Beru Whitesun lars') {
      this.pictureUrl = './img/Beru_headshot2.webp';
    } else if (name == 'R5-D4') {
      this.pictureUrl = './img/R5-D4_Sideshow.webp';
    }
  }

  checkWeight(char) {
    let diffWeight = Math.floor(this.mass) - Math.floor(char.mass);
    if (Number(this.mass) > Number(char.mass)) {
      if (this == characterOne) {
        infoBubble1.innerHTML = `<p>I'm ${this.mass}kg, ${char.name} is ${char.mass}kg. Thats ${diffWeight}kg lower than me.</p>`;
      } else if (this == characterTwo) {
        infoBubble2.innerHTML = `<p>I'm ${this.mass}kg, and ${char.name} weigh ${char.mass}kg. Thats ${diffWeight}kg lighter.</p>`;
      }
    } else if (Number(this.mass) < Number(char.mass)) {
      if (this == characterOne) {
        infoBubble1.innerHTML = `<p>I weigh ${this.mass}kg, I'm so lightweight next to ${char.name}, that mountain has ${char.mass} kilos!</p>`;
      } else {
        infoBubble2.innerHTML = `<p>I'm only ${this.mass}kg, I feel like a leaf next to ${char.name}, he has ${char.mass} kilos!</p>`;
      }
    } else {
      if (this == characterOne) {
        infoBubble1.innerHTML = `<p>We're the same ${this.mass}kg!</p>`;
      } else {
        infoBubble2.innerHTML = `<p>We're the same ${this.mass}kg!</p>`;
      }
    }
  }

  checkGender(char) {
    if (this == characterOne) {
      if (this.gender == char.gender) {
        infoBubble1.innerHTML = `<p>
            Nice, ${char.name} and me is ${this.gender}
          </p>`;
      } else {
        infoBubble1.innerHTML = `<p>
            Pathetic ${char.gender}. I am a proud ${this.gender}!
          </p>`;
      }
    } else {
      if (this.gender == char.gender) {
        infoBubble2.innerHTML = `<p>
          Mighty ${char.name}, we share ${this.gender}.
          </p>`;
      } else {
        infoBubble2.innerHTML = `<p>
            Pathetic ${char.gender}. I am a proud ${this.gender}.
          </p>`;
      }
    }
  }

  checkHairColor(char) {
    if (this == characterOne) {
      if (this.hairColor === 'none' || this.hairColor === 'n/a') {
        infoBubble1.innerHTML = `<p>I hate my ${this.hairColor} hair, I would like to have ${char.name}s hair.</p>`;
      } else if (this.hairColor === char.hairColor) {
        infoBubble1.innerHTML = `<p>Me and ${char.name} share the same perfect color.</p>`;
      } else {
        infoBubble1.innerHTML = `<p>I love my ${this.hairColor} hair, next to ${char.name}, i despise that ${char.hairColor} color.</p>`;
      }
    } else {
      if (this.hairColor === 'none' || this.hairColor === 'n/a') {
        infoBubble2.innerHTML = `<p>I don't need hair, ${char.hairColor} is great if you're ${char.name}</p>`;
      } else if (this.hairColor == char.hairColor) {
        infoBubble2.innerHTML = `<p>Me and ${char.name} uses the same shampoo obviously!</p>`;
      } else {
        infoBubble2.innerHTML = `<p>I love my ${this.hairColor} hair, I hate ${char.name} with that disgusting ${char.hairColor} hair!</p>`;
      }
    }
  }

  checkLength(char) {
    let diffLength = Math.floor(this.height) - Math.floor(char.height);
    if (Number(this.height) > Number(char.height)) {
      if (this == characterOne) {
        infoBubble1.innerHTML = `<p>I'm tall with my ${this.height}cm, and ${char.name} is ${char.height}cm. Thats ${diffLength}cm closer to an ant than me.</p>`;
      } else if (this == characterTwo) {
        infoBubble2.innerHTML = `<p>I'm ${this.height}cm, and ${char.name} is ${char.height}cm. Thats ${diffLength}cm closer to an ant than me.</p>`;
      }
    } else if (Number(this.height) < Number(char.height)) {
      if (this == characterOne) {
        infoBubble1.innerHTML = `<p>I'm close to pavementcoins with my ${this.height}cm. I'm sure that ${char.name} couldn't see them with their ${char.height}cm.</p>`;
      } else {
        infoBubble2.innerHTML = `<p>I'm close to pavementcoins with my ${this.height}cm. I'm sure that ${char.name} couldn't see them with their ${char.height}cm.</p>`;
      }
    } else {
      if (this == characterOne) {
        infoBubble1.innerHTML = `<p>We're both tall enough.</p>`;
      } else {
        infoBubble2.innerHTML = `<p>
              We're both tall enough.</p>`;
      }
    }
  }
}

let characterFetch = async (character) => {
  let response = await fetch(`https://swapi.dev/api/people/${character}`);
  let json = response.json();
  return json;
};

let buildCharacterCard = (character) => `
<div class="character-card">
<div class="character-info">
<h2>${character.name}</h2>
<img src="${character.pictureUrl}">
</div>
<ul class="generalInfo">
          <li>Gender: ${character.gender}</li>
          <li>Height: ${character.height} cm</li>
          <li>Mass: ${character.mass} kg</li>
          <li>Hair color: ${character.hairColor}</li>
        </ul>
<div class="character-buttons">
    <button id="diffBtn" class="weight" data-id="${character.who}">Weight</button>
    <button id="diffBtn" class="length" data-id="${character.who}">Length</button>
    <button id="diffBtn" class="gender" data-id="${character.who}">Gender</button>
    <button id="diffBtn" class="hairColor" data-id="${character.who}">Hair Color</button>
</div>`;

submitBtn.addEventListener('click', () => {
  if (selectCharacter1.value === 'null' || selectCharacter2.value === 'null') {
    alert('Pick two characters');
  } else if (selectCharacter1.value === selectCharacter2.value) {
    alert('There is no need to compare a character with itself!');
  } else {
    characterFetch(selectCharacter1.value).then((data) => {
      characterOne = new Character(
        data.name,
        data.gender,
        data.height,
        data.mass,
        data.hair_color,
        selectCharacter1.value
      );
      characterCardOne.innerHTML = buildCharacterCard(characterOne);
      checkerBtn(characterOne);
      diffButtons(characterOne);
    });
    characterFetch(selectCharacter2.value).then((data) => {
      characterTwo = new Character(
        data.name,
        data.gender,
        data.height,
        data.mass,
        data.hair_color,
        selectCharacter2.value
      );
      characterCardTwo.innerHTML = buildCharacterCard(characterTwo);
      checkerBtn(characterTwo);
      diffButtons(characterTwo);
    });
    submitBtn.innerText = 'Choose again, you may';
  }
});

let checkerBtn = (character, characterTwo, attribute, btn) => {
  if (character.who == attribute) {
    if (btn.className == 'weight') {
      character.checkWeight(characterTwo);
    } else if (btn.className == 'length') {
      character.checkLength(characterTwo);
    } else if (btn.className == 'hairColor') {
      character.checkHairColor(characterTwo);
    } else if (btn.className == 'gender') {
      character.checkGender(characterTwo);
    }
  }
};
// diffButtons();
