const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    const task = inputBox.value.trim();
    if (!task) {
      alert("Please write down a task");
      return;
    }
  
    li.innerHTML = 
      <><label>
            <input type="checkbox">
                <span>${task}</span>
            </></label><span class="edit-btn">Edit</span><span class="delete-btn">Delete</span></>
      ;
  
    listContainer.appendChild(li);
    inputBox.value = "";
}
  const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("span");
const deleteBtn = li.querySelector(".delete-btn");

editBtn.addEventListener("click", function () {
  const update = prompt("Edit task:", taskSpan.textContent);
  if (update !== null) {
    taskSpan.textContent = update;
    li.classList.remove("completed");
    //add the code below
    checkbox.checked = false;
    updateCounters();
  }
});
deleteBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this task?")) {
      li.remove();
      updateCounters();
    }
});

