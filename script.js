const matrixContainer = document.getElementById("matrixContainer");
const ctx = matrixContainer.getContext("2d");

const string = 'クタハムヰアケチヒモヲィコッャンイツヤウゥサフュヵテユヶェショワエトヘヨォスラヱオナリカセニホル・ヌレーキソネロヽノマヮミ田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑呂१२३४५६७८९अरतयपसदगहजकलङषचवबनमआथय़फशधघझखळक्षछभणऒ੧੨੩੪੫੬੭੮੯੦ੳਅਰਤਯਪਸਦਗਹਜਕਲਙੜਚਵਬਨਮੲਥਫਸ਼ਧਘਝਖਲ਼ੜ੍ਹਛਭਣQWERTZUIOPŠĐASDFGHJKLČĆŽYXCVBNMqwertzuiopšđasdfghjklčćžyxcvbnm|€\÷×¤ßŁł[]@{}§,.-¨!"#$%&/()=*?~ˇ^˘°˛`˙´˝¨+0123456789<>,;.:-_';
const characters = Array.from(string);
const fontSize = 14;

// full screen
matrixContainer.width = window.innerWidth;
matrixContainer.height = window.innerHeight;

const columns = matrixContainer.width/fontSize;

// an array of characters - one per column
let items = [];
// x below is the x coordinate
// 1 = y-coordinate of the drop (same for every character initially)
for (let x = 0; x < columns; x++) {
    items[x] = 1;
}

// Durstenfeld shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function getColor() {
    return "rgba(" + moment().format('HH') + ","
                + moment().format('mm') + ","
                + moment().format('ss')  + ", 0.05)";
}

function getColorHex() {
    return "#" + moment().format('HHmmss');
}

function draw() {
    shuffleArray(characters);
    ctx.fillStyle = getColor();
    ctx.fillRect(0, 0, matrixContainer.width, matrixContainer.height);
    ctx.fillStyle = "#008000"; 
    ctx.font = fontSize + "px arial";
    for (let i = 0; i < items.length; i++) {
        let text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, items[i] * fontSize);
        // sending the character back to the top randomly after it has crossed the screen
        // adding randomness to the reset to make the characters scattered on the Y axis
        if (items[i] * fontSize > matrixContainer.height && Math.random() > 0.975)
            items[i] = 0;
        items[i]++;
    }
}
setInterval(draw, 33);

