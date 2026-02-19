import TextArea from "../ui/TextArea";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function ContactSection() {
    return (
        <Card title="Contact Information">
            <div className="grid-2">
                <Input label="Phone numbers" />
                <Input label="" />
            </div>
            <div className="grid-2">
                <Input label="Email" />
            </div>
            <div>
                <Input label="Address" />
                <Input label="" />
            </div>
            <h2>Social Links</h2>
            <div>
                <Input label="Facebook" />
                <Input label="TikTok" />
                <Input label="Telegram" />
            </div>
            <div className="grid-2">
                <Input label="Opening hours" />
            </div>
            <Button>Update</Button>
        </Card>
    );
}