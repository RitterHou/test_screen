var COLORS = [
    {
      name: 'white',
      backgroundColor: 'white',
      foregroundColor: 'black',
    },
    {
      name: 'red',
      backgroundColor: 'red',
      foregroundColor: 'white',
    },
    {
      name: 'green',
      backgroundColor: 'green',
      foregroundColor: 'white',
    },
    {
      name: 'blue',
      backgroundColor: 'blue',
      foregroundColor: 'white',
    },
    {
      name: 'cyan',
      backgroundColor: 'cyan',
      foregroundColor: 'black',
    },
    {
      name: 'yellow',
      backgroundColor: 'yellow',
      foregroundColor: 'black',
    },
    {
      name: 'magenta',
      backgroundColor: 'magenta',
      foregroundColor: 'black',
    },
    {
      name: 'black',
      backgroundColor: 'black',
      foregroundColor: 'white',
    }
];
function readyToPlay() {
    window.setTimeout(startToPlay, 1500);
}
function startToPlay() {
    var divs = document.querySelectorAll("div");
    divs[0].setAttribute('style', 'display: none;');
    divs[6].setAttribute('style', 'display: block;');
    renderNextColor();
}
var colorIndex = 0;
function renderNextColor() {
    colorIndex = (colorIndex + 1) % COLORS.length;
    document.body.style.backgroundColor = COLORS[colorIndex].backgroundColor;
    document.body.style.color = COLORS[colorIndex].foregroundColor;

    window.setTimeout(renderNextColor, 20);
}
