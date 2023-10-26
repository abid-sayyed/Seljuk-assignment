import React from 'react';
import data from './data.json';

const Card = ({ data }) => {
    return (
        <div className="max-w-sm rounded shadow-lg bg-white">
            <div className="max-w-sm rounded shadow-lg bg-white relative">
                {/* Your card content here using the 'data' prop */}
                <div className="relative">
                    <div className="transform transition-transform hover:scale-105">
                        <img className="w-full" src={data.image} alt={data.imageAlt} />
                    </div>
                </div>
                <img className="w-14 h-16 rounded-full absolute top-2/3 left-1/5 mt-10 ml-4" src={data.profileImage} alt={data.profileImageAlt} />
            </div>
            <div className="mx-20 text-left">
                <h1 className="font-semibold text-lg">
                    {data.name} <span className="px-5">📚</span>
                </h1>
                <p className="text-gray-700 text-sm">{data.specialization}</p>
                <p className="text-gray-700 text-sm">{data.rating}</p>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.title}</div>
                <p className="text-gray-700 text-base">{data.description}</p>
            </div>
            <div className="px-6 pt-4">
                {data.labels.map((label, index) => (
                    <span key={index} className="inline-block border-2 border-semibold-700 rounded-full px-2 text-sm text-semibold-700 mr-2">
                        {label}
                    </span>
                ))}
            </div>
            <div className="px-4">
                <div className="border-t border-gray-300 my-2"></div>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-500 px-4">💬 {data.comments}</span>
                    <span className="text-gray-500 px-4">👍 {data.likes}</span>
                    <button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border-2 border-black hover:border-transparent rounded mb-4">
                        Compartir 📩
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
