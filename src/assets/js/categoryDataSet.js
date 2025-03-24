function dataCheck(e){
    setItemData(e);
    console.log(e.findIndex((item) => item.areaTitle === "SUB BANNER"))
   
    setMainBanner(e[0].displayAreaContentsList)
    setSubBanner(e[2].displayAreaContentsList)
}

export default dataCheck;