let radio;

function Typeradio(e) {
    $(".hoverflwh").css('height', 'auto')

    const Type = e.target.value;
    radio = Type
    $('.titelcardinput').html(`ניהול טיימר - ${radio}`)

    fetch('/gettyperadio', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Type
        })
    }).then(res => res.json())
        .then(deta => {
            $("#timeLength").val(deta.deta[0].timeLength)
            $("#cosher").val(deta.deta[0].cosher)
            $("#Tables").val(deta.deta[0].Tables)
            $("#baking").val(deta.deta[0].baking)
        })
}

$(document).ready(function () {
    $(".butoonsubmit").click(function () {


        const timeLength = $("#timeLength").val()
        const cosher = $("#cosher").val()
        const Tables = $("#Tables").val()
        const baking = $("#baking").val()


        if (radio === '' ) {
            $(".error").html('הזן סוג משמרת לשינויים')
        } else if (timeLength < 1 || timeLength > 18) {
            $(".error").html('הזן באורך הטיימר לפחות בין 1 ל 18')
        } else if (cosher.length === 0) {
            $(".error").html('הזן כשרות למשמרת')
        } else if (Tables.length === 0) {
            $(".error").html('הזן כמות סיבובים למשמרת')
        } else if (baking.length === 0) {
            $(".error").html('הזן סוג אפיה למשמרת')
        } else {
            fetch('/savetime', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    timeLength, cosher, Tables, baking, radio
                })
            }).then(res => res.json())
                .then(deta => {
                    console.log(deta)
                    $(".error").html(`השינויים למשמרת ${radio} נשמרו בהצלחה`)
                    setTimeout(function () { $(".error").html('') }, 3000);
                })
        }
    })
})