import { createContext,useState } from 'react'
import { Routes, Route, Link , useNavigate, Outlet} from 'react-router-dom'
import './assets/scss/compile.scss'
import Policy from './routes/policy/Policy';
import Footer from './components/Footer';
import Company from './routes/about/Company';
import About from './routes/about/About';
import List from './routes/List';
import CategoryMain from './routes/CategoryMain';
import MainHeader from './components/MainHeader'

export let context1 = createContext()

function App() {


  return (
    <>
      <MainHeader/>
      
      {/* 페이지 정보 */}
      <Routes>
          <Route path='/' element={<div>메인</div>}/>
          <Route path="/category/:pageid" element={
            <CategoryMain/>
          }/>
          <Route path='/list' element={<List/>}/>
          <Route path='/detail' element={<div>상세페이지</div>}/>

          <Route path='/about' element={<About/>}>
            <Route path='company' element={<Company/>}/>
            <Route path='faq' element={<div>22</div>}/>
            <Route path='contact' element={<div>33</div>}/>
          </Route>

          <Route path='/policy' element={<Policy/>}>
            <Route path='customerPrivacy' element={<div>개인정보처리방침침</div>}/>
            <Route path='customerAgreement' element={<div>22</div>}/>
          </Route>

          <Route path='*' element={<div>404페이지</div>}/>
      </Routes>
      {/* 페이지 정보 */}
      
      <Footer/>
    </>
  )
}

export default App
