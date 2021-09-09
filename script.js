// khi inclick vào menu-bar thì nó sẽ chuyển sang dấu x
const menuBar = document.querySelector(".menu-bar")

menuBar.addEventListener("click",function(){
    menuBar.classList.toggle("active");
    document.querySelector(".menu-items").classList.toggle("active") 
})
// khi kéo chuot đến 1 vị trí nhất định thì top sẽ top.active
window.addEventListener("scroll",function(){
    const x = this.pageYOffset
    if(x>80){
        document.querySelector(".top").classList.add("active")
    }
    else{
        document.querySelector(".top").classList.remove("active")
    }
})
// làm menu
/**
 * b1 lấy class menu-title ra -> khi click vào 1 trong những lựa chọn
 */
const menuTitle = document.querySelector(".menu-title");
// console.log(menuTitle)
menuTitle.addEventListener("click",function(x){
    
    if(x.target.classList.contains("menu-button")){
        const Target = x.target.getAttribute("data-title");
        menuTitle.querySelector(".active").classList.remove("active")
        x.target.classList.add("active")
        const menuItem = document.querySelector(".menu");
        console.log(menuItem)
        menuItem.querySelector(".menu-item-content.active").classList.remove("active");
        menuItem.querySelector(Target).classList.add("active")
    } 
})

// TỰ ĐỘNG ĐÓNG MỞ KHI CHỌN CÁC LỰA CHỌN Ở THANH MENU
menuItems = document.querySelector(".menu-items")
console.log(menuItems)
menuItems.onclick = function(){
    document.querySelector(".menu-items").classList.toggle("active");
    menuBar.classList.toggle("active");
}
// var listmenuItem = menuItems.querySelectorAll('li a[href*="#"]')
// console.log(listmenuItem)
// for(var i = 0;i<listmenuItem.length();++i){
//     var menuItem = listmenuItem[i];
//     if(menuItem.onclick() =
// }


