import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useEffect, useState } from "react";

export default function ContactSection() {
  const [contact, setContact] = useState({
    socialLinks: { facebook: "", tiktok: "", telegram: "" },
    ContactAdress: { phone: "", address: "", googleMapLink: "" },
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/contact")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setContact(data[0]);
        } else {
          setContact(data);
        }
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["facebook", "tiktok", "telegram"].includes(name)) {
      setContact((prev) => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [name]: value,
        },
      }));
    } else {
      setContact((prev) => ({
        ...prev,
        ContactAdress: {
          ...prev.ContactAdress,
          [name]: value,
        },
      }));
    }
  };

  const handleUpdate = () => {
    fetch("http://localhost:5000/api/contact", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then(() => alert("Updated successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <Card title="Contact Information">
      <h3 className="section-subtitle">Social Links</h3>
      <div className="social-grid">
        <Input
          label="Facebook"
          name="facebook"
          value={contact.socialLinks?.facebook || ""}
          onChange={handleChange}
        />
        <Input
          label="TikTok"
          name="tiktok"
          value={contact.socialLinks?.tiktok || ""}
          onChange={handleChange}
        />
        <Input
          label="Telegram"
          name="telegram"
          value={contact.socialLinks?.telegram || ""}
          onChange={handleChange}
        />
      </div>

      <h3 className="section-subtitle">Contact and Location</h3>

      <div className="grid-2">
        <Input
          label="Phone numbers"
          name="phone"
          value={contact.ContactAdress?.phone || ""}
          onChange={handleChange}
        />
      </div>

      <div className="grid-2">
        <Input
          label="Address"
          name="address"
          value={contact.ContactAdress?.address || ""}
          onChange={handleChange}
        />
        <Input
          label="Google Map link"
          name="googleMapLink"
          value={contact.ContactAdress?.googleMapLink || ""}
          onChange={handleChange}
        />
      </div>

      <Button onClick={handleUpdate}>Update</Button>
    </Card>
  );
}