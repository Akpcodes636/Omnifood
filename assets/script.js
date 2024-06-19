const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");


btnNavEl.addEventListener('click',()=>{
    headerEl.classList.toggle('nav-open');
});

const allLinks = document.querySelectorAll('a:link');
console.log(allLinks);

allLinks.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        const href = link.getAttribute("href");
        console.log(href);

        //Scroll back to top
        if(href === "#"){
            window.scrollTo({
                top:20,
                behavior: "smooth",
                rootMargin: '-80px'
            })
        }
        //Scroll to other links 
        if ( href !== "#" && href.startsWith('#')){
          const sectionEl =  document.querySelector(href);  
        //   console.log(sectionEl);
        sectionEl.scrollIntoView({behavior:"smooth"});
        } 

        // Close to mobile navigaton
        if(link.classList.contains('main-nav-link')){
         headerEl.classList.toggle('nav-open');
        }
    })
})

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
 const obs = new IntersectionObserver(
    function(entries){ 
    const ent = entries[0];
    console.log(ent);
    if(ent.isIntersecting === false){
        document.body.classList.add("sticky");
        // document.querySelector(".header").classList.add("sticky");
    }
    if(ent.isIntersecting === true){
        document.body.classList.remove("sticky");
        // document.querySelector(".header").classList.add("sticky");
    }
    }      
 ,{
 root:null,
 threshold:0,
 rootMargin:"-80px",

 }
);
 obs.observe(sectionHeroEl);