import { Outlet } from "react-router-dom";

function About(){
    return(
        <div className="about-container">
            <h2>title영역</h2>
            <Outlet></Outlet>
        </div>
    );
}
export default About