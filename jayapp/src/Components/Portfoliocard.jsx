// portfolio card component
import { Downloadbutton } from "./Downloadbutton";
export const Portfoliocard = ({ imagesrc, category, title, description, buttonTitle, backgroundColor }) => {
    return (
        <div className='portfolio-card'>
            <img src={imagesrc} alt='Portfolio image' className='portfolio-image'/>
            <p style={{ fontStyle: 'italic', fontSize: '0.7rem', color: '#525151ff' }}>{category}</p>
            <h3>{title}</h3>
            <p style={{ fontSize: '0.7rem', fontStyle: 'italic', color: '#b4b3b4' }}>
                {description}
            </p>
            <Downloadbutton buttonTitle={buttonTitle} backgroundColor={backgroundColor} imagesrc="./arrow.png" />
        </div>
    );
};
