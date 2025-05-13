// For drop-down 
const toggleBtn = document.getElementById("dropdownToggle");
const dropdown = document.getElementById("dropdownContent");
const icon = document.getElementById("dropdownIcon");

toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("show");

  const isOpen = dropdown.classList.contains("show");
  icon.classList.remove("fa-caret-right", "fa-caret-down");
  icon.classList.add(isOpen ? "fa-caret-down" : "fa-caret-right");
});

document.addEventListener("click", (e) => {
  if (!toggleBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("show");
    icon.classList.remove("fa-caret-down");
    icon.classList.add("fa-caret-right");
  }
});
