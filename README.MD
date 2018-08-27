ya-react-time
=============

Yet another React time component
A component (DUMB) wrapper to render formatted dates and uses **date-fns** behind the scenes.


Installation
------------

    % npm install ya-react-time

Usage
------------

```jsx
import React from 'react';
import Time from 'ya-react-time';

const App = () => (
  <Time
    format="YYYY/MM/DD HH:mm:ss a"
    filter={d => d.toUpperCase()}
  >
    {Date.now()}
  </Time>
)
```

Todo
-------------
- async loading of i18n
- support timezone




