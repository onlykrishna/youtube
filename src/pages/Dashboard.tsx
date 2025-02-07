import { useEffect, useState } from "react"

const Dashboard =()=>{
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>setLoading(false),3000)
    },[]);

    return loading ? <p>Loading heavy dashboard....</p> : <div>Dashboard Loaded</div>;
}

export default Dashboard;