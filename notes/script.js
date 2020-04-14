const addButton = document.querySelector("#addButton");
// let test = 1;
addButton.addEventListener("click", () => {

    document.getElementById('sound').play()

    let stickyCont = document.querySelector(".sticky-container");
    let stickySingle = document.createElement('div');
    stickySingle.classList.add('sticky');  //classList.add добавляет элементу указанные классы
    stickySingle.contentEditable = "true";  //разрешение редактирования
    stickySingle.setAttribute = ("role","textbox"); // атрибуты для возможности многострочного ввода (Enter перейдет на следующую строку, а не отправит форму)
    stickySingle.innerHTML = `creation time: ${clock()} <br></br> *type here*`          //innerHTML - разметка элемента
    stickyCont.appendChild(stickySingle);   //добавляет узел в конец списка дочерних элементов указанного родительского узла. 
                                            // Нормальными словами - что бы стикеры двигались на место удаленных 
                                            // и создавались сбоку уже существующих, а не поверх них. (вроде как)
  
    // ↓↓↓ Удаление стикера ↓↓↓
    let close = document.createElement('span'); //создает элемент span и записывает его в переменную close
    close.classList.add('close');
    close.innerHTML = "✖";
    close.contentEditable = "false"; //запрет редактирования
    stickySingle.appendChild(close);
  
    //Удаление через цикл что бы связать соответствующий стикер с текстом на нём

    let tempDelStickers = document.getElementsByClassName("sticky");    //Возвращает массивоподобный (итерируемый) объект всех дочерних элементов, 
                                                                        // соответствующих всем из указанных имен классов
    let temp = document.getElementsByClassName("close");

    for (let i = 0; i < tempDelStickers.length; i++){
        temp[i].addEventListener("click", ()=> {
            console.log('тест');
            tempDelStickers[i].style.display = "none";
        });
    }
    
    // Случайные параметры новых стикеров

    function randomNumber(min, max) { 
      return Math.random() * (max - min) + min; 
    }
    let angle = randomNumber(-4, 4);
    stickySingle.style.transform = "rotate(" + angle+"deg)";
  
    let color = randomNumber(1, 359);
    stickySingle.style.filter = "hue-rotate(" + color +"deg)";
});

// ↓↓↓ ф-я часов идет постоянно, вызывается каждую секунду ↓↓↓

function clock(){
    let date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    // console.log(hours + ':' + minutes + ':' + seconds);
    return (hours + ':' + minutes + ':' + seconds);
}
setInterval(clock, 1000);

