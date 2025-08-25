import './header.css';

const Header = () => {
     return (
         // Header Section
         <header className="header">
            <div className="header-container">
                <div className="header-content">
                    <img src="./A (1).png" alt="Header Image" className="header-image"/>
                    <h1>Jess Damina</h1>
                </div>
                {/* Menu */}
                <nav className="header-nav">
                    <ul>
                        <li>Home</li>
                         <li>About</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;