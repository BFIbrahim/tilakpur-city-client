import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-96"
                style={{
                    backgroundImage: "url(https://i.postimg.cc/pdyLknmk/Banner.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                </div>
            </div>
        </div>
    );
};

export default Banner;