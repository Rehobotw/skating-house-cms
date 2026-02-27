import TextArea from "../ui/TextArea";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useEffect,useState } from "react";

export default function PricingSection() {
  const [pricing,setPricing]=useState({
    basic:{ title: "", body:"" ,price:""},
	  premium:{ title: "", body:"" ,price:""},
	  family:{ title: "", body:"" ,price:""}
  });
  useEffect(()=>{
    fetch("http://localhost:5000/api/pricing")
    .then((res)=>res.json())
    .then((data)=>{
     if (Array.isArray(data)&&data.length>0){
      setPricing(data[0]);
     }else{
      setPricing(data);
     }
  });
  },[]);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setPricing((prev)=>({
      ...prev,
      [name]:value
    }));
  };
  const handleUpdate=()=>{
    fetch("http://localhost:5000/api/pricing",{
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
    <div>
      <div className="pricing-container">
        <Card title="Basic">
          <div className="grid-2">
            <Input label="HEADLINE · EN" value={String(pricing.basic?.title||"")} onChange={handleChange}/>
            <Input label="ዋና ርዕስ · AM" />
          </div>
          <div className="grid-2">
                  <Input label="BODY · EN" value={String(pricing.basic?.body||"")} onChange={handleChange}/>
                  <Input label="ገለፃ · AM" />
          </div>
          <div className="price_section">
            <div className="grid-2">
              <Input label="price" placeholder={"100"} value={String(pricing.basic?.price||"")} onChange={handleChange}/>
            </div>
            <span className="price">ETB</span>
          </div>
        </Card>

        <Card title="Premium">
          <div className="grid-2">
            <Input label="HEADLINE · EN" value={String(pricing.premium?.title||"")} onChange={handleChange}/>
            <Input label="ዋና ርዕስ · AM" />
          </div>
          <div className="grid-2">
                  <Input label="BODY · EN" value={String(pricing.premium?.body||"")} onChange={handleChange} />
                  <Input label="ገለፃ · AM" />
          </div>
          <div className="price_section">
            <div className="grid-2">
              <Input label="price" placeholder={"100"} value={String(pricing.premium?.price||"")} onChange={handleChange}/>
            </div>
            <span className="price">ETB</span>
          </div>
        </Card>
        
        <Card title="Family">
          <div className="grid-2">
            <Input label="HEADLINE · EN" value={String(pricing.family?.title||"")} onChange={handleChange}/>
            <Input label="ዋና ርዕስ · AM" />
          </div>
          <div className="grid-2">
                  <Input label="BODY · EN" value={String(pricing.family?.body||"")} onChange={handleChange}/>
                  <Input label="ገለፃ · AM" />
                </div>
          <div className="price_section">
            <div className="grid-2">
              <Input label="price" placeholder={"100"} value={String(pricing.family?.price||"")} onChange={handleChange}/>
            </div>
            <span className="price">ETB</span>
          </div>
        </Card>
      </div>
      <Button onClick={handleUpdate}>Update</Button>
    </div>
  );
}
