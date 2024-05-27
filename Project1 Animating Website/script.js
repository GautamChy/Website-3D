
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y +  "px"
    blur.style.left = dets.x - 200 + "px"
    blur.syle.top = dets.y - 200 + "px"

})


   gsap.to("#nav",{
    backgroundColor:"#000",
    duration:10,
    height:"100px",
    scrollTrigger:{
    trigger:"#nav",
    scroller:"#body",
    markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:1
 
     }
    } )
  
gsap.to("#main",{
    backgroundColor:"#000",
    duration:10,
  scrollTrigger:{
  trgger:"#main",
  scroller:"body",
  height:"100px;",
  //markers:true,
  start:"top -25%",
  end:"top -70%",
  scrub:2
  }
  })

