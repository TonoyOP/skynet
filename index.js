

const loco_ScrollTriggerFix = () =>{

    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}

loco_ScrollTriggerFix(); 


function frontUiAnimation(){

 gsap.to('#b-1',{

  y: 20,
  transform: 'rotate(-15deg)',
  duration: 10,
  repeat: -1,
  yoyo: true
 })

 gsap.to('#b-2',{

  x: 20,
  transform: 'rotate(0deg)',
  duration: 8,
  repeat: -1,
  yoyo: true
 })

 gsap.to('#b-3',{

  y: 20,
  //transform: 'rotate(36deg)',
  duration: 5,
  repeat: -1,
  yoyo: true
 })

 gsap.to('#b-4',{

  x: 40,
  transform: 'rotate(-10deg)',
  duration: 10,
  repeat: -1,
  yoyo: true
 })

 gsap.to('#b-5',{

  y: 40,
  transform: 'rotate(6deg)',
  duration: 10,
  repeat: -1,
  yoyo: true
 })

 
}

frontUiAnimation();


//     TESTI SECTION NUMBER INCREMENT JS CODE 


function testiNumIncrement(){

  function testiNumberOne(){

    var artNo = Number(document.querySelector('#artworkNo').textContent);
    let rawArtNo = document.querySelector('#artworkNo');
  


    if(artNo == 1){

    setInterval(() => {

      rawArtNo.textContent = Number(rawArtNo.textContent) + artNo * 7 ;

    }, 100);

    setTimeout(()=>{

      rawArtNo.remove()
      let parent = document.querySelector('#testiOne');
      parent.innerHTML = `
      <div class="testi-txt">Artwork</div>
      <div class="number" id="artworkNo">27K+</div>`
    }, 110000);

    
  }
  }

  testiNumberOne();

  function testiNumberTwo(){


    let aucNo = Number(document.querySelector('#auctionNo').textContent);
    let rawAucNo = document.querySelector('#auctionNo');
   


    if(aucNo == 1){

    setInterval(() => {

      rawAucNo.textContent = Number(rawAucNo.textContent) + aucNo * 5 ;

    }, 100);

    setTimeout(()=>{

      rawAucNo.remove()
      let parent = document.querySelector('#testiSecond');
      parent.innerHTML = `
      <div class="testi-txt">Auction</div>
      <div class="number" id="auctionNo">10K+</div>`
    }, 110000);

    
  }
  }

  testiNumberTwo();

  function testiNumberThree(){

    let artistNo = Number(document.querySelector('#artistNo').textContent);
    let rawArtistNo = document.querySelector('#artistNo');


    if(artistNo == 1){

    setInterval(() => {

      rawArtistNo.textContent = Number(rawArtistNo.textContent) + artistNo * 6 ;

    }, 100);

    setTimeout(()=>{

      rawArtistNo.remove()
      let parent = document.querySelector('#testiThree');
      parent.innerHTML = `
      <div class="testi-txt">Artist</div>
      <div class="number" id="artistNo">6K+</div>`
    }, 60000);

    
  }
  }
  
  testiNumberThree();

}

testiNumIncrement();


// ENTIRE WEBSITE ANIMATION CODE

function entireWebAnimation(){

  var tl = gsap.timeline();

tl.from('.logo',{

  opacity: .7,
  duration: 1
})

  tl.from('.navList',{

    y: 20,
    opacity: 0,
    duartion: 1
  })


  tl.from('.frontUi-main-txt',{

    y: 20,
    opacity: 0,
    duration: 1,

  })

  tl.from('.frontUi-sub-txt',{

    y: 20,
    opacity: 0,
    duration: 1,

  })

  tl.from('.frontUi-btns',{

    x: 80,
    opacity: 0,
    duration: 1,

  })

  //  SCROLL TRIGGER + GSAP

gsap.from('.trendTxt h2, .trendTxt h1',{

  y: 30,
  opacity: 0,
  scrollTrigger: {

    trigger: '.trendTxt h2, .trendTxt h1',
    scroller: '.main',
    scrub: 3,
    start: 'top 80%',
    end: 'top 30%'
    
    
  }
})

gsap.from('.trendImg',{

  x: -30,
  opacity: 0,
  scrollTrigger: {

    trigger: '.trendImg',
    scroller: '.main',
    scrub: 2,
    start: 'top 80%',
    end: 'top 30%',
  }
})


gsap.from('.sub-txt-trend',{

  x:30,
  opacity: 0,
  scrollTrigger: {

    trigger: '.sub-txt-trend',
    scroller: '.main',
    scrub: 2,
    start: 'top 80%',
    end: 'top 80%',
  }

})

gsap.from('.topTxt h1, .topTxt h2',{

  x: -30,
  opacity: 0,
  scrollTrigger: {

    trigger: '.topTxt h1, .topTxt h2',
    scroller: '.main',
    scrub: 2,
    start: 'top 80%',
    end: 'top 30%',
  }
})

gsap.from('.SubTopTxt',{

  y: 30,
  opacity: 0,
  scrollTrigger: {

    trigger: '.SubTopTxt',
    scroller: '.main',
    scrub: 2,
    start: 'top 80%',
    end: 'top 80%',
  }
})

gsap.from('.topCont',{

  y: 30,
  opacity: 0,
  scrollTrigger: {

    trigger: '.topCont',
    scroller: '.main',
    scrub: 2,
    start: 'top 80%',
    end: 'top 30%',
  }
})

gsap.from('.brand-section h1',{

  y: 30,
  opacity: 0,
  scrollTrigger: {

    trigger: '.brand-section h1',
    scroller: '.main',
    scrub: 2,
    start: 'top 80%',
    end: 'top 30%',
  }
})


gsap.from('.subBtn',{


  opacity: 0,
  scrollTrigger: {

    trigger: '.subBtn',
    scroller: '.main',
    start: 'top 80%',
    end: 'top 60%',
  }
})
}



entireWebAnimation();
