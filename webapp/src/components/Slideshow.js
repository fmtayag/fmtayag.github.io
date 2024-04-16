import { useEffect } from 'react';
import '../styles/Slideshow.css';

const Slideshow = ({images}) => {
    let slideIndex = 0;
    let slides; 
    slides = document.getElementsByClassName("slide");

    function makeSlides(image, index) { // Note: 'index' is provided by Array.map() callback
        return (
            <div className="slide fade" key={index}>
                <img src={image}/>
            </div>
        );
    }

    function showSlides() {
        Array.from(slides).forEach((slide) => {
            slide.classList.add("none");
        })
        Array.from(slides)[slideIndex].classList.remove("none");
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
    }

    useEffect(() => {
        showSlides();
    }, [slides, images])

    return (
        <div className="slideshow">
            {images.map(makeSlides)}
            <a className="prev" onClick={handlePrev}>❮</a>
            <a className="next" onClick={handleNext}>❯</a>
            {/* <p class="caption">Caption 1 TODO</p> */}
        </div>
    );
}

export default Slideshow;