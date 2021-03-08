import React from 'react';
import clsx from 'clsx';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@material-ui/icons'

export default function PersonalRecognition() {
  return (
    <List>
      <ListItem>
        <ListItemText>
          <Typography 
            variant="h6"
            color="primary"
          >
            个人评价
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography
            variant="body1"
          >
            本人工作专心，认真负责，勤奋上进，刻苦努力，待人诚恳温和，乐于沟通
        </Typography>
        </ListItemText>
      </ListItem>
    </List>
  )
}