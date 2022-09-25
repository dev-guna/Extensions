// window.onload = function() {
//     chrome.tabs.query({currentWindow:true,active:true}, async function(tabs){
//         let activeTab = tabs[0];
//         console.log(tabs)
//         datas = {
//             "msg":"onload"
//         }
//         await chrome.tabs.sendMessage(activeTab.id,datas, function(response){
//             if(response == "YES"){
//                 document.getElementById("switch").innerHTML = '';
//                 var newCheckBox = document.createElement('input');
//                 newCheckBox.type = 'checkbox';
//                 newCheckBox.id = 'guna'; 
//                 newCheckBox.setAttribute('data-sts','1');
//                 newCheckBox.checked = true;
//                 addEventListener('click', function() {
//                     console.log('dynamic elements')
//                 });
//                 document.getElementById("switch").append(newCheckBox);
//                 let updatedElement = `<span class="slider"></span>`;
//                 document.getElementById("guna").append(updatedElement);
//             }else if(response == "NO"){
//                 document.getElementById("switch").innerHTML = '';
//                 let updatedElement = `<input id="guna" type="checkbox" data-sts="0"><span class="slider"></span>`;
//                 document.getElementById("switch").insertAdjacentHTML("beforeend",updatedElement); 
//             }
//         });

//     })
//   }

document.querySelector('#guna').addEventListener('click',function(){
    console.log('guna')
     let checksts;
     let checkBox = document.getElementById("guna");
     let sts = checkBox.getAttribute("data-sts")
     if (sts == 0){
        checkBox.setAttribute('data-sts', '1');
        checksts = false;
     }else{
        checkBox.setAttribute('data-sts', '0');
        checksts = true;
     }
     chrome.tabs.query({currentWindow:true,active:true},function(tabs){
         let activeTab = tabs[0];
         console.log(tabs)
         datas = {
             "msg":"ShowingTable",
             "checked":checksts
         }
         chrome.tabs.sendMessage(activeTab.id, datas)
     })
 });


