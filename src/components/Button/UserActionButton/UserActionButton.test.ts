import React from "react";
import { render } from "@testing-library/react";

import { UserActionButton } from ".";
import { UserActionButtonProps } from "./UserActionButton.types";

describe("UserActionButton Component", () => {
  let props: UserActionButtonProps;

  beforeEach(() => {
    props = {};
  });

  const renderComponent = () => render(<UserActionButton {...props} />);
});
