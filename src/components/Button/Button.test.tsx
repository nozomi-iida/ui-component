import React from "react";
import { render } from "@testing-library/react";

import { Button } from ".";
import { ButtonProps } from "./Button.types";

describe("Button Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      type: "button",
    };
  });

  const renderComponent = () => render(<Button {...props}>Hoge</Button>);
});
