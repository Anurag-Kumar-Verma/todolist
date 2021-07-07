import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        top: "100%",
        width: '100%'
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p>Copyright &copy; <a className="btn-link" href="https://www.github.com/Anurag-Kumar-Verma">Anurag Kumar</a></p>
        </footer>
    )
}

export default Footer