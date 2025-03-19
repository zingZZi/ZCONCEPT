import axios from "axios";
import { useParams,useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function CategoryMain(){
    let {pageid} = useParams();
    const [itemData,setItemData] = useState([]);
    //let copy = [...itemData];
    function dataCheck(e){
        setItemData(e)
    }
    useEffect(()=>{
        async function getData() {
            try{
                let test= `/categorydata/${pageid}.json`
                let response = await axios.get(test);
                let result = response.data[0].data.content;
                let copy = [ ...result]
                dataCheck(copy);
                console.log(copy)
            }
            catch(e){
                console.log('실패')
            }
        }
        getData();
    },[pageid]);
    return(
        <>
            <div className="main-container">
                <nav className="page-nav-bar">
                    <ul>
                        <li>홈</li>
                        <li><Title/></li>
                    </ul>
                </nav>
                <h2 className="page-title"><Title/></h2>
            </div>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={2}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className='category-banner'
                >
                <SwiperSlide>
                    <img src="https://wimage.wconcept.co.kr/msa/display/20250318152611068_5569.jpg" alt="" />
                    <div>
                        <span className='title'>V&A BEAUTY</span>
                        <span className='sub-title'>단독 클리어런스 ~79%세일</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://wimage.wconcept.co.kr/msa/display/20250313095235050_2003.jpg" alt="" />
                    <div>
                        <span className='title'>V&A BEAUTY</span>
                        <span className='sub-title'>단독 클리어런스 ~79%세일</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://wimage.wconcept.co.kr/msa/display/20250305153603922_1339.jpg" alt="" />
                    <div>
                        <span className='title'>V&A BEAUTY</span>
                        <span className='sub-title'>단독 클리어런스 ~79%세일</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://wimage.wconcept.co.kr/msa/display/20250317091437803_1685.jpg" alt="" />
                    <div>
                        <span className='title'>V&A BEAUTY</span>
                        <span className='sub-title'>단독 클리어런스 ~79%세일</span>
                    </div>
                </SwiperSlide>
            </Swiper>
            
        </>
        
    )
}


function Title(){
    let {pageid} = useParams();
    switch (pageid){
        case 'woman' :
            return <>여성</>
        case 'beauty' :
            return <>뷰티</>
        case 'life' :
            return <>라이프</>
        case 'kids' :
            return <>키즈</>
        case 'man' :
            return <>남성</>
        default : 
            return <>그냥 로그인</>
    }
}



export default CategoryMain;