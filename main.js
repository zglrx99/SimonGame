var strictMode = false;
var computerArr = [];
var userArr = [];
var MAS_LENGTH;
var TEMP;
var SHOW = false;
var currentTime;

$(document).ready(function () {

    $('#startGame').click(function () {
        if ($('input:checked').val() == 'on') {
            strictMode = true;
        }
        $('#starter-cont').addClass('hide');
        $('.jumbotron').removeClass('hide');
        $('#gameMenu').removeClass('hide');
        TEMP = 'You not shall pass';
        computerArr = [];
        userArr = [];
        SHOW = false;
        generateNewStep();
    });

    $('#btn1').click(function () {
        // $('#btn1_audio').prop('autoplay', true);
        userStep(1);
        if (userArr.length == computerArr.length) {
            checkArrays();
            if (userArr.length == computerArr.length) {
                generateNewStep();
            } else if (strictMode == false) {
                $('#sayError').removeClass('hide');
                setShow();
            }
        }
    });

    $('#btn2').click(function () {
        userStep(2);
        if (userArr.length == computerArr.length) {
            checkArrays();
            if (userArr.length == computerArr.length) {
                generateNewStep();
            } else if (strictMode == false) {
                $('#sayError').removeClass('hide');
                currentTime = new Date();
                MAS_LENGTH = computerArr.length - 1;
                TEMP = '';
                setShow();
            }
        }
    });

    $('#btn3').click(function () {
        userStep(3);
        if (userArr.length == computerArr.length) {
            checkArrays();
            if (userArr.length == computerArr.length) {
                generateNewStep();
            } else if (strictMode == false) {
                $('#sayError').removeClass('hide');
                currentTime = new Date();
                MAS_LENGTH = computerArr.length - 1;
                TEMP = '';
                setShow();
            }
        }
    });

    $('#btn4').click(function () {
        userStep(4);
        if (userArr.length == computerArr.length) {
            checkArrays();
            if (userArr.length == computerArr.length) {
                generateNewStep();
            } else if (strictMode == false) {
                $('#sayError').removeClass('hide');
                currentTime = new Date();
                MAS_LENGTH = computerArr.length - 1;
                TEMP = '';
                setShow();
            }
        }
    });

    $('#btnStop').click(function () {
        if (SHOW == false) {
            SHOW = false;
            userArr = [];
            computerArr = [];
            $('#starter-cont').removeClass('hide');
            $('.jumbotron').addClass('hide');
            $('#gameMenu').addClass('hide');
            $('#infoResult').removeClass('hide');
            $('#infoResult').text('Your final score is ' + (Number($('#counter').text()) - 1));
        }
    });
});

function setShow() {
    currentTime = new Date();
    MAS_LENGTH = computerArr.length - 1;
    TEMP = 'You not shall pass';
    SHOW = true;
    showing();
}

function userStep(element) {
    if (SHOW == false) {
        userArr.push(element);
        switch (element) {
            case 1:
                var audio = new Audio('http://static1.grsites.com/archive/sounds/misc/misc001.mp3');
                audio.play();
                break;
            case 2:
                var audio = new Audio('http://static1.grsites.com/archive/sounds/misc/misc008.mp3');
                audio.play();
                break;
            case 3:
                var audio = new Audio('http://static1.grsites.com/archive/sounds/misc/misc011.mp3');
                audio.play();
                break;
            case 4:
                var audio = new Audio('http://static1.grsites.com/archive/sounds/misc/misc285.mp3');
                audio.play();
                break;
            default:
                break;
        }
    }
}

function checkArrays() {
    userArr = userArr.reverse();
    for (var i = 0; i < computerArr.length; i++) {
        if (computerArr[i] != userArr[i]) {
            if (strictMode == true) {
                SHOW = false;
                userArr = [];
                computerArr = [];
                $('#starter-cont').removeClass('hide');
                $('.jumbotron').addClass('hide');
                $('#gameMenu').addClass('hide');
                $('#infoResult').removeClass('hide');
                $('#infoResult').text('Your final score is ' + (Number($('#counter').text()) - 1));
                break;
            } else {
                userArr = [];
                break;
            }
        }
    }
}

function generateNewStep() {
    userArr = [];
    currentTime = new Date();
    computerArr = computerArr.reverse();
    computerArr.push(Math.floor(Math.random() * 4 + 1));
    $('#counter').text(computerArr.length);
    MAS_LENGTH = computerArr.length - 1;
    computerArr = computerArr.reverse();
    SHOW = true;
    showing();
}

function showing() {
    window.setInterval(function () {
        var newTime = new Date();
        if (SHOW == true && newTime - currentTime > 1000) {
            var but = '#btn' + computerArr[MAS_LENGTH];
            if (MAS_LENGTH > -1) {
                if (TEMP == MAS_LENGTH) {
                    $(but).addClass('btn-primary')
                    MAS_LENGTH -= 1;
                    currentTime = new Date();
                } else {
                    switch (computerArr[MAS_LENGTH]) {
                        case 1:
                            var audio = new Audio('http://static1.grsites.com/archive/sounds/misc/misc001.mp3');
                            audio.play();
                            break;
                        case 2:
                            var audio = new Audio('http://static1.grsites.com/archive/sounds/misc/misc008.mp3');
                            audio.play();
                            break;
                        case 3:
                            var audio = new Audio('http://static1.grsites.com/archive/sounds/misc/misc011.mp3');
                            audio.play();
                            break;
                        case 4:
                            var audio = new Audio('http://static1.grsites.com/archive/sounds/misc/misc285.mp3');
                            audio.play();
                            break;
                        default:
                            break;
                    }
                    $(but).removeClass('btn-primary');
                    TEMP = MAS_LENGTH;
                    currentTime = new Date()
                }
            } else {
                SHOW = false;
                $('#sayError').addClass('hide');

            }
        }
    }, 5);
}