// Initialize button with users' preferred color
debugger;
// let changeColor = document.getElementById("changeColor");
//
// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });
//
// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });
//
// // The body of this function will be executed as a content script inside the
// // current page
//   function setPageBackgroundColor() {
//
//   chrome.storage.sync.get("color", ({ color }) => {
//     // console.log(window)
//     // document.body.style.backgroundColor = color;
//     function get_current_element(event){
//       var x = event.clientX, y = event.clientY,
//           element = document.elementFromPoint(x, y);
//       return element
//     }
//
//     function highlight(element){
//       element.style.outline = '#f00 solid 2px'
//     }
//     function remove_hightlight(element){
//       element.style.removeProperty('outline')
//     }
//
//     var last_element = null
//
//     function track_mouse(event){
//       var elementMouseIsOver = get_current_element(event)
//       if (elementMouseIsOver === last_element) {
//         return
//       }
//       if (last_element != null) {
//         remove_hightlight(last_element)
//       }
//       highlight(elementMouseIsOver)
//       last_element = elementMouseIsOver
//
//     }
//     window.onmousemove = track_mouse
//
//   });
//
// }

function closeSelectShow(){
  window.onmousemove = null
}
