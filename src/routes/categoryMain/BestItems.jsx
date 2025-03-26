import { useEffect, useState } from "react";

function BestItems(props){
    let allBestItems = props.bestItems
    let [tabIndex,setTabIndex] = useState(0);
    let [tabItemLits,setTabItemLits] = useState([]);
    let [lankIndex,setLankIndex] = useState(1);
    useEffect(()=>{
        let bb = allBestItems[tabIndex]?.displayProductRes || [];
        let copyArray = [...bb]
        if(lankIndex===1){
            setTabItemLits(copyArray.slice(0,9))
        }else{
            setTabItemLits(copyArray.slice(9,18))
        }
        
    },[allBestItems,tabIndex,lankIndex])

    return(
        <div className="tab">
            <nav className="tab-btn-wrap">
                {
                    allBestItems.map((e,i)=>{
                        return(
                            <button key={i} className={tabIndex === i ? "on" : null} onClick={()=>{
                                setTabIndex(i),setLankIndex(1)
                            }}>
                                {e.categoryName}
                            </button>
                        )
                    })
                }
            </nav>
            <div className="best-items-wrap">
                <div className="best-itmes-lists">
                    {
                        tabItemLits.map((e,i)=>{
                            return(
                                <div className="best-item-list">
                                    <div className="img-wrap">
                                        <img src={e.imageUrlMobile} alt="" />
                                        <span className="lank-num">{i+lankIndex}</span>
                                    </div>
                                    <div className="item-info">
                                        <b className="brand">{e.brandNameEn}</b>
                                        <span>{e.itemName}</span>
                                        <div>
                                            <strong>{e.finalPrice}</strong>
                                            <em>{e.finalDiscountRate}%</em>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <ul className="lank-tab">
                    <li><button onClick={()=>{setLankIndex(1)}}>1~9위</button></li>
                    <li><button onClick={()=>{setLankIndex(10)}}>10~18위</button></li>
                </ul>
            </div>
        </div>
    )
}

export default BestItems;