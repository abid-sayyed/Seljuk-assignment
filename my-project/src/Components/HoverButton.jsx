import React from 'react';

function HoverButton() {
    return (
        <div className="flex gap-4">
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative border-2 border-solid border-blue-500 leading-none  divide-x text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    BOOK NOW
                </button>
            </div>

            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative text-white bg-gradient-to-r from-sky-400 from-33% via-blue-500 via-33% to-pink-500 to-33% font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    BOOK NOW
                </button>
            </div>
        </div>
    );
}

export default HoverButton;

