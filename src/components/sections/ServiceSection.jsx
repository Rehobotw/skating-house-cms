import TextArea from "../ui/TextArea";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function ServiceSection() {
    return (
        <Card title="Service">
            <div className="grid-2">
                <Input label="HEADLINE · EN" />
                <Input label="ዋና ርዕስ · AM" />
            </div>
            <div className="grid-2">
                <TextArea label="BODY · EN" />
                <TextArea label="ገለፃ · AM" />
            </div>
            <Button>Update</Button>
        </Card>
    );
}