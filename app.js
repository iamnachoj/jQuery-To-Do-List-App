$("#input").keypress((e)=>{if(e.key === "Enter") {
  newItem();
  $("input").val("")
  }});

$("#button").click(()=> {
   newItem();
   $("input").val("");
});

function newItem(){
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if ($("#input").val() === "") {
      alert("Task must not be empty!")
    } else {
      $("#list").append(li);
      $("#input").val("")
    }

  li.on('dblclick', function crossOut() {
      li.toggleClass('strike')
    });
    // responsive
  li.on("touchstart", function crossOut() {
    li.toggleClass('strike')
    });

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
     function deleteListItem(){
        li.remove();
      }

      // 4. Reordering the items:
     $('#list').sortable();

}

// function newItem(){
//
// //1. Adding a new item to the list of items:
//    let li = document.createElement("li");
//    let inputValue = document.getElementById("input").value;
//    let text = document.createTextNode(inputValue);
//    li.appendChild(text);
//
//    if (inputValue === '') {
//      alert("You must write something!");
//    } else {
//      let list = document.querySelector('#list');
//      list.appendChild(li);
//    }
//
//  //2. Crossing out an item from the list of items:
//    function crossOut() {
//  		li.classList.toggle("strike");
//  	}
//
//  	li.addEventListener("dblclick",crossOut);
//   // add responsiveness
//   li.addEventListener("touchstart", crossOut);
//
//  //3(i). Adding the delete button "X":
//    let crossOutButton = document.createElement("crossOutButton");
//  	crossOutButton.appendChild(document.createTextNode("X"));
//  	li.appendChild(crossOutButton);
//
//  	crossOutButton.addEventListener("click", deleteListItem);
//  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
//    function deleteListItem(){
//  		li.classList.add("delete")
//  	}
//  // 4. Reordering the items:
//    $('#list').sortable();
//
// }


// 5. in order to make it responsive, I change the instrucctions to "tab" instead of "click"
// according to the screen size, assuming that when you use a screen larger than 700px you
//  will be using a computer instead of a smartphone or tablet.

$(document).ready(function(){
   if($( window ).width() < 767){
       $("p").text("Tab to mark an item off, click on 'X' to delete an item, and drag items to reorder.");
   }else{
       $("p").text("Double click to mark an item off, click on 'X' to delete an item, and drag items to reorder.");
   }
});
$( window ).resize(function() {
	if($( window ).width() < 767){
       $("p").text("Tab to mark an item off, click on 'X' to delete an item, and drag items to reorder.");
   }else{
       $("p").text("Double click to mark an item off, click on 'X' to delete an item, and drag items to reorder.");
   }
});
