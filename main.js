const $toggle = document.getElementById('toggle');
const $h1 = document.getElementById('heading');
const $p = document.getElementById('text');

$toggle.addEventListener('change', (e) => {
    document.body.classList.toggle('dark', e.target.checked);
    $h1.classList.toggle('dark', e.target.checked);
    $p.classList.toggle('dark', e.target.checked);
})