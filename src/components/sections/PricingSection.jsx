import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { useEffect, useState } from "react";

export default function PricingSection() {
  const [pricing, setPricing] = useState({
    basic: { title: "", body: "", price: "" },
    premium: { title: "", body: "", price: "" },
    family: { title: "", body: "", price: "" },
  });

  // Fetch pricing data from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/pricing")
      .then((res) => res.json())
      .then((data) => {
        const p = Array.isArray(data) ? data[0] : data;

        setPricing({
          basic: p.basic || { title: "", body: "", price: "" },
          premium: p.premium || { title: "", body: "", price: "" },
          family: p.family || { title: "", body: "", price: "" },
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, dataset } = e.target;
    const plan = dataset.plan;

    setPricing((prev) => ({
      ...prev,
      [plan]: {
        ...prev[plan],
        [name]: value,
      },
    }));
  };

  // Send updated data to backend
  const handleUpdate = () => {
    fetch("http://localhost:5000/api/pricing", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pricing),
    })
      .then((res) => res.json())
      .then(() => alert("Updated successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="pricing-container">

        {/* BASIC */}
        <Card title="Basic">
          <Input
            label="HEADLINE · EN"
            name="title"
            data-plan="basic"
            value={pricing.basic.title}
            onChange={handleChange}
          />
          <Input
            label="BODY · EN"
            name="body"
            data-plan="basic"
            value={pricing.basic.body}
            onChange={handleChange}
          />
          <Input
            label="Price"
            name="price"
            data-plan="basic"
            value={pricing.basic.price}
            onChange={handleChange}
          />
        </Card>

        {/* PREMIUM */}
        <Card title="Premium">
          <Input
            label="HEADLINE · EN"
            name="title"
            data-plan="premium"
            value={pricing.premium.title}
            onChange={handleChange}
          />
          <Input
            label="BODY · EN"
            name="body"
            data-plan="premium"
            value={pricing.premium.body}
            onChange={handleChange}
          />
          <Input
            label="Price"
            name="price"
            data-plan="premium"
            value={pricing.premium.price}
            onChange={handleChange}
          />
        </Card>

        {/* FAMILY */}
        <Card title="Family">
          <Input
            label="HEADLINE · EN"
            name="title"
            data-plan="family"
            value={pricing.family.title}
            onChange={handleChange}
          />
          <Input
            label="BODY · EN"
            name="body"
            data-plan="family"
            value={pricing.family.body}
            onChange={handleChange}
          />
          <Input
            label="Price"
            name="price"
            data-plan="family"
            value={pricing.family.price}
            onChange={handleChange}
          />
        </Card>

      </div>

      <Button onClick={handleUpdate}>Update</Button>
    </div>
  );
}

