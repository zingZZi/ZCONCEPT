import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function TrandBanner(props){
    let tabItems = props.trandItems;
    let [currentTab,setTab] = useState(0);
    
    useEffect(()=>{
        console.log(tabItems[currentTab])
    },[tabItems])
    return(
        <div className="tab">
            <nav className="tab-btn-wrap">
                {
                    tabItems.map((e,i)=>{
                        return(
                            <>
                                <button key={i} className={i===currentTab?"on":null} onClick={()=>{
                                    setTab(i)
                                }}>
                                    {e.contentsTitle1}
                                </button>
                            </>
                        )
                    })
                }
            </nav>
            <div className="category-items-banner">
                
                <Swiper
                    slidesPerView={5}
                    spaceBetween={18}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className='items-banner'
                >
                    <SwiperSlide>
                        <div className="img-wrap">
                            <img src="https://product-image.wconcept.co.kr/productimg/image/img9/11/306683211_LI40832.jpg?RS=310" alt="" />
                        </div>
                        <div className="item-info">
                            <b className="brand">Lancome</b>
                            <span>[5천원상품권]UV 엑스퍼트 50ml 듀오(파우치 증정)</span>
                            <div>
                                <strong>126,400</strong>
                                <em>20%</em>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="img-wrap">
                            <img src="https://product-image.wconcept.co.kr/productimg/image/img9/11/306683211_LI40832.jpg?RS=310" alt="" />
                        </div>
                        <div className="item-info">
                            <span className='title'>V&A BEAUTY</span>
                            <span className='sub-title'>단독 클리어런스 ~79%세일</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default TrandBanner;