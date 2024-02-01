


export function PostItem({data}){
  

    return(<>
    <p>PostItem Component</p>
    {data.map((post)=>{
        return(
            <div style= {{border:"1px solid red",margin:"12px",padding:"12px"}}key={post.id}>
                <div style={{display:"flex",width:"100%"}}>
            <p style={{width:"20%"}}>{post.id}</p>
            <h3 style={{width:"80%"}}>{post.title}</h3>
            </div>
            <p>{post.body}</p>
            </div>
        );


    })}
   </>
);
}