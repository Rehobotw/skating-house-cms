import TextArea from "../ui/TextArea";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useEffect,useState } from "react";

export default function AboutSection() {
     const [about,setAbout]=useState({
        content:""
      });
    
      useEffect(()=>{
        fetch("http://localhost:5000/api/about")
        .then((res)=>res.json())
        .then((data)=>{
         if (Array.isArray(data)&&data.length>0){
          setAbout(data[0]);
         }else{
          setAbout(data);
         }
      });
      },[]);
    
      const handleChange=(e)=>{
        const {name,value}=e.target;
        setAbout((prev)=>({
          ...prev,
          [name]:value
        }));
      };
      const handleUpdate=()=>{
        fetch("http://localhost:5000/api/about",{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(about)
        })
        .then((res)=>res.json())
        .then((data)=>alert("updated successfully"))
        .catch((err)=>console.log(err));
      };
    return (
        <Card title="About">
            <div className="grid-2">
                <TextArea label="BODY · EN" name="content" value={about.content} onChange={handleChange} />
                <TextArea label="ገለፃ · AM" />
            </div>
            <Button>Update</Button>
        </Card>
    );
}