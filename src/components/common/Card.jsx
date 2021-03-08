import React, { memo } from 'react';
import {
  Card as MUICard,
  CardHeader as MUICardHeader,
  CardContent as MUICardContent,
  Typography,
} from '@material-ui/core';

export const Card = memo(function ({ children, ...props }) {
  return (
    <MUICard
      variant="outlined"
      {...props}
    >
      {children}
    </MUICard>
  )
});

export const CardHeader = memo(function ({ children, title, ...props }) {
  return (
    <MUICardHeader
      title={<Typography variant="h5" color="primary">{title || children}</Typography>}
      {...props}
    >
    </MUICardHeader>
  )
});