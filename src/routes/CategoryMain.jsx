import axios from "axios";
import { useParams,useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Tab from "../components/Tab";
import TrandBanner from "./categoryMain/trandBanner";
import MdPickBannaer from "./categoryMain/MdPickBanner";
import BpBanner from "./categoryMain/BpBanner";
import BestItems from "./categoryMain/BestItems";

function CategoryMain(){
    let {pageid} = useParams();
    const [itemData,setItemData] = useState([]);
    let [mainBanner,setMainBanner] = useState([])
    let [subBanner,setSubBanner] = useState([]);
    let [trandItems,setTrandItems] = useState([]);
    let [mdItems,setmdItems] = useState([]);
    let [bpItems,setbpItems] = useState([]);
    let [bpTitle,setbpTitle] = useState('');
    let [brandsLists,setbrandsLists] = useState([]);
    let [bestItems,setBestItems] = useState([]);

    function dataCheck(e){
        setItemData(e);
        let subBannerIndex = e.findIndex((item) => item.areaTitle === "SUB BANNER");
        let mdIndex = e.findIndex((item) => item.areaSubType === "PD005");
        let bpIndex = e.findIndex((item) => item.areaType === "BP");
        let brandsIndex = e.findIndex((item) => item.areaSubType === "BN005");
        let bestIndex = e.findIndex((item) => item.areaSubType === "TP003");

        
        
        if(subBannerIndex === 2){
            setSubBanner(e[2].displayAreaContentsList);
        }else{
            setSubBanner([]);
        }
        setMainBanner(e[0].displayAreaContentsList)
        setTrandItems(e[3].displayAreaContentsList)
        setmdItems(e[mdIndex]?.displayAreaItemList || []);
        setbpItems(e[bpIndex]?.displayAreaContentsList || []);
        setbpTitle(e[bpIndex]?.areaTitle ||'추천 아이템')
        setbrandsLists(e[brandsIndex]?.displayAreaContentsList || []);
        setBestItems(e[bestIndex]?.displayRankingProductMediumRes.categoryList || []);
    }
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
                console.log(e)
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
                {
                    mainBanner.map((e,i)=>{
                        return(
                            <SwiperSlide key={i}>
                                <img src={`${e.imageFilePath}`} alt="" />
                                <div>
                                    <span className='title'>{e.contentsTitle1}</span>
                                    <span className='sub-title'>{e.contentsSubTitle1}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
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
                {
                   subBanner.length > 0
                   ? 
                    <div className="sub-banner">
                        {
                            subBanner.map((e,i)=>{
                                return(
                                    <div className="banner-wrap" key={i}>
                                        <div className="img-wrap">
                                            <img src={`${e.imageFilePath}`} alt="" />
                                        </div>
                                        <div className="text-info">
                                            <span className="title">{e.contentsTitle1}</span>
                                            <span className="sub-title">{e.contentsSubTitle1}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                   : null
                }
                <div className="category-trand">
                    <h3>TRENDING NOW</h3>
                    <TrandBanner trandItems={trandItems}/>
                </div>

                {/* MD PICK */}

                {
                    mdItems.length > 0
                    ?
                    <div className="category-md">
                        <h3>MD'S PICK</h3>
                        <MdPickBannaer mdItems={mdItems}/>
                    </div>
                    :null
                }
                
                
                <div className="category-pick">
                    <h3>{bpTitle}</h3>
                    <BpBanner bpItems={bpItems}/>
                </div>

                {
                    brandsLists.length > 0
                    ? 
                    <div className="category-brand">
                        <h3>BRANDS</h3>
                        <ul className="brand-lists">
                            {
                                brandsLists.map((e,i)=>
                                    i<5 && (
                                        <li>
                                            <div className="img-wrap">
                                                <img src={e.imageFilePath} alt="" />
                                            </div>
                                            <strong>{e.contentsTitle1}</strong>
                                        </li>
                                    )
                                )
                            }
                            
                        </ul>
                    </div>
                    : null
                }
                

                <div className="best-items">
                    <h3>BEST ITEM</h3>  
                    <BestItems bestItems={bestItems}/>
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