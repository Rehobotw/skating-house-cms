import { useEffect,useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function SessionSection() {
  const [session,setSession]=useState({
    title:"",
    content:""
  });

  useEffect(()=>{
    fetch("http://localhost:5000/api/session")
    .then((res)=>res.json())
    .then((data)=>{
     if (Array.isArray(data)&&data.length>0){
      setSession(data[0]);
     }else{
      setSession(data);
     }
  });
  },[]);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setSession((prev)=>({
      ...prev,
      [name]:value
    }));
  };
  const handleUpdate=()=>{
    fetch("http://localhost:5000/api/session",{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(session)
    })
    .then((res)=>res.json())
    .then((data)=>alert("updated successfully"))
    .catch((err)=>console.log(err));
  };

  return (
    <Card title="Session">
      <div className="grid-2">
        <Input label="HEADLINE · EN" name="title" value={String(session?.title||"")} onChange={handleChange} />
        <Input label="ዋና ርዕስ · AM" />
      </div>
      <div className="grid-2">
        <Input label="BODY · EN" name="content" value={session.content} onChange={handleChange}/>
        <Input label="ገለፃ · AM" />
      </div>
      <Button onClick={handleUpdate}>Update</Button>
    </Card>
  );
}
