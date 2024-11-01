import React, {useEffect, useState} from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 120) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            className={`btn-circle ${isVisible ? 'show' : ''}`}
            onClick={scrollToTop}
            style={{position: 'fixed', bottom: '2rem', right: '0.5rem'}} // 固定在右下角
        >
            <svg className="h-6 w-6" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M764.326842 459.350896c-7.992021 7.992021-20.947078 7.992021-28.949332 0l-187.776687-187.78692 0 603.904153c0 11.2973-9.15859 20.466124-20.466124 20.466124s-20.466124-9.168824-20.466124-20.466124l0-603.904153-187.78692 187.797154c-3.990894 3.990894-9.230222 5.986341-14.46955 5.986341s-10.468422-1.995447-14.46955-5.986341c-7.992021-8.002254-7.992021-20.957311 0-28.949332l222.722594-222.722594c3.837398-3.837398 9.046027-5.996574 14.46955-5.996574 5.433756 0 10.642384 2.159176 14.479783 5.996574l222.712361 222.712361C772.318864 438.393585 772.318864 451.348642 764.326842 459.350896z"
                    fill="currentColor"
                ></path>
                <path
                    d="M842.875826 150.384056c0 11.2973-9.15859 20.466124-20.466124 20.466124l-590.550007 0c-11.307533 0-20.466124-9.168824-20.466124-20.466124 0-11.307533 9.15859-20.466124 20.466124-20.466124l590.550007 0C833.717236 129.917932 842.875826 139.076522 842.875826 150.384056z"
                    fill="currentColor"
                ></path>
            </svg>
        </button>
    )
        ;
};

export default BackToTopButton;