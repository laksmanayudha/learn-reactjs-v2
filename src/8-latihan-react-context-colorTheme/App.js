import React from "react";
import ToggleTheme from "./components/ToggleTheme";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/styles.css";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // theme: "light",
            // toggleTheme: () => {
            //     this.setState((prevState) => {
            //         return {
            //             theme: prevState.theme === "light" ? "dark" : "light"
            //         };
            //     });
            // },
            theme: localStorage.getItem("theme") || "light",
            toggleTheme: () => {
                this.setState((prevState) => {
                    // mendapatkan nilai tema baru berdasarkan state sebelumnya
                    const newTheme = prevState.theme === "light" ? "dark" : "light";
                    
                    // menyimpan nilai tema baru ke local storage
                    localStorage.setItem("theme", newTheme);

                    // mengembalikan state dengan nilai theme baru
                    return {
                        theme: newTheme
                    };
                });
            }
        };
    }

    componentDidMount() {
        document.documentElement.setAttribute("data-theme", this.state.theme);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.theme !== this.state.theme) {
            document.documentElement.setAttribute("data-theme", this.state.theme);
        }
    }

    render() {
        return (
            <ThemeProvider value={this.state}>
                <div className="container">
                    <ToggleTheme />
                    <p>Hello, {this.state.theme === 'light' ? 'Early Bird' : 'Night Owl'}.</p>
                </div>
            </ThemeProvider>
        )
    }
}

export default App;