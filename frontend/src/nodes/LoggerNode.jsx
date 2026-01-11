import BaseNode from "./BaseNode";
import { FiFileText } from "react-icons/fi";

const LoggerNode = () => (
    <BaseNode
        title="Logger"
        icon={<FiFileText />}
        inputs={[{ id: "message" }]}
    >
        <p>Logs data</p>
    </BaseNode>
);

export default LoggerNode;
