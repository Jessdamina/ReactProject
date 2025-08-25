import './Hero.css';

function Hero() {
    return (
        <section className="hero-container">
            <img src="./Ellipse 3.png" alt="Hero-gradient" className="herogradientblue"/>
            <img src="./Ellipse 4.png" alt="Hero-gradient" className="herogradientpurple"/>
            <img src="./Ellipse 1.png" alt="Hero-gradient" className="herogradientyellow"/>
            <div className="hero-content">
                <div className='hero-text'>
                    <h1>Hello, I'm</h1>
                    <h1>Jessica Damina</h1>
                    <p>Your journey to excellence starts here. I am a dedicated and passionate</p>
                    <p>web developer with over 5 years of excellent experience in creating</p> 
                    <p>stunning and functional websites. Let's build something amazing together.</p>
                    <button className='hero-button'>Say Hello</button>
                    <div className='hero-stats'>
                        <div className='hero-stat'>
                            <h3>5Y</h3>
                            <p>Experience</p>
                        </div>
                        <div>
                            <h3>110+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <h3>38</h3>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="./hero2.jpg" alt="Hero-Image" className='hero-image'/>
                </div>
            </div>
        </section>
     )
}

export default Hero;