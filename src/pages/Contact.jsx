import DashboardLayout from "../components/layout/DashboardLayout";
import PageHeader from "../components/layout/PageHeader";
import ContactSection from "../components/sections/ContactSection";
import { useEffect,useState } from "react";

export default function Contact() {
  const [contacts,setContacts]=useState([]);
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
  });
  useEffect(()=>{
    fetch("http://localhost:5000/api/contact")
    .then(res=>res.json())
    .then(data=>setContacts(data))
    .catch(err=>console.error("Error fetching contacts:",err));
  },[]);
  const handlechange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const response=await
      fetch("http://localhost:5000/api/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      });
      const data=await response.json();
      console.log("message saved:",data);
      setFormData({
        name:"",
        email:"",
        message:""
      });
    }catch(error){
      console.error("Error submitting form:",error);
    }
  };
  
    return (
        <DashboardLayout>
            <PageHeader
                title="Contact"
                subtitle="Manage contact information and social links"
            />
            <ContactSection />
        </DashboardLayout>
    );
}
