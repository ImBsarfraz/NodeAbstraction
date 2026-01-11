import BaseNode from "./BaseNode";
import { FiType } from "react-icons/fi";

const FormatterNode = () => (
    <BaseNode
        title="Formatter"
        icon={<FiType />}
        inputs={[{ id: "input" }]}
        outputs={[{ id: "output" }]}
    >
        <p>Formats text</p>
    </BaseNode>
);

export default FormatterNode;
