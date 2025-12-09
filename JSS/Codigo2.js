document.querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.region-container').scrollIntoView({
        behavior: 'smooth'
    });
});
