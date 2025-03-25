import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function TrandBanner(props){
    let tabItems = props.trandItems;
    let [currentTab,setTab] = useState(0);
    let [nowTabContent,setTabContent] = useState([]);
    
    useEffect(()=>{
        let tabItemsList=()=>{
            if(tabItems.length>0){
                setTabContent(tabItems[currentTab].displayAreaContentsItemList)
            }
        }
        tabItemsList()
    },[tabItems,currentTab])
    return(
        <div className="tab">
            <nav className="tab-btn-wrap">
                {
                    tabItems.map((e,i)=>{
                        return(
                            <button key={i} className={i===currentTab?"on":null} onClick={()=>{
                                setTab(i)
                            }}>
                                {e.contentsTitle1}
                            </button>
                        )
                    })
                }
            </nav>
            <div className="category-items-banner">
                <Swiper slidesPerView={5}
                    spaceBetween={18}
                    navigation={true}
                    modules={[Navigation]}
                    className='items-banner'
                >
                {
                    nowTabContent.map((e,i)=>{
                        return(
                            <SwiperSlide key={i}>
                                <div className="img-wrap">
                                    <img src={e.imageUrlMobile} alt="" />
                                </div>
                                <div className="item-info">
                                    <span className='title'>{e.brandNameEn}</span>
                                    <span className='sub-title'>{e.itemName}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

                </Swiper>
                
            </div>
        </div>
    )
}
export default TrandBanner;