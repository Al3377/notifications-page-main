// Removing light-blue background and red dots from unread notifications by clicking "Mark all as read"
const markAll = document.getElementById("btn");
const tabs = document.querySelectorAll(".tab");
const dots = document.querySelectorAll(".not-dot");

markAll.addEventListener("click", function () {
  for (let i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    let dot = dots[i];
    tab.classList.remove("unread-tab");
    dot.classList.remove("dot");
  }
});
