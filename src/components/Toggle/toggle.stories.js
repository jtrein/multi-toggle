import React from "react";
import ChoiceToggle from "./index";
import { withKnobs } from "@storybook/addon-knobs";

export default { title: "ChoiceToggle component", decorators: [withKnobs] };

export const choiceToggle = () => {
  return <ChoiceToggle values={["Hello", "Goodbye"]} initialValueIndex={0} />;
};
