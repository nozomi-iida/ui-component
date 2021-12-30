---
name: 'component'
root: './src/components'
output: '**/*'
ignore: []
questions:
  value: 'Please enter any text.'
---

# `{{ inputs.value }}/index.tsx`

```tsx
import React from 'react'
import { {{ inputs.value }}Props } from "./{{ inputs.value }}.types";
import styles from "./style.module.scss"

export const {{ inputs.value }} : React.FC<{{ inputs.value }}Props> = ({}) => (
        <div></div>
)

```

# `{{ inputs.value }}/{{ inputs.value }}.types.ts`

```ts
export type {{ inputs.value }}Props = {
  
}
```

# `{{ inputs.value }}/{{ inputs.value }}.stories.tsx`

```tsx
import React from 'react'
import { {{ inputs.value }} as StoryComponent } from '.'

export default {
  title: "Components"
};

export const {{ inputs.value }} = () => <div><StoryComponent /></div>;

```

# `{{ inputs.value }}/{{ inputs.value }}.test.tsx`

```tsx
import React from 'react'
import { render } from "@testing-library/react";

import { {{ inputs.value }} } from '.'
import { {{ inputs.value }}Props } from './{{ inputs.value }}.types'

describe("{{ inputs.value }} Component", () => {
  let props: {{ inputs.value }}Props;

  beforeEach(() => {
    props = {
      
    };
  });
  
  const renderComponent = () => render(<{{ inputs.value }} {...props} />);
})

```

# `{{ inputs.value }}/style.module.scss`

```scss
@import "src/styles/themes";
```
