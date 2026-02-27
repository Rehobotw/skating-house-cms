import TextArea from "../ui/TextArea";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function GallerySection() {
  return (
    <Card title="Gallery">
      <div className="grid-2">
        <TextArea label="footage" />  
      </div>
      <Button>Upload</Button>
      <Button>Save</Button>
    </Card>
  );
}