import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function ContactSection() {
    return (
        <Card title="Contact Information">
            <div className="grid-2">
                <Input label="Phone numbers" />
                <Input label="Email" />
            </div>
            <div className="grid-2">
                <Input label="Address" />
                <Input label="Opening hours" />
            </div>
            <h3 className="section-subtitle">Social Links</h3>
            <div className="social-grid">
                <Input label="Facebook" />
                <Input label="TikTok" />
                <Input label="Telegram" />
            </div>
            <Button>Update</Button>
        </Card>
    );
}