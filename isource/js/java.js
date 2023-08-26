window.addEventListener("load",function(){
  // document.querySelector(".preloader").classList.add("opacity-0");
  
  setTimeout(() =>{
      document.querySelector(".preloader").style.display="none";     
  },8000)

})
///////

/////scroll
var btn = $('#backto-top');
$(window).on('scroll', function() {
  if ($(window).scrollTop() > 300) {
      btn.addClass('show');
  } else {
      btn.removeClass('show');
  }

});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
      scrollTop: 0
  }, '300');
});


//////////////////////
const nav= document.querySelector('.ul-nav'),
navlist=nav.querySelectorAll("li"),
totalnavlist=navlist.length;
for(let i=0;i<totalnavlist;i++){
  const a=navlist[i].querySelector("a");
  a.addEventListener("click",function(){
    for(let j=0;j<totalnavlist;j++){
      navlist[j].querySelector("a").classList.remove("active");
    }
    a.classList.add("active");
  })
}

////////
// var windowsize = $(window).width();

// $(window).resize(function() {
//   var windowsize = $(window).width();
// });

// if (windowsize < 575) {
//   $("#navbar").removeClass("heder-nav");


// }

////////////////////////////////// btn nav

$(document).ready(function(){

  $("#btn-nav").click(function(){
    $("#navbar").slideToggle("slow");
    $("#navbar").addClass("toggel");
  });
//////
    $("#myBtn").click(function(){
      $("#more").slideToggle("slow");
    });
    $("#myBtn1").click(function(){
      $("#more1").slideToggle("slow");

    }); $("#myBtn2").click(function(){
      $("#more2").slideToggle("slow");

    }); $("#myBtn3").click(function(){
      $("#more3").slideToggle("slow");

    }); $("#myBtn4").click(function(){
      $("#more4").slideToggle("slow");

    }); $("#myBtn5").click(function(){
      $("#more5").slideToggle("slow");

    }); $("#myBtn6").click(function(){
      $("#more6").slideToggle("slow");

    }); $("#myBtn7").click(function(){
      $("#more7").slideToggle("slow");

    }); $("#myBtn8").click(function(){
      $("#more8").slideToggle("slow");

    }); $("#myBtn9").click(function(){
      $("#more9").slideToggle("slow");

    }); $("#myBtn10").click(function(){
      $("#more10").slideToggle("slow");

    }); $("#myBtn11").click(function(){
      $("#more11").slideToggle("slow");

    }); $("#myBtn12").click(function(){
      $("#more12").slideToggle("slow");

    }); $("#myBtn13").click(function(){
      $("#more13").slideToggle("slow");

    });
  });
//   // item1
// function myFunction1() {
//     var moreText1 = document.getElementById("more1");
//     var btnText1 = document.getElementById("myBtn1");
  
//     if (moreText1.style.display === "none") {
      
//       btnText1.innerHTML = "Read Less";
//       moreText1.style.display = "inline";
//     } else {
      
//       btnText1.innerHTML = "Read More";
//       moreText1.style.display = "none";
//     }
//   }
//   // item2
// function myFunction2() {
//     var moreText = document.getElementById("more2");
//     var btnText = document.getElementById("myBtn2");
  
//     if (moreText.style.display === "none") {
      
//       btnText.innerHTML = "Read Less";
//       moreText.style.display = "block";
//     } else {
      
//       btnText.innerHTML = "Read More";
//       moreText.style.display = "none";
//     }
//   }
//   // item3
// function myFunction3() {
//     var moreText = document.getElementById("more3");
//     var btnText = document.getElementById("myBtn3");
  
//     if (moreText.style.display === "none") {
      
//       btnText.innerHTML = "Read Less";
//       moreText.style.display = "block";
//     } else {
      
//       btnText.innerHTML = "Read More";
//       moreText.style.display = "none";
//     }
//   }
//   // item4
// function myFunction4() {
//     var moreText = document.getElementById("more4");
//     var btnText = document.getElementById("myBtn4");
  
