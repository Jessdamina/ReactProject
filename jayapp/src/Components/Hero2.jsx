import Button from './Button';
import './Hero2.css';

// Hero2 Section
function Hero2() {
    return (
        <section className='hero2-container'>
            <div className='hero2-content'>
                {/* hero2 image and social icons */}
                <div className='hero2-image-container'>
                    <img src="./hero1.jpg" alt="Hero-Image" className='hero1-image'/>
                    <div className='hero2-social-icons'>
                        <img src="./social1.png" alt="Social-Image" className='social1'/>
                        <img src="./social2.png" alt="Social-Image" className='social2'/>
                        <img src="./social3.png" alt="Social-Image" className='social3'/>
                        <div className='social4-container'>
                            <img src="./social4.png" alt="Social-Image" className='social4'/>
                        </div>
                        <img src="./social5.png" alt="Social-Image"/>
                    </div>
                </div>
                {/* hero2 text */}
                <div className='hero2-text'>
                    <h1>I am Professional SMM,</h1>
                    <h1>Graphics Designer and</h1>
                    <h1>Web Developer.</h1>
                    <div className='hero2-description'>
                        <p>with a passion for creating visually compelling content</p>
                        <p>that captures attention and drives results. I help top</p>
                        <p>brands tell their stories and connect with their potential</p>
                        <p>audience effectively.</p>
                    </div>
                    <div className='hero2-buttons'>
                        <Button buttonTitle={"My Projects"} color={"blueviolet"} />
                        <div className='hero2-download-container'>
                           <button className='hero2-download-button'>
                            <img src="./download.png" alt="Download CV" />
                            Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
}

export default Hero2;