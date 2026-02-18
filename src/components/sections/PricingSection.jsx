import TextArea from "../ui/TextArea";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function HeroSection(){
    return(
        <div className="pricing-container">
            <div className="card">
                <h3>Basic</h3>
                <div className="grid-2">
                    <Input label="HEADLINE · EN"/>
                    <Input label="ዋና ርዕስ · AM"/>
                </div>
                <div className="gird-2">
                    <TextArea label="BODY · EN"/>
                    <TextArea label="ገለፃ · AM"/>
                </div>
                <div>
                    <Input label="BUTTON TEXT · EN"/>
                    <Input label="የቁልፍ ጽሑፍ · AM"/>
                </div>
            </div>
            <div className="card">
                <h3>Premium</h3>
                <div className="grid-2">
                    <Input label="HEADLINE · EN"/>
                    <Input label="ዋና ርዕስ · AM"/>
                </div>
                <div className="gird-2">
                    <TextArea label="BODY · EN"/>
                    <TextArea label="ገለፃ · AM"/>
                </div>
                <div>
                    <Input label="BUTTON TEXT · EN"/>
                    <Input label="የቁልፍ ጽሑፍ · AM"/>
                </div>
            </div>
            <div className="card">
                <h3>Family</h3>
                <div className="grid-2">
                    <Input label="HEADLINE · EN"/>
                    <Input label="ዋና ርዕስ · AM"/>
                </div>
                <div className="gird-2">
                    <TextArea label="BODY · EN"/>
                    <TextArea label="ገለፃ · AM"/>
                </div>
                <div>
                    <Input label="BUTTON TEXT · EN"/>
                    <Input label="የቁልፍ ጽሑፍ · AM"/>
                </div>
            </div>
            <Button>Update</Button>
        </div>
    );
}