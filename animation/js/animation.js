const contentAnimation = document.querySelector('.content-animation');
const circle           = document.querySelector('.circle');
const circleShadow     = document.querySelector('.circle-shadow');

contentAnimation.onmouseenter = () => {
    document.querySelector('.circle').style.animationPlayState = 'paused';
        document.querySelector('.circle-shadow').style.animationPlayState = 'paused';
};

contentAnimation.onmouseleave = () => {
    document.querySelector('.circle').style.animationPlayState = 'running';
    document.querySelector('.circle-shadow').style.animationPlayState = 'running';
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout( () => {
        var elmsAnimationFade = document.querySelectorAll( '.animate-fade' );

        [].forEach.call( elmsAnimationFade, function( elm ) {
            elm.classList.remove( 'hide' );
        });

    }, 2000 )
});