import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import LocaleContext from './contexts/LocaleContext';
import Community from './pages/Community';
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';

import './styles/style.css';

/**
 * @todos
 * 1. Buatlah fitur ubah bahasa dengan memanfaatkan Context.
 * 2. Pastikan Anda menggunakan fitur Hooks dalam memanfaatkan Context.
 *
 * Catatan:
 *  - Manfaatkan tombol yang berada di pojok kanan navigasi untuk mengubah bahasa.
 *  - Seluruh konten yang ditampilkan diambil dari utils -> content.js
 */

function App() {

  const [locale, setLocale] = React.useState("id");

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === "id" ? "en" : "id"
    });
  };

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale
    };
  }, [locale]);

  return (
    <>
        <BrowserRouter>
          <LocaleContext.Provider value={localeContextValue}>
            <header>
                <Navigation />
            </header>
            <main>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/community" element={<Community />} />
                </Routes>
            </main>
          </LocaleContext.Provider>
        </BrowserRouter>
    </>
  );
}

export default App;