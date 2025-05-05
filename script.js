function telegram() {
    window.location.href = "https://t.me/y_bahodirovich"
}

function instagram() {
    window.location.href = "https://www.instagram.com/just_user.01/"
}


function qidir() {
    let qidiruv = document.querySelector(".input").value.trim();
    let barchaKartalar = document.querySelectorAll(".redmi-card");
    let topildi = false;

    barchaKartalar.forEach(karta => {
        if (karta.id.toLowerCase() === qidiruv.toLowerCase()) {
            karta.style.display = "block";
            topildi = true;
        } else {
            karta.style.display = "none";
        }
    });

    let natijaBox = document.querySelector("#xato");

    if (qidiruv === "") {
        barchaKartalar.forEach(karta => karta.style.display = "block");
        natijaBox.textContent = "";
    } else if (!topildi) {
        barchaKartalar.forEach(karta => karta.style.display = "none");
        natijaBox.textContent = "❌ Bunday mahsulot sotuvda mavjud emas";
    } else {
        natijaBox.textContent = "";
    }
}

function dark() {
    let body = document.querySelector("body")
    body.style.backgroundColor = "black"

    let links = document.querySelectorAll(".header-a");
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = "white";
    }

    let header2 = document.querySelector(".header-2")
    header2.style.backgroundColor = "black"

    let cataloga = document.querySelectorAll(".catalog-a")
    for (let i = 0; i < cataloga.length; i++) {
        cataloga[i].style.color = "white"
    }

    let helpa = document.querySelector(".help-a")
    helpa.style.color = "white"

    let header = document.querySelector("header")
    header.style.borderTop = "8px solid #005628"

    let prodajtext = document.querySelectorAll(".prodaj-text")
    for (let i = 0; i < prodajtext.length; i++) {
        prodajtext[i].style.color = "white"

    }

    let redmiCard = document.querySelectorAll(".redmi-card")
    for (let index = 0; index < redmiCard.length; index++) {
        redmiCard[index].style.border = "1px solid white"
    }

    let macbokcard = document.querySelectorAll(".macbook-card")
    for (let index = 0; index < macbokcard.length; index++) {
        macbokcard[index].style.border = "1px solid white"
    }

    let samsungcard = document.querySelectorAll(".samsung-card")
    for (let index = 0; index < samsungcard.length; index++) {
        samsungcard[index].style.border = "1px solid white"
    }

    let modelname = document.querySelectorAll(".model-name")
    for (let index = 0; index < modelname.length; index++) {
        modelname[index].style.color = "white"
    }

    let secBG = document.querySelector(".sec-bg")
    secBG.style.backgroundColor = "#1a1a1a"

    let gmailH2 = document.querySelector(".gmail-h2")
    gmailH2.style.color = "white"

    let gmailp = document.querySelector(".gmail-p")
    gmailp.style.color = "white"

    let label = document.querySelector(".label")
    label.style.color = "white"

    let footer = document.querySelector("footer")
    footer.style.backgroundColor = "#1a1a1a"

    let footera = document.querySelectorAll(".footer-a")
    for (let index = 0; index < footera.length; index++) {
        footera[index].style.color = "white"
    }

    let footerli = document.querySelectorAll(".footer-li")
    for (let index = 0; index < footerli.length; index++) {
        footerli[index].style.color = "white"
    }

    let footerp = document.getElementById("footer-p")
    footerp.style.color = "white"

}

function light() {
    let body = document.querySelector("body")
    body.style.backgroundColor = "white"

    let links = document.querySelectorAll(".header-a");
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = "black";
    }

    let header2 = document.querySelector(".header-2")
    header2.style.backgroundColor = "white"

    let cataloga = document.querySelectorAll(".catalog-a")
    for (let i = 0; i < cataloga.length; i++) {
        cataloga[i].style.color = "black"
    }

    let helpa = document.querySelector(".help-a")
    helpa.style.color = "black"

    let header = document.querySelector("header")
    header.style.borderTop = "8px solid #00C65E"

    let prodajtext = document.querySelectorAll(".prodaj-text")
    for (let i = 0; i < prodajtext.length; i++) {
        prodajtext[i].style.color = "#363A45"

    }

    let modelname = document.querySelectorAll(".model-name")
    for (let index = 0; index < modelname.length; index++) {
        modelname[index].style.color = "black"
    }

    let secBG = document.querySelector(".sec-bg")
    secBG.style.backgroundColor = "#F7F7F7"

    let gmailH2 = document.querySelector(".gmail-h2")
    gmailH2.style.color = "black"

    let gmailp = document.querySelector(".gmail-p")
    gmailp.style.color = "black"

    let label = document.querySelector(".label")
    label.style.color = "black"

    let footer = document.querySelector("footer")
    footer.style.backgroundColor = "#F7F7F7"

    let footera = document.querySelectorAll(".footer-a")
    for (let index = 0; index < footera.length; index++) {
        footera[index].style.color = "black"
    }

    let footerli = document.querySelectorAll(".footer-li")
    for (let index = 0; index < footerli.length; index++) {
        footerli[index].style.color = "#EFEFEF"
    }

        let footerp = document.getElementById("footer-p")
    footerp.style.color = "black"
}

