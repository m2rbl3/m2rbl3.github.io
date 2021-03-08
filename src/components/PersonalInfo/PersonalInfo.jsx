import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyAvatarPNG from '../../images/avatar.png';
import {
  List,
  Avatar,
  Typography,
  ListItem,
  ListItemText,
  ListItemAvatar
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginRight: theme.spacing(2),
  },
}));

export default function PersonalRecognition() {
  const classes = useStyles();

  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            variant="circular"
            alt="avatar"
            className={classes.avatar}
            src={MyAvatarPNG}
          />
        </ListItemAvatar>
        <ListItemText>
          <Typography
            variant="h5"
            color="primary"
          >
            黎子恒
          </Typography>
          <Typography
            variant="body1"
          // color="primary"
          >
            1996年生(24岁)
          </Typography>
          <Typography
            variant="body2"
          // color="primary"
          >
            web前端开发工程师
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  )
}