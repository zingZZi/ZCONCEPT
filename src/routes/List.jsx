import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";

function List(){
    let [itemData,setItemData] = useState([])
    useEffect(()=>{
        async function getData() {
            try{
                const response = await axios.get('/test/womanBag.json');
                const result = response.data;
                let copy = [...itemData, ...result]
                setItemData(copy);
            }
            catch(e){
                console.log('실패')
            }
        }
        getData();
    },[]);
    return(
        <div className="list-page main-container">
            <nav className="page-nav-bar">
                <ul>
                    <li>홈</li>
                    <li>여성</li>
                    <li>의류</li>
                </ul>
            </nav>

            <h2 className="page-title">아우터</h2>

            <nav className="category-depth">
                <ul>
                    <li><button className="on">전체</button></li>
                    <li><button>아우터</button></li>
                    <li><button>셔츠</button></li>
                    <li><button>티셔츠</button></li>
                </ul>
            </nav>

            <div className="item-list">
                <ItemList itemData={itemData}/>
            </div>
        </div>
    )
}

export default List;