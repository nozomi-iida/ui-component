import React from "react";
import { render } from "@testing-library/react";

import { BaseButton } from ".";
import { BaseButtonProps } from "./BaseButton.types";

describe("BaseButton Component", () => {
  let props: BaseButtonProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () => render(<BaseButton {...props} />);
});
