import { Downloadbutton } from "./Downloadbutton";
import "./Worktogether.css";

function Worktogether() {
    return(
        <div className="worktogether">
            <div className="worktogether-text">
                <h2>
                    Do you have any project idea? <br />    
                    Let's discuss your project together.
                </h2>
                <p>I'm here to help you bring your ideas to life.
                    Feel free to reach out for a chat!
                </p>
            </div>
            <div>
               <Downloadbutton
                    buttonTitle={"Let's Work together"}
                    // backgroundColor={"blueviolet"}
                    color={"#cacacaff"}
                    imagesrc={"./arrow.png"}
               />
            </div>
        </div>
    )
}
export default Worktogether;