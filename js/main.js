$(function(){
  

  function hidePopup() {
    const close = document.querySelector('.popup__close');
    const popup = document.querySelector('.popup');
    popup.style.opacity = '0';
   }

})

  var element = document.createElement("input");
  element.id = 'solution__button1';
  var el = document.getElementById('solution__button1'); 

function viewDiv(){
  // document.getElementById("task1").style.display = "block";
  function handler1() {
    document.getElementById("task1").style.display = "block"
  }
  function handler2() {
    document.getElementById("task2").style.display = "block"
  }
  function handler3() {
    document.getElementById("task3").style.display = "block"
  }
  function handler4() {
    document.getElementById("task4").style.display = "block"
  }
  solution__button1.addEventListener("click", handler1)
  solution__button2.addEventListener("click", handler2) 
  solution__button3.addEventListener("click", handler3)
  solution__button4.addEventListener("click", handler4)
};

function showBtn() {
  
  function handler1() {
    document.getElementById("tasks").style.display = "block"
  }
  show__btn.addEventListener("click", handler1)
}
