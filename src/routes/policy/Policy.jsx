import { Outlet } from "react-router-dom";

function Policy(){
    return(
        <>
            <h2>정책페이지</h2>
            <Outlet/>
        </>
    )
}
export default Policy;