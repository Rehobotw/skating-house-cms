import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useEffect,useState } from "react";

export default function ContactSection() {
    const [contact,setContact]=useState({
        socialLinks:{ facebook: "", tiktok:"" ,telegram:""},
	    ContactAdress:{ phone: "", address:"" ,googleMapLink:""},

      });
    
      useEffect(()=>{
        fetch("http://localhost:5000/api/contact")
        .then((res)=>res.json())
        .then((data)=>{
         if (Array.isArray(data)&&data.length>0){
          setContact(data[0]);
         }else{
          setContact(data);
         }
      });
      },[]);
    
      const handleChange=(e)=>{
        const {name,value}=e.target;
        setContact((prev)=>({
          ...prev,
          [name]:value
        }));
      };
      const handleUpdate=()=>{
        fetch("http://localhost:5000/api/contact",{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(contact)
        })
        .then((res)=>res.json())
        .then((data)=>alert("updated successfully"))
        .catch((err)=>console.log(err));
      };
    
    return (
        <Card title="Contact Information">
            <h3 className="section-subtitle">Social Links</h3>
            <div className="social-grid">
                <Input label="Facebook" value={String(contact.socialLinks?.facebook||"")} onChange={handleChange}/>
                <Input label="TikTok" value={String(contact.socialLinks?.tiktok||"")} onChange={handleChange}/>
                <Input label="Telegram" value={String(contact.socialLinks?.telegram||"")} onChange={handleChange}/>
            </div>
            <h3 className="section-subtitle">Contact and Location</h3>
            <div className="grid-2">
                <Input label="Phone numbers" value={String(contact.socialLinks?.phone||"")} onChange={handleChange}/>
            </div>
            <div className="grid-2">
                <Input label="Address" value={String(contact.socialLinks?.address||"")} onChange={handleChange} />
                <Input label="google-map link" value={String(contact.socialLinks?.googleMapLink||"")} onChange={handleChange}/>
            </div>
            
            <Button onClick={handleUpdate}>Update</Button>
        </Card>
    );
}