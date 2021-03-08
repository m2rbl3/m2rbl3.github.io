import React, { memo } from 'react';
import { Typography } from '@material-ui/core'
export { Card, CardHeader } from './Card';

// 强调性文字 
export const EmphasizeText = memo((props) => {
  return (
    <Typography
      display="inline"
      variant="body2"
      color="secondary"
      {...props}
    />
  )
})