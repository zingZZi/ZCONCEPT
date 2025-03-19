import { Link, useNavigate } from "react-router-dom";

function Footer(){
    let navigate = useNavigate();
    return(
        <footer className="" >
            <div className="footer-container">
                <div className="footer-left-info">
                    <div>
                        <ul>
                            <li><button onClick={()=>{navigate('/about/company')}}>회사소개</button></li>
                            <li><button onClick={()=>{navigate('/about/company')}}>입점상담</button></li>
                            <li><button onClick={()=>{navigate('/about/company')}}>제휴문의</button></li>
                            <li><button onClick={()=>{navigate('/about/company')}}>채용정보</button></li>
                            <li><button onClick={()=>{navigate('/about/company')}}>GLOBAL</button></li>
                        </ul>
                        <ul>
                            <li><button onClick={()=>{navigate('/policy/customerPrivacy')}}>이용약관</button></li>
                            <li><button onClick={()=>{navigate('/policy/customerAgreement')}}>개인정보처리방침</button></li>
                        </ul>
                    </div>
                    <div className="bottom-info">
                        <div className="cs-link">
                            <h3>
                                고객센터
                            </h3>
                            <p>
                                <strong>1566-5027</strong>
                                <span>(09:00~18:00)</span>
                            </p>
                        </div>
                        <Link className="sns-link"><i className="icon instargram"></i></Link>
                    </div>
                </div>
                <div className="footer-right-info">
                    <div>
                        <h3>㈜더블유컨셉코리아</h3>
                        <ul>
                            <li>대표자 : 이주철</li>
                            <li>주소 : 서울특별시 영등포구 영신로34길 30, 1~2층 (영등포동, KB영등포타워)</li>
                            <li>사업자등록번호 : 211-88-19183</li>
                            <li>통신판매업신고 : 제2025-서울영등포-0492호 사업자정보확인</li>
                            <li>개인정보보호책임자 : 허선희</li>
                            <li>호스팅서비스 : ㈜더블유컨셉코리아</li>
                            <li>고객센터 : 1566-5027</li>
                            <li>이메일 : cs_help@wconcept.co.kr</li>
                            <li>운영시간 : 평일 09:00~18:00 (점심시간 : 12:30~13:30)</li>
                            <li>COPYRIGHT ⓒ ㈜더블유컨셉코리아 ALL RIGHTS RESERVED.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>소비자피해보상보험</h3>
                        <ul>
                            <li>고객님은 안전거래를 위해 현금 결제 시, Wconcept 에서 가입한 소비자피해보상보험 서비스를 이용하실 수 있습니다.</li>
                            <li>보상대상 : 미배송/반품, 환불거부/쇼핑몰부도서비스 가입사실 확인</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;