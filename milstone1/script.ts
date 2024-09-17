const btn = document.getElementById('toggle-skills') as HTMLButtonElement
const skills = document.getElementById('Skills') as HTMLElement

// btn.addEventListener('click' , ()=> {
//     if(skills.style.display === 'none'){
//         skills.style.display = 'block'
//     }
//     else{
//         skills.style.display = 'none'
//     }
// });

function move(btn){
    btn.addEventListener('click' , 
        skills.style.display = 'none'
    )
}
