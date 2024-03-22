import React from 'react' 

export default function ListPost({getAllUserData}) { 
    return ( 
        <div className="container text-center">
            <div className="row">
                { 
                    getAllUserData?.length>0 && getAllUserData.map((data,k)=>(
                        <div className="col-md-1 alert alert-success p-3 mt-5" key={k} style={{marginRight:'10px'}}>
                            <a href={`?id=${data._id}&role=2`} className="text-dark" style={{textDecoration:'none'}}> {data.name} </a> 
                        </div>
                    ))
                } 
            </div>
        </div> 
    )
}