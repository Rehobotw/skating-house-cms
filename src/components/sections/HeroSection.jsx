import TextArea from "../ui/TextArea";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useEffect,useState } from "react";

export default function HeroSection() {
    const [hero,setHero]=useState({
        title:"",
        content:""
      });
    
      useEffect(()=>{
        fetch("http://localhost:5000/api/hero")
        .then((res)=>res.json())
        .then((data)=>{
         if (Array.isArray(data)&&data.length>0){
          setHero(data[0]);
         }else{
          setHero(data);
         }
      });
      },[]);
    
      const handleChange=(e)=>{
         console.log("handleChange called",e.target.name,e.target.value);
        const {name,value}=e.target;
        setHero(prev=>({
          ...prev,
          [name]:value
        }));
      };
      const handleUpdate=()=>{
        fetch("http://localhost:5000/api/hero",{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(hero)
        })
        .then((res)=>res.json())
        .then((data)=>{
          alert("updated successfully");
           if (Array.isArray(data)&&data.length>0){
           setHero(data[0]);
            }else{
          setHero(data);
            }
         })
        .catch((err)=>console.log(err));
      };
    return (
        <Card title="Hero">
            <div className="grid-2">
                <Input label="HEADLINE · EN" name="title" value={String(hero?.title||"")} onChange={handleChange}/>
                <Input label="ዋና ርዕስ · AM" />
            </div>
            <div className="grid-2">
                <TextArea label="BODY · EN" name="content" value={String(hero.content||"")} onChange={handleChange}/>
                <TextArea label="ገለፃ · AM" />
            </div>
            <Button onClick={handleUpdate}>Update</Button>
        </Card>
    );
}