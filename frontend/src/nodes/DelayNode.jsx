import BaseNode from "./BaseNode";
import { FiClock } from "react-icons/fi";

const DelayNode = () => (
    <BaseNode
        title="Delay"
        icon={<FiClock />}
        inputs={[{ id: "input" }]}
        outputs={[{ id: "output" }]}
    >
        <p>Delays execution</p>
    </BaseNode>
);

export default DelayNode;
