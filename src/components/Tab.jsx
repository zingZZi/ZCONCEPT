import { useState } from "react";

function Tab(){
    let [tab,setTab]= useState(0)
    return(
        <div className="tab">
            <nav className="tab-btn-wrap">
                <button className="on">럭셔리뷰티</button>
                <button>럭셔리뷰티</button>
                <button>럭셔리뷰티</button>
            </nav>
            <TabContent/>
        </div>
    )
}
function TabContent(){
    return(
        <>
            <div className="tab-content">
                <div>
                    1
                </div>
                <div>
                   2
                </div>
                <div>
                   3
                </div>
            </div>
        </>
    )
}
export default Tab;