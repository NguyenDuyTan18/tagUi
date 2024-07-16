// $ thay thế cho document.query...
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item') // tạo tabs để lấy các thẻ có class .tab-item 

const panes = $$('.tab-pane ') // tạo panes để lấy các thẻ có class .tab-pane

const tabActive = $('.tab-item.active') // lấy những thẻ đã active 

const line = $('.tabs .line') // lấy thẻ chứ line

line.style.left = tabActive.offsetLeft +'px'; // set cho thẻ line có đặt tính bắt đầu từ trái (offsetLeft)
// và di chuyển bao nhiêu px sang trái 

line.style.width = tabActive.offsetWidth +'px'; // set cho thẻ line có chiều dài bằng thẻ tabActive

tabs.forEach((tab, index) => { // lặp qua từng đối tương tabs
  const pane = panes[index]; // lấy ra những thẻ được lặp qua panes theo chỉ số index: 0 1 2 3 

    tab.onclick = function () { // khi đối tượng tab được lặp và click 

      $('.tab-item.active').classList.remove('active') // 2. kiểm tra có thẻ nào active khi click 
      // vào thẻ khác  thì xóa bỏ cái active bên thẻ đó 
      $('.tab-pane.active').classList.remove('active') // 4. kiểm tra kiểm tra có thẻ nào active khi 
      // click vào thẻ khác thì xóa bỏ cái active bên thẻ đó 

      line.style.left = this.offsetLeft + 'px'; // set cho thẻ line bắt đầu từ bên trái thẻ đang click 
      // đang được lặp qua
      line.style.width = this.offsetWidth + 'px'; // set cho thẻ line có chiều dài bằng cái thẻ đang click

      this.classList.add('active'); // 1. lấy thẻ tab được lặp qua và thêm cái class active
      pane.classList.add('active'); // 3. lấy thẻ pane được lặp qua và thêm cái class active
    }
})