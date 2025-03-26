import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';

function MdPickBannaer(props){
    let mdLists = props.mdItems
    let [item,setitem] = useState([]);

    useEffect(()=>{
        let list=()=>{
            setitem(mdLists)
        }
        list();
    },[mdLists])

    return(
        <div className="category-items-banner">
            <Swiper slidesPerView={4}
                spaceBetween={18}
                loop={false}
                navigation={true}
                modules={[Navigation]}
                className='items-banner'>
                {
                    item.map((e,i)=>{
                        return(
                            <SwiperSlide key={i}>
                                <div className="img-wrap">
                                    <img src={e.imageUrlMobile} alt="" />
                                </div>
                                <div className="item-info">
                                    <b className="brand">{e.brandNameEn}</b>
                                    <span>{e.itemName}</span>
                                    <div>
                                        <strong>{e.finalPrice}</strong>
                                        <em>{e.finalDiscountRate}%</em>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            
            
        </div>
    )
}

export default MdPickBannaer;