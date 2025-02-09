function choose(option) {
    const title = document.getElementById('sceneTitle');
    const text = document.getElementById('sceneText');
    const choices = document.getElementById('choices');

    if (option === 1) {
      title.innerText = 'The Enchanted Tree';
      text.innerText = 'You walk along the forest path and find a gigantic tree with doors and windows. An elf waves at you from a branch.';
      choices.innerHTML = '<button onclick="choose(4)">Knock on the tree door</button><button onclick="choose(5)">Climb the ladder to the treehouse</button><button onclick="choose(6)">Sing a song with the birds</button>';
    } else if (option === 2) {
      title.innerText = 'The Sparkling River';
      text.innerText = 'You follow the river and discover it\'s made of lemonade! Ducks with tiny hats are having a tea party on the bank.';
      choices.innerHTML = '<button onclick="choose(7)">Join the tea party</button><button onclick="choose(8)">Build a lemonade boat</button><button onclick="choose(9)">Have a hat fashion show</button>';
    } else if (option === 3) {
      title.innerText = 'Ride with Dragons';
      text.innerText = 'The friendly dragon takes you high above the clouds where you see castles floating in the sky.';
      choices.innerHTML = '<button onclick="choose(10)">Visit a cloud castle</button><button onclick="choose(11)">Slide down a rainbow</button><button onclick="choose(12)">Have a picnic on a cloud</button>';
    } else if (option === 4) {
      title.innerText = 'Elf Adventures';
      text.innerText = 'The elf invites you in for cookies baked with magic sprinkles that make you giggle endlessly.';
      choices.innerHTML = '<button onclick="restart()">Play Again</button>';
    } else if (option === 5) {
      title.innerText = 'Treehouse Fun';
      text.innerText = 'Up in the treehouse, you discover a secret room filled with toys that come to life!';
      choices.innerHTML = '<button onclick="restart()">Play Again</button>';
    } else if (option === 6) {
      title.innerText = 'Melodies of the Forest';
      text.innerText = 'Your song brings out more animals who dance and sing along, creating a joyful forest choir.';
      choices.innerHTML = '<button onclick="restart()">Play Again</button>';
    } else if (option === 7) {
      title.innerText = 'Tea Time';
      text.innerText = 'You enjoy delicious treats and funny stories with the ducks, laughing until your belly hurts.';
      choices.innerHTML = '<button onclick="restart()">Play Again</button>';
    } else if (option === 8) {
      title.innerText = 'Lemonade Voyage';
      text.innerText = 'You sail down the river, waving to friendly fish and exploring hidden caves sparkling with crystals.';
      choices.innerHTML = '<button onclick="restart()">Play Again</button>';
    } else if (option === 9) {
      title.innerText = 'Hat Show Extravaganza';
      text.innerText = 'You create silly hats from flowers and leaves, and everyone votes yours the wackiest of all!';
      choices.innerHTML = '<button onclick="restart()">Play Again</button>';
    } else if (option === 10) {
      title.innerText = 'Castle in the Sky';
      text.innerText = 'Inside the cloud castle, you meet a kind queen who knights you as a protector of dreams.';
      choices.innerHTML = '<button onclick="restart()">Play Again</button>';
    } else if (option === 11) {
      title.innerText = 'Rainbow Slide';
      text.innerText = 'Sliding down the rainbow, you leave a trail of sparkles and land softly in a field of flowers.';
      choices.innerHTML = '<button onclick="restart()">Play Again</button>';
    } else if (option === 12) {
      title.innerText = 'Picnic Among the Clouds';
      text.innerText = 'You share snacks with birds who tell you stories of their travels around the world.';
      choices.innerHTML = '<button onclick="restart()">Play Again</button>';
    }
  }

  function restart() {
    location.reload();
  }
