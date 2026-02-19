import TextArea from "../ui/TextArea";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function AboutSection(){
    return(
        <div className="card">
            <h3>About</h3>
            <div className="grid-2">
                <Input label="HEADLINE · EN"/>
                <Input label="ዋና ርዕስ · AM"/>
            </div>
            <div className="gird-2">
                <TextArea label="BODY · EN"/>
                <TextArea label="ገለፃ · AM"/>
            </div>
            <div className="grid-2">
                <Input label="BUTTON TEXT · EN"/>
                <Input label="የቁልፍ ጽሑፍ · AM"/>
            </div>
            <Button >Update</Button>
        </div>
    );
}