//     if (moreText.style.display === "none") {
      
//       btnText.innerHTML = "Read Less";
//       moreText.style.display = "block";
//     } else {
      
//       btnText.innerHTML = "Read More";
//       moreText.style.display = "none";
//     }
//   }
//   // item5
// function myFunction5() {
//     var moreText = document.getElementById("more5");
//     var btnText = document.getElementById("myBtn5");
  
//     if (moreText.style.display === "none") {
      
//       btnText.innerHTML = "Read Less";
//       moreText.style.display = "block";
//     } else {
      
//       btnText.innerHTML = "Read More";
//       moreText.style.display = "none";
//     }
//   }
//   // item6
// function myFunction6() {
//     var moreText = document.getElementById("more6");
//     var btnText = document.getElementById("myBtn6");
  
//     if (moreText.style.display === "none") {
      
//       btnText.innerHTML = "Read Less";
//       moreText.style.display = "block";
//     } else {
      
//       btnText.innerHTML = "Read More";
//       moreText.style.display = "none";
//     }
//   }
//   // item7
// function myFunction7() {
//     var moreText = document.getElementById("more7");
//     var btnText = document.getElementById("myBtn7");
  
//     if (moreText.style.display === "none") {
      
//       btnText.innerHTML = "Read Less";
//       moreText.style.display = "block";
//     } else {
      
//       btnText.innerHTML = "Read More";
//       moreText.style.display = "none";
//     }
//   }
//   // item8
// function myFunction8() {
//     var moreText = document.getElementById("more8");
//     var btnText = document.getElementById("myBtn8");
  
//     if (moreText.style.display === "none") {
      
//       btnText.innerHTML = "Read Less";
//       moreText.style.display = "block";
//     } else {
      
//       btnText.innerHTML = "Read More";
//       moreText.style.display = "none";
//     }
//   }
//   // item9
// function myFunction9() {
//     var moreText = document.getElementById("more9");
//     var btnText = document.getElementById("myBtn9");
  
//     if (moreText.style.display === "none") {
      
//       btnText.innerHTML = "Read Less";
//       moreText.style.display = "block";
//     } else {
      
//       btnText.innerHTML = "Read More";
//       moreText.style.display = "none";
//     }
//   }
//   // item10
// function myFunction10() {
//     var moreText = document.getElementById("more10");
//     var btnText = document.getElementById("myBtn10");
  
//     if (moreText.style.display === "none") {
      
//       btnText.innerHTML = "Read Less";
//       moreText.style.display = "block";
//     } else {
      
//       btnText.innerHTML = "Read More";
//       moreText.style.display = "none";
//     }
//   }
//   // item11
// function myFunction11() {
//     var moreText = document.getElementById("more11");
//     var btnText = document.getElementById("myBtn11");
  
//     if (moreText.style.display === "none") {
      
//       btnText.innerHTML = "Read Less";
//       moreText.style.display = "block";
//     } else {
      
//       btnText.innerHTML = "Read More";
//       moreText.style.display = "none";
//     }
//   }
//   // item12
// function myFunction12() {
//     var moreText = document.getElementById("more12");
//     var btnText = document.getElementById("myBtn12");
  
//     if (moreText.style.display === "none") {
      
//       btnText.innerHTML = "Read Less";
//       moreText.style.display = "block";
//     } else {
      
//       btnText.innerHTML = "Read More";
//       moreText.style.display = "none";
//     }
//   }
//   // item13
// function myFunction13() {
//     var moreText = document.getElementById("more13");
//     var btnText = document.getElementById("myBtn13");
  
//     if (moreText.style.display === "none") {
      
//       btnText.innerHTML = "Read Less";
//       moreText.style.display = "block";
//     } else {
      
//       btnText.innerHTML = "Read More";
//       moreText.style.display = "none";
//     }
//   }
  