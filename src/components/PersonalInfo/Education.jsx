import React from 'react';
import clsx from 'clsx';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core'
import {
  School,
  MenuBook,
  PlaylistAddCheck,
} from '@material-ui/icons'

export default function () {
  return (
    <List>
      <ListItem>
        <ListItemText>
          <Typography 
            variant="h6"
            color="primary"
          >
            教育背景
          </Typography>
        </ListItemText>
      </ListItem>
      {
        [{
          icon: School,
          text: '广东工业大学'
        }, {
          icon: MenuBook,
          text: '微电子科学与工程 本科\n(2015-2019)'
        }, {
          icon: PlaylistAddCheck,
          text: '大学英语四级、大学计算机二级'
        }].map(({ icon: Icon, text }) => (
          <ListItem key={text}> 
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText>
              {text.split('\n').map(splitText => (
                <Typography
                  variant="body1"
                  key={splitText}
                >
                  {splitText}
                </Typography>
              ))}
            </ListItemText>
          </ListItem>
        ))
      }
    </List>
  )
}