import BaseNode from "./BaseNode";
import { FiHelpCircle } from "react-icons/fi";

const ConditionNode = () => (
    <BaseNode
        title="Condition"
        icon={<FiHelpCircle />}
        inputs={[{ id: "condition" }]}
        outputs={[{ id: "true" }, { id: "false" }]}
    >
        <p>Conditional branching</p>
    </BaseNode>
);

export default ConditionNode;
