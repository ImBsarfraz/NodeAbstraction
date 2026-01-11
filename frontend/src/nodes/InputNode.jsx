import BaseNode from "./BaseNode";
import { FiArrowDownCircle } from "react-icons/fi";

const InputNode = () => {
  return (
    <BaseNode
      title="Input"
      icon={<FiArrowDownCircle />}
      outputs={[{ id: "output" }]}
    >
      <p>Pipeline input</p>
    </BaseNode>
  );
};

export default InputNode;
