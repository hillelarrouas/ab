function init() {
    let day = reternday()

    fetch('/getdata', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            day
        })

    }).then(r => r.json())
        .then(d => {
            document.body.style.display = 'block'
            deta = d.deta[0]
            seconds1 = deta.timeLength * 60 - 1
            seconds2 = deta.timeLength * 60 - 1
            RoundCounter = deta.Roundsonthetable
            $(".textAmount").html(deta.baking)
            $(".textcosher").html(deta.cosher)
            $(".texttable").html(`${deta.Tables} שולחנות`)
            $(".textnumtable").html(deta.Roundsonthetable)
            $(".day").html(`משמרת ${deta.Type}`)
            $('.time1').html(deta.timeLength < 10 ? '0' + deta.timeLength + ':00' : deta.timeLength + ':00')
            $('.time2').html(deta.timeLength < 10 ? '0' + deta.timeLength + ':00' : deta.timeLength + ':00')
        })
}

let deta;
let seconds1 = 0
let RoundCounter = 0
let countdownTimer1;



$(document).ready(function () {
    $(".retern1").click(function () {

        if ($(".retern1").html() == 'הפעלה') {
            $(".retern1").html('כיבוי')


            RoundCounter++
            $(".textnumtable").html(RoundCounter)
            updating()


            function timer2() {
                let days = Math.floor(seconds1 / 24 / 60 / 60);
                let hours1 = Math.floor((seconds1) - (days * 86400));
                let hours = Math.floor(hours1 / 3600);
                let minutes1 = Math.floor((hours1) - (hours * 3600));
                let minutes = Math.floor(minutes1 / 60);
                let remainingseconds1 = seconds1 % 60;


                $('.time1').html(pad(minutes) + ":" + pad(remainingseconds1))
                if (seconds1 == 119) {
                    $("#music2subtlety").trigger('play');
                }
                if (seconds1 < 120) {
                    $('.time1').css('color', 'red')
                }
                if (seconds1 < 120 && seconds1 > 100 || seconds1 < 30) {
                    $("#music").trigger('play');
                }


                if (seconds1 <= 0) {
                    $(".retern1").click()
                } else {
                    seconds1--;
                }
            }
            countdownTimer1 = setInterval(timer2, 1000);
        }
        else {
            $(".retern1").html('הפעלה')
            seconds1 = deta.timeLength * 60 - 1
            $('.time1').css('color', 'black')
            $('.time1').html(deta.timeLength < 10 ? '0' + deta.timeLength + ':00' : deta.timeLength + ':00')
            clearInterval(countdownTimer1)
        }
    });
});


let seconds2 = 0
let countdownTimer2;
$(document).ready(function () {
    $(".retern2").click(function () {

        if ($(".retern2").html() == 'הפעלה') {
            $(".retern2").html('כיבוי')

            RoundCounter++
            $(".textnumtable").html(RoundCounter)
            updating()

            function timer2() {
                let days = Math.floor(seconds2 / 24 / 60 / 60);
                let hours2 = Math.floor((seconds2) - (days * 86400));
                let hours = Math.floor(hours2 / 3600);
                let minutes2 = Math.floor((hours2) - (hours * 3600));
                let minutes = Math.floor(minutes2 / 60);
                let remainingseconds2 = seconds2 % 60;

                $('.time2').html(pad(minutes) + ":" + pad(remainingseconds2))
                if (seconds2 == 119) {
                    $("#music2subtlety").trigger('play');
                }
                if (seconds2 < 120) {
                    $('.time2').css('color', 'red')
                }
                if (seconds2 < 117 && seconds2 > 100 || seconds2 < 30) {
                    $("#music").trigger('play');

                }


                if (seconds2 <= 0) {
                    $(".retern2").click()
                } else {
                    seconds2--;
                }
            }
            countdownTimer2 = setInterval(timer2, 1000);

        }
        else {
            $(".retern2").html('הפעלה')
            seconds2 = deta.timeLength * 60 - 1
            $('.time2').css('color', 'black')
            $('.time2').html(deta.timeLength < 10 ? '0' + deta.timeLength + ':00' : deta.timeLength + ':00')
            clearInterval(countdownTimer2)
        }
    });
});

function pad(n) {
    return (n < 10 ? "0" + n : n);
}



function reternday() {
    const Datetime = new Date().getHours()

    if (Datetime >= 6 && Datetime < 12) {
        return 'בוקר'
    }
    else if (Datetime >= 12 && Datetime < 18) {
        return 'צהריים'
    }
    else if (Datetime >= 18 && Datetime < 23) {
        return 'ערב'
    }
    else if (Datetime >= 23 || (Datetime >= 0 && Datetime < 6)) {
        return 'לילה'
    }
}


function updating() {
    let day = reternday()
    RoundCounter

    fetch('/oupdetRounds', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            day, RoundCounter
        })

    }).then(r => r.json())
        .then(d => {
            deta = d.deta[0]
            $(".textAmount").html(deta.baking)
            $(".textcosher").html(deta.cosher)
            $(".texttable").html(`${deta.Tables} שולחנות`)
            $(".textnumtable").html(deta.Roundsonthetable)
            $(".day").html(`משמרת ${deta.Type}`)
        })
}

function popupWindow(url, windowName, win, w, h) {
    const y = win.top.outerHeight / 2 + win.top.screenY - (h / 2);
    const x = win.top.outerWidth / 2 + win.top.screenX - (w / 2);
    return win.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
}

document.onkeypress = function (evt) {
    evt = evt || window.event;
    let charCode = evt.keyCode || evt.which;
    let charStr = String.fromCharCode(charCode);
    if (charStr == 1) {
        $(".retern1").click()
    }
    if (charStr == 3) {
        $(".retern2").click()
    }
};



setInterval(function () {
    let day = reternday()
    if (day !== deta.Type) {
        updating()
    }
}, 5000);

