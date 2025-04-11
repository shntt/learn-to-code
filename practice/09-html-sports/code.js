document.addEventListener('DOMContentLoaded', () => {
    const options = {
        root: null,
        rootMargin: '0px 0px',
        threshold: [1, 0],
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((value) => {
            if (value.isIntersecting) {
                value.target.classList.add('anim');
            } else {
                value.target.classList.remove('anim');
            }
        });
    }, options);
    
    document.querySelectorAll('.fellow-player').forEach((player) => {
        observer.observe(player);
    });
    
    document.querySelectorAll('.team').forEach((team) => {
        observer.observe(team);
    });
});