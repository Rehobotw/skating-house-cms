import TextArea from "../ui/TextArea";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function PricingSection() {
    return (
        <div>
            <div className="pricing-container">
                <Card title="Basic">
                    <div className="grid-2">
                        <Input label="HEADLINE · EN" />
                        <Input label="ዋና ርዕስ · AM" />
                    </div>
                    <div className="grid-2">
                        <Input label="price" />
                        <span className="price">ETB</span>
                    </div>
                    <label>FEATURES</label>
                    <div className="grid-2">
                        <Input label="" />
                        <Input label="" />
                    </div>
                    <div className="grid-2">
                        <Input label="" />
                        <Input label="" />
                    </div>
                    <div className="grid-2">
                        <Input label="" />
                        <Input label="" />
                    </div>
                </Card>
                <Card title="Premium">
                    <div className="grid-2">
                        <Input label="HEADLINE · EN" />
                        <Input label="ዋና ርዕስ · AM" />
                    </div>
                    <div className="grid-2">
                        <Input label="price" />
                        <span className="price">ETB</span>
                    </div>
                    <label>FEATURES</label>
                    <div className="grid-2">
                        <Input label="" />
                        <Input label="" />
                    </div>
                    <div className="grid-2">
                        <Input label="" />
                        <Input label="" />
                    </div>
                    <div className="grid-2">
                        <Input label="" />
                        <Input label="" />
                    </div>
                </Card>
                <Card title="Family">
                    <div className="grid-2">
                        <Input label="HEADLINE · EN" />
                        <Input label="ዋና ርዕስ · AM" />
                    </div>
                    <div className="grid-2">
                            <Input label="price" />
                        <span className="price">ETB</span>
                    </div>
                    <label>FEATURES</label>
                    <div className="grid-2">
                        <Input label="" />
                        <Input label="" />
                    </div>
                    <div className="grid-2">
                        <Input label="" />
                        <Input label="" />
                    </div>
                    <div className="grid-2">
                        <Input label="" />
                        <Input label="" />
                    </div>
                </Card>
            </div>
            <Button>Update</Button>
        </div>
    );
}