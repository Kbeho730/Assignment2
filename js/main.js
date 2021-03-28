const form = document.getElementById("addForm");
const itemList = document.getElementById("items");

form.addEventListener("submit", function(e){
  e.preventDefault();
  
  const newItem = document.getElementById("item").value;

  const li = document.createElement("li");
  li.className= "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(deleteBtn);
  itemList.appendChild(li);


});

itemList.addEventListener('click', function(e){
  if(e.target.classList.contains('delete')){
    if(confirm("are you sure")){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
});