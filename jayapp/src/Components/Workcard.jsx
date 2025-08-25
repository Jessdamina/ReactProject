// Workcard Component
export const Workcard = ({ imagesrc, title, description, backgroundColor }) => {
    return (
        <div className="work-card">
            <div className="work-image"  style={{ backgroundColor }}>
                <img src={imagesrc} alt="Work process image" className='work1-img' />
            </div>
            <div className="work-text">
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}