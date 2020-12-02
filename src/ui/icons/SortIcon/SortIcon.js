import React from 'react'

import { SortUpIcon } from './SortUpIcon'
import { SortDownIcon } from './SortDownIcon'

export let SortIcon = ({ mode = null }) => {
  if (mode === 'up') {
    return <SortUpIcon />
  } else if (mode === 'down') {
    return <SortDownIcon />
  } else {
    return <SortDownIcon color="#808080" />
  }
}

SortIcon = React.memo(SortIcon)
