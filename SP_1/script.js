let clickServices = function () {
    let tabTit =document.querySelectorAll('.service-menu-item'),
    tabCon = document.querySelectorAll('.tab'),
    tabName;
    tabTit.forEach(item=>{
        item.addEventListener('click', selectTabTit)
    });
    function selectTabTit() {
        tabTit.forEach(item=>{
            item.classList.remove('active')
        })
        this.classList.add('active')
        // console.log(this);
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabCon.forEach(item=>{
            item.classList.contains(tabName)? item.classList.add('active'): item.classList.remove('active');
        })
    }

};

clickServices();

let upIcon = function () { 
    let tabTit =document.querySelectorAll('.slider-img-icon'),
    tabCon = document.querySelectorAll('.info'),
    tabName;
    tabTit.forEach(item=>{
        item.addEventListener('click', selectTabTit);
    });
    let active = 0;

    document.querySelector('.btn-right').onclick = () =>{
            tabTit[active].classList.remove('active');            
            tabCon[active].classList.remove('active');
            if (active + 1 == tabTit.length) {
                active = 0;
            }else if (active + 1 == tabCon.length) {
                active = 0;
            }else{
                active++;
            }
            tabTit[active].classList.add('active');
            tabCon[active].classList.add('active');

        }

    document.querySelector('.btn-left').onclick = () =>{ 
        tabTit[active].classList.remove('active');
        tabCon[active].classList.remove('active');
        if (active -1 == -1) {
            active= tabTit.length-1;
        }else if (active -1 == -1) {
            active=tabCon.length-1;
        }else{
            active--;
        }
        tabTit[active].classList.add('active');
        tabCon[active].classList.add('active');

    }

    function selectTabTit() {
        tabTit.forEach(item=>{
            item.classList.remove('active');
        })
        this.classList.add('active')
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabCon.forEach(item=>{
            item.classList.contains(tabName)? item.classList.add('active'): item.classList.remove('active');
        })
    }
};

upIcon();

document.querySelector('.service-menu-item').addEventListener('click',function(){
    document.querySelector('.service-menu-item.active').classList.remove('active');
    this.classList.add('active');
  });


function clickWork() {
    
    let buttons = document.querySelectorAll('.category-item')
    let cards = document.querySelectorAll('.gallery-img');

    function filter(category,items) {
       
        items.forEach((item)=>{
            const isItemFiltered = !item.classList.contains(category);
            let isShowAll = category.toLowerCase()==='all'
            if (isItemFiltered && !isShowAll ) {
                item.classList.add('hide');
            }else{
                item.classList.remove('hide')
            }
        })
    }
    buttons.forEach(element => {
        element.addEventListener('click',()=>{
            let curCat = element.dataset.filterName;
            filter(curCat,cards)            
        })
    });
}

clickWork();
////////////////////////////////////////////////////////////////////////////////////////////////

let container = document.querySelector('.category-img')

document.querySelector('.img-load').addEventListener("click", function(){
    clickWork();
            let data = ['Graphic-Design', 'Web-Design', 'Landing-Pages', 'Wordpress'];
            for (let i = 1; i <= 12; i++) {      
                let random = Math.floor(Math.random() * data.length);  
                container.innerHTML+=`<li class="gallery-img ${data[random]} "><img src="./SP-img/Work/${i}.png" alt=""><div class="gallery-hover"><div class="icon"><i class="img-icon fa fa-link" aria-hidden="true"></i><i class="img-icon fa fa-stop" aria-hidden="true"></i></div><p class="hover-title">CREATIVE DESIGH</p> <P class="hover-text">Web Design</P></div></li> ` ;
            }
        this.remove() 
   clickWork();
})