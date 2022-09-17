import React from "react";
import { BrowserRouter, Link, Route, Routes, useParams, useSearchParams } from "react-router-dom";

// pages
function HomePage() {
    return <p>This is HomePage</p>
}
function AboutPage() {
    return <p>This is AboutPage</p>
}
function FAQPage() {
    return <p>This is FAQPage</p>
}
function ProfilePage() {
    const { name } = useParams();
    return <p>Selamat datang {name} </p>;
}
function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');
    const location = searchParams.get('location')

    function updateNameUrlSearchParams(newValue) {
        setSearchParams({ name: newValue})
        // setSearchParams({ name: newValue, location: "Bali" })
    }
    
    return (
        <>
            <p>
                Mencari perusahaan {name} di {location}
            </p>
            <button onClick={() => { updateNameUrlSearchParams("dicoding updated") }}>update name url search params</button>
        </>
    )
}


function LearnReactRouter() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/faq" target="_blank">FAQ</Link></li>
                        <li><Link to="/profile/dede" >Profile Dede</Link></li>
                        <li><Link to="/search?location=bali&name=dicoding" >Search Bali</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/profile/:name" element={<ProfilePage />} />
                    <Route path="/search" element={<SearchPage />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default LearnReactRouter;