const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');
const tabActive = $('.tab-item.active');
const line = $('.tabs .line');

setLine(line, tabActive); // chạy hàm setLine gửi vào tham số line và tabActive

function setLine(line, tab) { // tab chỉ là tham số không quan tâm cách đặt tên
    line.style.left = tab.offsetLeft + 'px'
    line.style.width = tab.offsetWidth + 'px'
}

for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    const pane = panes[i];

    
    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        setLine(line, tab) // setLine cho line theo cái thẻ cuả tab được lặp

        tab.classList.add('active');
        pane.classList.add('active')
        
    }
}