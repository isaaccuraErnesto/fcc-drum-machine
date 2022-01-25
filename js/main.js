const keys = [
  113, 81, 119, 87, 101, 69, 97, 65, 115, 83, 100, 68, 122, 90, 120, 88, 99, 67,
];
const padData = [
  {
    id: 'Heater-1',
    lowerCaseKeyCode: 113,
    upperCaseKeyCode: 81,
    content: 'Q',
    audioId: 'Q',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    id: 'Heater-2',
    lowerCaseKeyCode: 119,
    upperCaseKeyCode: 87,
    content: 'W',
    audioId: 'W',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },
  {
    id: 'Heater-3',
    lowerCaseKeyCode: 101,
    upperCaseKeyCode: 69,
    content: 'E',
    audioId: 'E',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    id: 'Heater-4',
    lowerCaseKeyCode: 97,
    upperCaseKeyCode: 65,
    content: 'A',
    audioId: 'A',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    id: 'Heater-6',
    lowerCaseKeyCode: 115,
    upperCaseKeyCode: 83,
    content: 'S',
    audioId: 'S',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    id: 'Open-HH',
    lowerCaseKeyCode: 100,
    upperCaseKeyCode: 68,
    content: 'D',
    audioId: 'D',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    id: `Kick-n'-Hat`,
    lowerCaseKeyCode: 122,
    upperCaseKeyCode: 90,
    content: 'Z',
    audioId: 'Z',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    id: 'Kick',
    lowerCaseKeyCode: 120,
    upperCaseKeyCode: 88,
    content: 'X',
    audioId: 'X',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    id: 'Closed-HH',
    lowerCaseKeyCode: 99,
    upperCaseKeyCode: 67,
    content: 'C',
    audioId: 'C',
    audioSrc: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];
$(document).ready(() => {
  padData.forEach((x, idx) => {
    $('#keys').append(
      `<li class='drum-pad' id=${x.id} pos=${idx + 1}>
            <audio class='clip' id=${x.audioId} src=${x.audioSrc}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>
            ${x.content}
        </li>`
    );
  });

  $('.drum-pad').on('click', (e) => {
    const clickedPad = e.currentTarget.children[e.currentTarget.innerText];
    clickedPad.play();
    $('#display').html(e.currentTarget.id);
  });

  $(document).keypress((e) => {
    const pressedKey = e.originalEvent.keyCode;
    if (keys.includes(pressedKey)) {
      const pressedPad = $(`#${e.originalEvent.key.toUpperCase()}`).parent();
      pressedPad[0].click();
      if (pressedPad.attr('pos') % 2 === 0) {
        pressedPad.addClass('even-pad-clicked');
        setTimeout(() => pressedPad.removeClass('even-pad-clicked'), 100);
      } else {
        pressedPad.addClass('odd-pad-clicked');
        setTimeout(() => pressedPad.removeClass('odd-pad-clicked'), 100);
      }
    }
  });
});
