let origin = randomize()
console.log(origin)
let life = 7

$(document).ready(function () {
    $("img").addClass("noselect")

    $('#input').on('keyup', function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            $('.check').click()
        }
    })

    $('.check').click(function () {
        $('.alert').fadeOut();
        if (validate()) {
            let result = check()
            if (result == 1) {
                life -= 1
                heart()
                if (life < 1) { end() }
            }
        }
        $('#input').val("")
        $('#input').focus();
    })

    $('.restart').click(function () {
        location.reload()
    })
})


function randomize() {
    return Math.floor((Math.random() * 99) + 1);
}

function validate() {
    let value = parseInt($('#input').val());
    let hr = ""
    if (life < 7) {
        hr = '<hr>'
    }
    if (Number.isInteger(value)) {
        $("#ul").prepend("<li>You Guessed " + value + "</li>" + hr).show();
        return true
    } else {
        $('.value').fadeIn(200);
    }
}

function check() {
    let value = parseInt($('#input').val());
    if (value == origin) {
        return green()
    }else if (value <= (origin + 3) && value >= (origin - 3)) {
        return blue()
    }
    if (value <= (origin + 10) && value >= (origin - 10)) {
        return yellow()
    }else {
        return red()
    }
}   


function green() {
    $(".green").fadeIn(200);
    end()
    return 0
}

function yellow() {
    if (life > 1) {
        $(".yellow").fadeIn(200);
    }else {
        $(".end").fadeIn(200);
    }
    return 1
}

function blue() {
    if (life > 1) {
        $(".blue").fadeIn(200);
    }else {
        $(".end").fadeIn(200);
    }
    return 1
}

function red() {
    if (life > 1) {
        $(".worng").fadeIn(200);
    }else {
        $(".end").fadeIn(200);
    }
    return 1
}

function end() {
    $(".btn").slideToggle();
    $('#input').attr('disabled', 'true')
    $('.blur').text(origin).css('animation', "blur 1s ease 1")
    $('.blur').delay(900).css('text-shadow', "0 0 0px black")
}


function heart() {
    $(".heart").children('img:first-child').css('animation', "pop 1.3s ease 1")
    setTimeout(function() {
    $(".heart").children('img:first-child').remove();
    }, 800)
}

