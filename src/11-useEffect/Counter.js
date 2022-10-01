import React from "react";

// Secara default, React akan memanggil efek setiap kali setelah komponen di-render.
// untuk pertama kali, semua efek akan dipanggil

function Counter() {
    const [count, setCount] = React.useState(0);
    const [test, setTest] = React.useState(false);

    React.useEffect(() => {
        console.log('di dalam useEffect');
        console.log('only once')
    }, []);

    React.useEffect(() => {
        console.log('di dalam useEffect');
        console.log(`runing only state count changed, count: ${count}`);
    }, [count]);

    React.useEffect(() => {
        console.log('di dalam useEffect');
        console.log(`runing only state test changed, test: ${test}`);
    }, [test]);

    // infinite loop, karena di dalam effect terdapat aksi merubah state yang mentrigger re-render, kemudian useEffect akan terpanggil  kembali karena tidak ada dependensi (argumen kedua) yang mengendalikan state yang berubah
    // use
    // React.useEffect(() => {
    //     console.log('di dalam useEffect');
    //     console.log(`runing only state count changed, count: ${count}`);
    //     increase() // merubah state
    // });

    const increase = () => setCount((prevCount) => prevCount + 1);
    const decrease = () => setCount((prevCount) => prevCount - 1);

    console.log('rendering');

    return (
        <>
            <button onClick={increase}>increase</button>
            <p>Count: {count}</p>
            <button onClick={decrease}>decrease</button>
        </>
    );

}

export default Counter;

/*
    React.useEffect(() => {
        // Akan dijalankan pada render awal
        // dan akan dijalankan pada render selanjutnya.
    });
    
    React.useEffect(() => {
        // Akan dijalankan pada render awal
        // dan ketika "username" atau "locale" berubah.
    }, [username, locale]);
    
    React.useEffect(() => {
        // Akan dijalankan pada render awal
    }, []);
*/