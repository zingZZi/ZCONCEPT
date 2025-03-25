import { Swiper, SwiperSlide } from "swiper/react";

function BpBanner(props){
    let bpItems = props.bpItems;
    console.log(bpItems)
    return(
        <>
            <Swiper slidesPerView={3}
                spaceBetween={18}
                loop={false}
                navigation={true}
                className="itmes-lists">
                {
                    bpItems.map((e,i)=>{
                        let itemList = e.displayAreaContentsItemList
                        return(
                            <SwiperSlide key={i}>
                                <div className="brand-top">
                                    <div className="img-wrap">
                                        <img src={e.imageFilePath} alt="" />
                                    </div>
                                    <div className="brand-text">
                                        <strong>{e.contentsTitle1}</strong>
                                        <p>{e.contentsSubTitle1}</p>
                                    </div>
                                </div>
                                <div className="pick-item-lists">
                                    {itemList.map((el, index) =>
                                        index < 2 && (
                                            <div>
                                                <div className="img-wrap">
                                                    <img src={el.imageUrlMobile} alt="" />
                                                </div>
                                                <div className="item-info">
                                                    <b className="brand">{el.brandNameEn}</b>
                                                    <span>{el.itemName}</span>
                                                    <div className="price-info">
                                                        <strong>{el.finalPrice}</strong>
                                                        <em className="discont-font">{el.finalDiscountRate}%</em>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}
                                    
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}


export default BpBanner;