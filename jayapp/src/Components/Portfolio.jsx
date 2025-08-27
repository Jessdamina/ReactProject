import Button from './Button';
import { Downloadbutton } from './Downloadbutton';
import './Portfolio.css'
import { Portfoliocard } from './Portfoliocard';

// Portfolio section component
function Portfolio() {
    return (
        // Portfolio Section
        <section className='portfolio-section'>
            <div className='portfolio'>
                <h2>Portfolio</h2>
                <div className='portfolio-intro'>
                    <p>
                        This is the portfolio section where I showcase my work.
                        Here you can find a selection of my projects and accomplishments.
                        Each work reflects a blend of innovation, functionality, and purposeful execution designed to meet real
                        needs and leave a lasting impact.
                    </p>
                </div>
                {/* Portfolio items will be mapped here */}
                <div className='portfolio-grid'>
                    <div className='portfolio-item'>
                        <Portfoliocard
                            imagesrc="./mieducation.png"
                            category="Social media page"
                            title="Mieducation"
                            description="A platform designed for educational purposes, connecting students and educators."
                            buttonTitle="Case Study"
                            backgroundColor="#313131"
                        />
                        <Portfoliocard 
                            imagesrc="./ashren.png" 
                            category="E-commerce website" 
                            title="Ashren" 
                            description="An e-commerce platform offering a seamless ready-to-wear shopping experience." 
                            buttonTitle="Case Study"
                            backgroundColor="#313131"
                        />
                        <Portfoliocard 
                            imagesrc="./latoy.png" 
                            category="Social media page" 
                            title="Latoy Catering Service" 
                            description="A social media platform designed for event planning and catering services." 
                            buttonTitle="Case Study"
                            backgroundColor="#313131"
                        />
                        <Portfoliocard
                            imagesrc="./jaylux.jpeg"
                            category="Social media page"
                            title="Jaylux"
                            description="Handles social media platform for different luxury brands."
                            buttonTitle="Case Study"
                            backgroundColor="#313131"
                        />
                    </div>
                    <div className='portfolio-item2'>
                        <Portfoliocard
                            imagesrc="./Lonani.png"
                            category="Social media page"
                            title="Lonani Allure"
                            description="A platform showcasing a unique clothing line with a focus on sustainability and style."
                            buttonTitle="Case Study"
                            backgroundColor="#313131"
                        />
                        <Portfoliocard
                            imagesrc="./estava.png"
                            category="Social media page"
                            title="Estava"
                            description="One stop online shopping store for children school supplies."
                            buttonTitle="Case Study"
                            backgroundColor="#313131"
                        />
                        <Portfoliocard
                            imagesrc="./jess.jpeg"
                            category="Web Developer"
                            title="Jess Damina"
                            description="A web developer specializing in creating responsive and user-friendly websites."
                            buttonTitle="Case Study"
                            backgroundColor="#313131"
                        />
                         <Portfoliocard 
                            imagesrc="./latoy.png" 
                            category="Social media page" 
                            title="Latoy Catering Service" 
                            description="A social media platform designed for event planning and catering services." 
                            buttonTitle="Case Study"
                            backgroundColor="#313131"
                        />
                    </div>
                </div>
                <div className='portfolio-button'>
                    <Button
                        buttonTitle={"View More"}
                        backgroundColor={"blueviolet"}
                    />
                </div>
            </div>
        </section>
    )
}
export default Portfolio;