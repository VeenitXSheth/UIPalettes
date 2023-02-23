const generateBtn = document.querySelector('.generate');
let gradient = document.querySelector('.gradient');
let colorDisplay = document.querySelector('.display-color-one');
let colorHex = document.querySelector('.color-one');

const allBtn = document.querySelector('.all')

allBtn.addEventListener('click', function() {
    location.href = 'https://www.w3schools.com/tags/ref_colornames.asp'
})

function generate() {
    console.log('generating')

    const colorOne = ['aliceblue', 'antiquewhite', 'aqua',
    'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue',
    'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral',
    'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan',
    'darkgoldenrod', 'darkgray', 'darkgreen', 'darkkhaki', 'darkmagenta', 
    'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen',
    'darkslateblue', 'darkslategray', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue',
    'dimgray', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro',
    'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'honeydew', 'hotpink',
    'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen',
    'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgray', 'lightgreen',
    'lightpink', 'lightseagreen', 'lightskyblue', 'maroon', 'magenta', 'mediumpurple'];

    const randomColor = colorOne[Math.floor(Math.random() * colorOne.length)];

    gradient.style.background = randomColor;
    colorDisplay.style.background = randomColor;
    colorHex.innerText = randomColor;
}

generateBtn.addEventListener('click', function() {
    generate();
})