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
    const [test,setTest] = useState([]);
    function dataCheck(e){
        setItemData(e);
        setTest(e[0].displayAreaContentsList)
    }
    console.log(test)
    useEffect(()=>{
        async function getData() {
            try{
                let test= `/categorydata/${pageid}.json`
                let response = await axios.get(test);
                let result = response.data[0].data.content;
                let copy = [...result]
                dataCheck(copy);
            }
            catch(e){
                console.log('실패')
            }
        }
        getData();

    },[pageid]);



    return(
        <>
            {
                test.map((e,i)=>{
                    return(
                        <div key={i}>
                            {i}
                        </div>
                    )
                })
            }
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
            <div className="categorty-main main-container">
                <nav className="category-depth">
                    <ul>
                        <li><button className="on">전체</button></li>
                        <li><button>아우터</button></li>
                        <li><button>셔츠</button></li>
                        <li><button>티셔츠</button></li>
                    </ul>
                </nav>

                <div className="sub-banner">
                    <div className="banner-wrap">
                        <div className="img-wrap">
                            <img src="https://wimage.wconcept.co.kr/msa/display/20241216103753888_9184.jpg?RS=310" alt="" />
                        </div>
                        <div className="text-info">
                            <span className="title">SSG BEAUTY</span>
                            <span className="sub-title">SSG 뷰티 라이프 스타일 전문관</span>
                        </div>
                    </div>
                </div>

                <div className="category-trand">
                    <h3>TRENDING NOW</h3>
                    <nav className="tab-btn-wrap">
                        <ul>
                            <li className="on">럭셔리뷰티</li>
                            <li>스킨케어루틴</li>
                            <li>데일리 메이크업</li>
                        </ul>
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

                <div className="category-md">
                    <h3>MD'S PICK</h3>
                    <div className="category-items-banner">
                        <Swiper
                            slidesPerView={4}
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

                <div className="category-pick">
                    <h3>BEAUTY PICK</h3>
                    <div className="itmes-lists">
                        <div>
                            <div className="brand-top">
                                <div className="img-wrap">
                                    <img src="https://wimage.wconcept.co.kr/msa/display/20250317115857248_4690.jpg?RS=600" alt="" />
                                </div>
                                <div className="brand-text">
                                    <strong>narka</strong>
                                    <p>완전히 새로운 헤어 케어의 시작</p>
                                </div>
                            </div>

                            <div className="pick-item-lists">
                                <div>
                                    <div className="img-wrap">
                                        <img src="https://wimage.wconcept.co.kr/msa/display/20250317115857248_4690.jpg?RS=600" alt="" />
                                    </div>
                                    <div className="item-info">
                                        <b className="brand">narka</b>
                                        <span>[5천원상품권]UV 엑스퍼트 50ml 듀오(파우치 증정)</span>
                                        <div className="price-info">
                                            <strong>126,400</strong>
                                            <em className="discont-font">20%</em>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="category-brand">
                    <h3>BRANDS</h3>
                    <ul className="brand-lists">
                        <li>
                            <div className="img-wrap">
                                <img src="https://wimage.wconcept.co.kr/msa/display/20250317121326473_4543.jpg?RS=600" alt="" />
                            </div>
                            <strong>AMUSE</strong>
                        </li>
                    </ul>
                </div>
            </div>
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