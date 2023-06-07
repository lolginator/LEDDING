const navBtn = document.querySelector(".nav-icon-btn")
const navIcon = document.querySelector(".nav-icon")
const navList = document.querySelector(".header__top-row")
const navLink = document.querySelectorAll(".nav__list a")

navBtn.onclick = function () {
    navIcon.classList.toggle("nav-icon--active")
    navList.classList.toggle("header__top-row--mobile")
    document.querySelector("html").classList.toggle("no-scroll")
    document.querySelector("body").classList.toggle("no-scroll")
    navLink.forEach(element => {
        element.onclick = function() {
            navIcon.classList.toggle("nav-icon--active")
            navList.classList.toggle("header__top-row--mobile")
            document.querySelector("html").classList.toggle("no-scroll")
            document.querySelector("body").classList.toggle("no-scroll")
        }
    });   
}



//MAP


ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.943543, 30.338928],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    })







    var myPlacemark = new ymaps.Placemark([59.943543, 30.338928], {
        
        
        balloonContent: `				
        <div class="balloon">
        <div class="balloon__address">Наб. реки Фонтанки 10-15</div>
        <div class="balloon__contacts">
        <a href="tel:+78121234567">+8 (812) 123-45-67</a>
        </div>
        </div>`},
        
        
        {
        iconImageHref: "./image/location.png",
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40]
    });




    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
	myMap.controls.remove('searchControl'); // удаляем поиск
	myMap.controls.remove('trafficControl'); // удаляем контроль трафика
	myMap.controls.remove('typeSelector'); // удаляем тип



    myMap.geoObjects.add(myPlacemark)
    myPlacemark.balloon.open()
}


///STYLE-MAP