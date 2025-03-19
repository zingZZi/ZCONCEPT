import { useState } from 'react'
import { Routes, Route, Link , useNavigate, Outlet} from 'react-router-dom'
import gnbdata from './../data/gnbdata'
import { useDispatch, useSelector } from 'react-redux';
import { gnbState } from '../store';
function MainHeader(){
    let [gnb,setGnb] = useState(false);
    let [gnbData] = useState(gnbdata);
    let [gnbFocusNum,setgnbFocusNum] = useState(0);
    let gnbClose = function(){
        setGnb(false)
        setgnbFocusNum(0)
    }
    let navigate = useNavigate();
    
    let dispatch = useDispatch()
    let a = useSelector((state)=>{
        return state
    })
    return(
        <>
            <div className='main-hader'>
                <nav>
                <div className='hader-top'  onMouseEnter={()=>{gnbClose}}>
                    <h1 onClick={()=>{navigate('/')}}>WCONCEPT</h1>
                    <div className='top-link-icons'>
                    {/* <Link to="/" className='icon logout'></Link> */}
                    <Link to="/member/zzim" className='icon hart'>찜</Link>
                    {/* <Link to="/member/mypage" className='icon mypage'></Link> */}
                    <Link to="/member/cart" className='icon cart'>장바구니</Link>
                    </div>
                </div>
                <div className='hader-bottom'>
                    <div>
                    <div className='gnb-btn-wrap' onMouseEnter={()=>{setGnb(true)}}>
                        <button className='gnb-btn'></button>
                    </div>
                    {
                        gnb === false 
                        ? null 
                        :  
                        <div className='gnb-box-wrap' onMouseEnter={()=>{setGnb(true)}}  onMouseLeave={gnbClose}>
                        <div className='gnb-box'>
                            <div className='gnb-lists'>
                            <div className='new-gnb-inner'>
                                <ul className='gnb-depth1-box'>
                                {
                                    gnbData.map((e,i)=>{
                                        let depth2 = e.categores_depth2;
                                        let depth1Path = e.categoryId;
                                        let depth1Name = e.name;
                                        return(
                                        <li key={i} className={`${i === gnbFocusNum ? "active" : ""}`}>
                                            <button className='gnb_depth1'  
                                                    onClick={()=>{
                                                        dispatch(gnbState(e));
                                                        navigate(`category/${depth1Path}`)
                                                    }}
                                                    onMouseEnter={(a,b)=>{
                                                setgnbFocusNum(i)
                                            }}>
                                                {e.name}
                                            </button>
                                            <ul className='gnb-depth2-box'>
                                                {
                                                    depth2.map((e,i)=>{
                                                        return(
                                                        <li key={i}>
                                                            <button onClick={()=>{
                                                                navigate(`category/${depth1Path}`)
                                                            }}>{e.name}</button>
                                                            <ul className='gnb-depth3-lists'>
                                                                {
                                                                    e.categores_depth3.map((e,i)=>{
                                                                    return(
                                                                        <li key={i}><Link to="" className='gnb_depth3'>{e.name}</Link></li>
                                                                    )
                                                                    })
                                                                }
                                                            </ul>
                                                        </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    )
                                    })
                                }
                                </ul>
                            </div>
                            </div>
                            <div className='rignt-lists'>
                            <div>
                                <h3>테마전문관</h3>
                                <ul>
                                <li>LABEL</li>
                                <li>캐주얼관</li>
                                <li>액티브관</li>
                                <li>럭셔리관</li>
                                <li>아울렛관</li>
                                <li>시코르</li>
                                <li>SG뷰티</li>
                                <li>오프라인매장</li>
                                </ul>
                            </div>
                            <div>
                                <h3>추천서비스</h3>
                                <ul>
                                <li>스타일클립</li>
                                <li>브랜드</li>
                                <li>기획전</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    }
                    <div className='gnb-sub-nav' onMouseEnter={()=>{setGnb(false)}}>
                        <ul>
                        <li><a href="">봄스타일링</a></li>
                        <li><a href="">베스트</a></li>
                        <li><a href="">세일</a></li>
                        <li><a href="">신상</a></li>
                        <li><a href="">추천</a></li>
                        <li><a href="">단독</a></li>
                        <li><a href="">발견</a></li>
                        </ul>
                        <ul>
                        <li><a href="">여성</a></li>
                        <li><a href="">뷰티</a></li>
                        <li><a href="">라이프</a></li>
                        <li><a href="">키즈</a></li>
                        <li><a href="">남성</a></li>
                        </ul>
                    </div>
                    </div>
                    <form action="">
                    <input type="input" />
                    <button className='icon search'></button>
                    </form>
                </div>
                </nav>
            </div>
        </>
    )
}

export default MainHeader;