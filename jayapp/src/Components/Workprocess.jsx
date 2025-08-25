import { Workcard } from './Workcard';
import './Workprocess.css';

// Work Process Section
function Workprocess() {
    return (
        <section className="workprocess">
            <div className="workprocess-container">
                <div className='work-description'>
                    <h2>Work Process</h2>
                    <p>
                        As a freelancer, delivering high-quality and effective
                        results starts with a structured, strategic workflow. My
                        process is designed to ensure clarity, creativity, and measurable
                        impact at every stage of the project.
                    </p>
                    <p>Our work process is designed to ensure efficiency and quality at every stage.</p>
                </div>
                {/* Work process steps */}
                <div className="work-step">
                    <div className='workcard1'>
                        <div>
                            <Workcard
                                imagesrc="./work1.png"
                                title="1. Research"
                                description="We begin by understanding your needs and goals through comprehensive research."
                            />
                        </div>
                        <div>
                            <Workcard
                                imagesrc="./work2.png"
                                title="2. Analyse"
                                backgroundColor="#33323380"
                                description="Identify patterns, opportunities, and challenges. Define the project scope and key deliverables."
                            />
                        </div>
                    </div>
                    <div className='workcard2'>
                        <div>
                            <Workcard
                                imagesrc="./work3.png"
                                title="3. Design"
                                backgroundColor="#33323380"
                                description="Start designing the actual solution, be it a visual concept, written content, a product prototype, or a digital asset."
                            />
                        </div> 
                        <div>
                            <Workcard
                                imagesrc="./work4.png"
                                title="4. Launch"
                                backgroundColor="#33323380"
                                description="Finalize the work and prepare for launch or delivery, quality checks and final revisions."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Workprocess;