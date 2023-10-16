const f = document.querySelectorAll('.panel').forEach((panel) => {
    panel.addEventListener('click',()=>{
        removepanelclasses();
        panel.classList.add('active')
    })
})
function removepanelclasses() {
    document.querySelectorAll('.panel').forEach((panel) => {
        panel.classList.remove('active')
    })
}