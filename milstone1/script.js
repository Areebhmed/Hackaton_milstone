var btn = document.getElementById('toggle-skills');
var skills = document.getElementById('Skills');
btn.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
// function move(btn){
//     skills.hide()
// }
