//console.log('Project 5');

const insert = document.querySelector('#insert')
//adding event listner to the whole window
window.addEventListener('keydown',(e)=>{
  insert.innerHTML =`
    <div class='color'><table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key===" "?"space":e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    
  </table></div>
  `
})