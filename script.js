let img = document.querySelector('.img');
let happinessButton = document.getElementById('btn-happiness');
let sadnessButton = document.getElementById('btn-sadness');

happinessButton.addEventListener('click', function () {
    img.style.display = 'inline';
    happinessButton.disabled = true;
    sadnessButton.disabled = false;
});

sadnessButton.addEventListener('click', function () {
    img.style.display = 'none';
    happinessButton.disabled = false;
    sadnessButton.disabled = true;
});
