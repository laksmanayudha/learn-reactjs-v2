import React from "react";
import PropTypes from "prop-types";

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

// components
function Link({ target, navigate, children }) {
    return (
        <a
            href={target}
            onClick={(event) => {
                window.history.pushState({}, "", target)
                event.preventDefault();
                navigate(target); //mengubah state berdasarkan target
            }}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    target: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
};

class LatihanSPA extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            page: "/"
        };
        
        this.navigate = this.navigate.bind(this);
    }

    navigate(target) {
        this.setState(() => {
            return {
                page: target
            }
        });
    }

    render() {
        return (
            <>
                <header>
                    <ul>
                        <li>
                            <Link target="/" navigate={this.navigate} >Home</Link>
                        </li>
                        <li>
                            <Link target="/about" navigate={this.navigate} >About</Link>
                        </li>
                        <li>
                            <Link target="/faq" navigate={this.navigate} >FAQ</Link>
                        </li>
                    </ul>
                </header>
                <main>
                    {this.state.page == '/' && <HomePage />}
                    {this.state.page == '/about' && <AboutPage />}
                    {this.state.page == '/faq' && <FAQPage />}
                </main>
            </>
        )
    }
}

export default LatihanSPA;