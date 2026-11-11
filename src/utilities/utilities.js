const getDataFromLS = ()=>{
    const getStoredDataSTR = localStorage.getItem('installed');
    if(getStoredDataSTR){
        const getstoredData = JSON.parse(getStoredDataSTR);
        return getstoredData
    } else{
        return []
    }
}

const addDataToLS =(id)=>{
    const storedData = getDataFromLS();
    if(storedData.includes(id)){
        alert('already exist')
    }else{
        storedData.push(id);
        const data = JSON.stringify(storedData);
        console.log(data)
        localStorage.setItem('installed' ,data)
    }

}
export {addDataToLS,getDataFromLS}