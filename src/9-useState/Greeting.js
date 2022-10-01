import React from "react";

function getExpensiveCount(){
    console.log("some expensive calculations");
    return "id";
}

function Greeting() {

    // const [locale, setLocale] = React.useState("id");

    // Tingkatkan Performa dengan Lazy State Initialization
    // berikan nilai fungsi pada useState untuk memberitahu react bahwa fungsi getExpensiveCount hanya butuh dipanggil satu kali saja.
    const [locale, setLocale] = React.useState(getExpensiveCount());


    // const changeToId = () => setLocale("id");
    // const changeToEn = () => setLocale("en");

    // Perubahan State Berjalan secara Asynchronous
    const changeToId = () => setLocale((prevState) => "id");
    const changeToEn = () => setLocale((prevState) => "en");

    return (
        <div>
            {locale === "id" ? (
                <>
                    <p>Selamat Pagi!</p>
                    <button onClick={changeToEn}>Translate</button>
                </>
            ) : (
                <>
                    <p>Good Morning!</p>
                    <button onClick={changeToId}>Terjemahkan</button>
                </>
            )}
        </div>
    )
}

export default Greeting;