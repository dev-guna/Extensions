chrome.runtime.onMessage.addListener((datas,sender,sendResponse) => {
  if (datas.msg === "ShowingTable") {
    if(!document.getElementById("morebtnId")){
      let button = document.createElement("button");
      button.remove();
      button.innerText = "More Data";
      button.id = "morebtnId";
      button.setAttribute("style","display:block;width : 100px;background-color:yellow;");
      button.onclick = function () {
        let Pagedatas = document.getElementById("productTitle").innerText;
        let Pagedatas2 = document.getElementsByClassName("a-offscreen")[0].innerText;
        displayTableData(Pagedatas,Pagedatas2);
      };
      document.getElementById("titleSection").appendChild(button);
    }else{
      let button = document.getElementById("morebtnId");
      if(datas.checked){
        button.setAttribute("style","display:none;width : 100px;background-color:yellow;");
      }else{
        button.setAttribute("style","display:block;width : 100px;background-color:yellow;");
      }
    }
  }

  // if (datas.msg === "onload") {
  //   if(document.getElementById("morebtnId")){
  //     var style = window.getComputedStyle(document.getElementById("morebtnId"))
  //     if(style === 'none'){
  //       sendResponse("No");
  //     }else{
  //       sendResponse("YES");
  //     }
  //   }else{
  //     sendResponse("NOTHING");
  //   }
  // }

});

const displayTableData = (Pagedatas,Pagedatas2) => {
  const modalBox = document.createElement("dialog");
  modalBox.setAttribute("style",`overflow: hidden;height:50%;width:50%;background-color:white;position: fixed;`);
  modalBox.innerHTML = `
    <div style="display: flex;align-items: end;flex-direction: column-reverse;top:0px;">
    <button id="cls-btn" style="float:right;padding: 8px 12px; font-size:16px;border: none;background-color:red;">X</button>
    </div>
    <table>  
      <tr>
        <th style="width:50%">Product</th>
        <th>Price</th>
      </tr>  
      <tr>
        <td>${Pagedatas}</td>
        <td>${Pagedatas2}</td>
      </tr>  
    </table>
    `;
  document.body.appendChild(modalBox);
  const dialogBox = document.querySelector("dialog");
  dialogBox.showModal();
  dialogBox.querySelector("#cls-btn").addEventListener("click", () => {  dialogBox.close(); });
};
