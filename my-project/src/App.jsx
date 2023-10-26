import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HoverButton from "./Components/HoverButton.jsx";
import Registration from "./Components/Registration.jsx";
import CardCarousel from "./Components/CardCarousel.jsx";
import Card from "./Components/Card.jsx";

export default function App() {
    return (
        <>
        <div >
            <HoverButton />
            <Registration />
        </div>

            <div>
                <CardCarousel>
                    <Card />
                </CardCarousel>
            </div>
        </>

    )
}
