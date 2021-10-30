var scriptURL = "https://script.google.com/macros/s/AKfycbxrIUPVainngPth2GMtpbqPA6SzoYgm3ynnd1t4rCjsgIM14RSnSq0ztSfJZ5r3ENwo/exec"
var forms = document.forms['google-sheet']

forms.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scriptURL,{method: 'POST', body: new FormData(form)})
    .then(response =>document.getElemntById('form-alert').innerHTML = "Data was stored")
    .catch(error =>document.getElemntById('form-alert').innerHTML = "Data was not stored")
})