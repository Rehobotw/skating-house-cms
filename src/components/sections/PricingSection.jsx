import TextArea from "../ui/TextArea";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function HeroSection() {
    return (
        <div className="pricing-container">
            <Card title="Basic">
                <div className="grid-2">
                    <Input label="HEADLINE · EN" />
                    <Input label="ዋና ርዕስ · AM" />
                </div>
                <div className="grid-2">
                    <TextArea label="BODY · EN" />
                    <TextArea label="ገለፃ · AM" />
                </div>
                <div>
                    <Input label="BUTTON TEXT · EN" />
                    <Input label="የቁልፍ ጽሑፍ · AM" />
                </div>
            </Card>
            <Card title="Premium">
                <div className="grid-2">
                    <Input label="HEADLINE · EN" />
                    <Input label="ዋና ርዕስ · AM" />
                </div>
                <div className="grid-2">
                    <TextArea label="BODY · EN" />
                    <TextArea label="ገለፃ · AM" />
                </div>
                <div>
                    <Input label="BUTTON TEXT · EN" />
                    <Input label="የቁልፍ ጽሑፍ · AM" />
                </div>
            </Card>
            <Card title="Family">
                <div className="grid-2">
                    <Input label="HEADLINE · EN" />
                    <Input label="ዋና ርዕስ · AM" />
                </div>
                <div className="grid-2">
                    <TextArea label="BODY · EN" />
                    <TextArea label="ገለፃ · AM" />
                </div>
                <div>
                    <Input label="BUTTON TEXT · EN" />
                    <Input label="የቁልፍ ጽሑፍ · AM" />
                </div>
            </Card>
            <Button>Update</Button>
        </div>
    );
}