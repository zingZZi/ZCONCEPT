function ItemList(props){
    return(
        <ul>
            {
                props.itemData.map((e,i)=>{
                    let imgsrcfolder = e.itemCd.substr(-2);
                    let infoTags = e.infoTags;
                    let rate =  Math.floor((e.customerPrice - e.finalPrice )/e.customerPrice * 100);
                   
                    
                    return(
                        <li key={i}>
                            <div className="img-wrap">
                                <img src={`https://product-image.wconcept.co.kr/productimg/image/img9/${imgsrcfolder}/${e.imageName}`} alt={`${e.itemName}`} />
                            </div>
                            <div className="item-info">
                                <b className="brand-name">{e.brandNameKr}</b>
                                <b className="item-name">{e.itemName}</b>
                                <div className="price-info">
                                    {
                                        e.customerPrice !== e.finalPrice 
                                        ?<><strong className="price">{e.customerPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong></> 
                                        :null
                                    }

                                    {
                                        e.customerPrice !== e.finalPrice 
                                        ?<b className="rate">{rate}&#37;</b> 
                                        :null
                                    }
                                    <strong className="final-price">
                                        {e.finalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    </strong>
                                </div>
                                <div className="cs-info">
                                    <div className="rate">
                                        <i className="icon star">별점</i>
                                        {e.reviewScore.toFixed(2)}<span>({e.reviewCnt})</span>
                                    </div>
                                    <div className="hart">
                                        <i className="icon fill-heart">찜한수</i>
                                        {
                                            e.heartCnt > 9999 
                                            ? <>9,999+</>
                                            : <>{e.heartCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</>
                                        }
                                    </div>
                                </div>
                                <div className="info-tags">
                                    {
                                        infoTags.map((e,i)=>{
                                            return(
                                                <span key={i}>{e}</span>
                                            )
                                        })
                                    }
                                </div>
                                
                                <button className="like-btn">
                                    <i className="icon heart_line"></i>
                                </button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default ItemList;