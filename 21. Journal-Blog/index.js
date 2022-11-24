const viewMoreBtn = document.getElementById("view-more-btn");
const hiddenContent = document.querySelectorAll(".hidden");

let isHidden = true;

viewMoreBtn.addEventListener("click", () => {
  if(isHidden) {
    for(let i = 0; i < hiddenContent.length; i++) {
      hiddenContent[i].style.display = "block";
    }
    viewMoreBtn.textContent = "View Less";
    isHidden = false;
  } else {
    for(let i = 0; i < hiddenContent.length; i++) {
      hiddenContent[i].style.display = "none";
    }
    viewMoreBtn.textContent = "View More";
    isHidden = true;
  }

  
})