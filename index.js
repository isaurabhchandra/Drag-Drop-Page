console.log("This is Drag and Drop ");
const dragElement = document.querySelectorAll(".drag-itembox");
const dropElement = document.querySelectorAll(".drop-itembox");
const dragE = dragElement.innerHTML;
const dropE = dropElement.innerHTML;
const reset = document.querySelector(".btnreset");
var item;
var item1;
var drop = false;
var name;
dragElement.forEach((elem) => {
  item = elem.innerHTML;

  // console.log(item)
  elem.addEventListener("dragstart", (e) => {
    drop = false;
    e.target.className += " hold";
    setTimeout(() => {
      name = e.target.className;
      e.target.className = "hide";
    }, 20);

    console.log("draging....");
  });
  elem.addEventListener("dragend", (e) => {
    console.log("draging end...");
    if (!drop) e.target.className = name;
  });
});

dropElement.forEach((elem) => {
  item1 = elem.innerHTML;
  elem.addEventListener("dragover", (e) => {
    // console.log(elem)

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
    elem.innerHTML = `${item}`;
    console.log("drop.");
    drop = true;
    e.preventDefault();
  });
});

reset.addEventListener("click", () => {
  dragElement.forEach((ele) => {
    ele.innerHTML = item;
  });
  dropElement.forEach((ele) => {
    ele.innerHTML = item1;
  });
});
