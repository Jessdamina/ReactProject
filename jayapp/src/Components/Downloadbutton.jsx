// Download and Case study buttons
export const Downloadbutton = ({ buttonTitle, backgroundColor, imagesrc, color }) => {
    return (
        <div className='hero2-download-container'>
            <button className='hero2-download-button' style={{ backgroundColor, color }}>
                <img src={imagesrc} />
                {buttonTitle}
            </button>
        </div>
    );
};