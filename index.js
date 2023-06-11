console.log("This is Drag and Drop ");
const dragElement = document.querySelectorAll(".drag-itembox");

const dropElement = document.querySelectorAll(".drop-itembox");

dragElement.forEach((elem) => {
  elem.addEventListener("dragstart", (e) => {
    e.target.className += " hold";
    setTimeout(() => {
      e.target.className = "hide";
    }, 0);

    console.log("draging....");
  });
  elem.addEventListener("dragend", (e) => {
    console.log("draging end...");
   
  });
});

dropElement.forEach((elem) => {
  elem.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("dragover is triggered");
  });
  elem.addEventListener("dragenter", (e) => {
    console.log("drageter is triggerd....");
  
  });
  elem.addEventListener("dragleave", () => {
    console.log("dragleave is triggered.");
  });
  elem.addEventListener("drop", (e) => {
    console.log("drop.");
    e.preventDefault();
  });
});
