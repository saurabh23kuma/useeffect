import { useEffect, useState } from 'react'
import './App.css'
import { PostItem } from './component/postitem';

function App() {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] =useState(true);
  const [page,setPage]=useState(2); 
  useEffect(()=>{
   fetchData();



  },[page]);
  async function fetchData(){
     try {
      let res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10_page=${page}');
      let d1 = await res.json();
       setData(d1);
       setIsloading(false);
     } catch (error) {
      console.log(error);
     }




  }

  return (
    <>

    {isloading ? (<p>Data is loading... Please wait!</p>): 
    
    
    (
    <div>
    <PostItem data={data}/> 
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
       <button onClick={()=>{
        if (page>1){
          setPage(page-1)}}}>previous</button>
       <p>{page}</p>
       <button  onClick={()=>setPage(page+1)}>next</button>
    </div>
    </div>
    )}
    </>
  )
}

export default App
