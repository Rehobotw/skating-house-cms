import TextArea from "../ui/TextArea";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useEffect,useState } from "react";

export default function FooterSection() {
   const [footer,setFooter]=useState({
       socialLinks:{ facebook: "", tiktok:"" ,telegram:""},
    });
  
    useEffect(()=>{
      fetch("http://localhost:5000/api/footer")
      .then((res)=>res.json())
      .then((data)=>{
       if (Array.isArray(data)&&data.length>0){
        setFooter(data[0]);
       }else{
        setFooter(data);
       }
    });
    },[]);
  
    const handleChange=(e)=>{
      const {name,value}=e.target;
      setFooter((prev)=>({
        ...prev,
        [name]:value
      }));
    };
    const handleUpdate=()=>{
    fetch("http://localhost:5000/api/footer",{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(footer)
    })
    .then((res)=>res.json())
    .then((data)=>alert("updated successfully"))
    .catch((err)=>console.log(err));
  };
  return (
    <Card title="Footer">
      <h3 className="section-subtitle">Social Links</h3>
      <div className="social-grid">
        <Input label="Facebook" name="facebook" value={String(footer.socialLinks?.facebook||"")} onChange={handleChange}/>
        <Input label="TikTok" name="tiktok" value={String(footer.socialLinks?.tiktok||"")} onChange={handleChange}/>
        <Input label="Telegram" name="telegram" value={String(footer.socialLinks?.telegram||"")} onChange={handleChange}/>
      </div>
      <Button onClick={handleUpdate}>Update</Button>
    </Card>
  );
}