const container=document.querySelector('.container')
const input=document.querySelector('.search')
const click=document.querySelector('.click')

click.addEventListener('click',()=>
{
    container.classList.toggle('active')
    input.focus()
})

