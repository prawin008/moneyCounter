
// id's for inputs to get value and upadate the labels
// with the result amount.
var twoTd = document.getElementById('twoTd');
var fiveHd = document.getElementById('fiveHd');
var twoHd = document.getElementById('twoHd');
var oneHd = document.getElementById('oneHd');
var fifty = document.getElementById('fifty');
var twenty = document.getElementById('twenty');
var ten = document.getElementById('ten');
var five = document.getElementById('five');
var two = document.getElementById('two');
var one = document.getElementById('one');

// id's for labels which output total amount.
var reTwoTd = document.getElementById('reTwoTd');
var reFiveHd = document.getElementById('reFiveHd');
var reTwoHd = document.getElementById('reTwoHd');
var reOneHd = document.getElementById('reOneHd');
var reFifty = document.getElementById('reFifty');
var reTwenty = document.getElementById('reTwenty');
var reTen = document.getElementById('reTen');
var reFive = document.getElementById('reFive');
var reTwo = document.getElementById('reTwo');
var reOne = document.getElementById('reOne');

// id's for total amount and total number of notes.
var totalAmount = document.getElementById('total');
var totalNotes = document.getElementById('totalNotes');

var resetBtn = document.getElementById('reset');

// a rupee symbol stored as a string.
var rupeeSymbol = ' &#8377;';

// this variable are used for storing input values independantly.
var a0 = 0, a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0, a7 = 0, a8 = 0, a9 = 0;

// this fuction checks total inputs and limit to only
// five inputs. So, you cannot enter more then five numbers
// in a input.
var maxVal = function (id) {
    if (id.value > 9999) {
        id.value = id.value.slice(0, 5);
    }
}

//This function gets the input value and adds to the respective
// label showing total amount of the given denomination.
var setResult = function (reId, id, note = 0) {
    reId.innerHTML = id.value * note + rupeeSymbol;
}

//this function checks if an input value is empty and sets '0'
//to its given variable from above var's, finally if the input
//is not empty it will add value to the total Notes and total Amount
var totalA = function (id) {
    switch (id) {
        case twoTd:
            if (twoTd.value == '') {
                a0 = 0;
            } else {
                a0 = parseInt(twoTd.value);
            }
            break;

        case fiveHd:
            if (fiveHd.value == '') {
                a1 = 0;
            } else {
                a1 = parseInt(fiveHd.value);
            }
            break;

        case twoHd:
            if (twoHd.value == '') {
                a2 = 0
            } else {
                a2 = parseInt(twoHd.value);
            }
            break;

        case oneHd:
            if (oneHd.value == '') {
                a3 = 0;
            } else {
                a3 = parseInt(oneHd.value);
            } break;

        case fifty:
            if (fifty.value == '') {
                a4 = 0;
            } else {
                a4 = parseInt(fifty.value);
            } break;

        case twenty:
            if (twenty.value == '') {
                a5 = 0;
            } else {
                a5 = parseInt(twenty.value);
            } break;

        case ten:
            if(ten.value == '') {
                a6 = 0;
            } else {
                a6 = parseInt(ten.value);
            } break;

        case five:
            if(five.value == '') {
                a7 = 0;
            } else {
                a7 = parseInt(five.value);
            } break;

        case two:
            if(two.value == '') {
                a8 = 0;
            } else {
                a8 = parseInt(two.value);
            } break;

        case one:
            if(one.value == '') {
                a9 = 0;
            } else {
                a9 = parseInt(one.value);
            }
    }
    sumAllNotes = a0 + a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9;
    sumOfAmt = a0 * 2000 + a1 * 500 + a2 * 200 + a3 * 100 + a4 * 50 + a5 * 20 + a6 * 10 + a7 * 5 + a8 * 2 + a9;
    
    totalNotes.innerHTML = 'Total Notes : ' + sumAllNotes;
    totalAmount.innerHTML = 'Total Amount : ' + sumOfAmt;
}

//below all are input fuction nothing much say about this.
//but everything starts from here.
twoTd.oninput = function () {
    maxVal(twoTd);
    setResult(reTwoTd, twoTd, 2000);
    totalA(twoTd);
}

fiveHd.oninput = function () {
    maxVal(fiveHd);
    setResult(reFiveHd, fiveHd, 500);
    totalA(fiveHd);
}

twoHd.oninput = function () {
    maxVal(twoHd);
    setResult(reTwoHd, twoHd, 200);
    totalA(twoHd);


}

oneHd.oninput = function () {
    maxVal(oneHd);
    setResult(reOneHd, oneHd, 100);
    totalA(oneHd);
}

fifty.oninput = function () {
    maxVal(fifty);
    setResult(reFifty, fifty, 50);
    totalA(fifty);
}

twenty.oninput = function () {
    maxVal(twenty);
    setResult(reTwenty, twenty, 20);
    totalA(twenty);
}

ten.oninput = function () {
    maxVal(ten);
    setResult(reTen, ten, 10);
    totalA(ten);
}

five.oninput = function () {
    maxVal(five);
    setResult(reFive, five, 5);
    totalA(five);
}

two.oninput = function () {
    maxVal(two);
    setResult(reTwo, two, 2);
    totalA(two);
}

one.oninput = function () {
    maxVal(one);
    setResult(reOne, one, 1);
    totalA(one);
}

// this it for reset button this will clear all inputs,
//stored values, labels set to default.
resetBtn.onclick = function () {
    document.getElementById('twoTd').value = '';
    document.getElementById('fiveHd').value = '';
    document.getElementById('twoHd').value = '';
    document.getElementById('oneHd').value = '';
    document.getElementById('fifty').value = '';
    document.getElementById('twenty').value = '';
    document.getElementById('ten').value = '';
    document.getElementById('five').value = '';
    document.getElementById('two').value = '';
    document.getElementById('one').value = '';

    twoTd.oninput();
    fiveHd.oninput();
    twoHd.oninput();
    oneHd.oninput();
    fifty.oninput();
    twenty.oninput();
    ten.oninput();
    five.oninput();
    two.oninput();
    one.oninput();

    a0 = 0, a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0, a7 = 0, a8 = 0, a9 = 0;
    totalA();
}



