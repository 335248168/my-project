let shopBox = document.getElementsByClassName('shop_box')
let len = shopBox.length

function singleLayout() {

    if (screen.width > 768) {

        for (let i = 0; i < len; i++) {
            shopBox[i].style.width = '500px'
        }
    } else {
        let single = document.getElementsByClassName('single')
        let double = document.getElementsByClassName('double')
        single[0].style.backgroundImage = "url(image/single0.png)"
        double[0].style.backgroundImage = "url(image/double0.png)"
        for (let i = 0; i < len; i++) {
            shopBox[i].style.width = '100%'
        }

    }
}

function doubleLayout() {
    if (screen.width > 768) {
        for (let i = 0; i < len; i++) {
            shopBox[i].style.width = '270px'
        }
    } else {
        let single = document.getElementsByClassName('single')
        let double = document.getElementsByClassName('double')
        single[0].style.backgroundImage = "url(image/single.png)"
        double[0].style.backgroundImage = "url(image/double.png)"
        for (let i = 0; i < len; i++) {
            shopBox[i].style.width = '40%'
        }
    }

}

function changeScenes(obj) {
    // console.log(obj.id)
    if (obj.className == "") {
        document.getElementsByClassName("scenes_selected")[0].className = ""
        obj.className = "scenes_selected"
        let formlist = document.getElementsByClassName("formlist")

        if (obj.id == "scenes") {
            formlist[0].id = "hide"
            formlist[1].id = ""
        } else {
            formlist[1].id = "hide"
            formlist[0].id = ""
        }
    }
}

function select() {
    let footer = document.getElementById('footer')

    if (screen.width <= 768) {
        footer.className = ""
    }
}

function closeBottom() {
    let footer = document.getElementById('footer')
    if (screen.width <= 768) {
        footer.className = "disappear"
    }
}