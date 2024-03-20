import { useEffect } from 'react';
import '../styles/Slideshow.css';

const Slideshow = () => {
    // controllers
    let slideIndex = 0;
    let slides;
    slides = document.getElementsByClassName("slide");

    // dummy data
    const images = [
        "/images/placeholder-1.png",
        "/images/placeholder-2.png",
        "/images/placeholder-3.png",
    ];

    function makeSlides(image) {
        return (
            <div className="slide fade">
                <img src={image} />
            </div>
        );
    }

    function showSlides() {
        Array.from(slides).forEach((slide) => {
            slide.classList.add("none");
        })
        Array.from(slides)[slideIndex].classList.remove("none");
        console.log(slides);
    }

    function handlePrev() {
        slideIndex--;
        if (slideIndex < 0) { slideIndex = slides.length - 1 }
        showSlides()
    }

    function handleNext() {
        slideIndex++;
        if (slideIndex > slides.length - 1) { slideIndex = 0 }
        showSlides()
        console.log(slideIndex);
    }

    useEffect(() => {
        showSlides();
    }, [slides])

    return (
        <div className="slideshow">
            {images.map(makeSlides)}
            <a class="prev" onClick={handlePrev}>❮</a>
            <a class="next" onClick={handleNext}>❯</a>
            {/* <p class="caption">Caption 1 TODO</p> */}
        </div>
    );
}

export default Slideshow;