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
  LocalPhone,
  Email,
} from '@material-ui/icons'

const ContactDict = {
  phone: {
    icon: LocalPhone,
    text: 13249719564,
    href: 'tel:13249719564',
  },
  email: {
    icon: Email,
    text: '407425951@qq.com',
    href: 'mailto:407425951@qq.com'
  }
};

export default function ContactInfo() {
  return (
    <List>
      <ListItem>
        <ListItemText>
          <Typography 
            variant="h6" 
            color="primary"
          >联系方式</Typography>
        </ListItemText>
      </ListItem>
      {
        Object.values(ContactDict)
          .map(({ icon: Icon, text, href }) => (
            <ListItem key={text}>
              {
                Icon ? (
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                ) : null
              }
              <ListItemText>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  component="a"
                  href={href}
                >
                  {text}
                </Typography>
              </ListItemText>
            </ListItem>
          ))
      }
    </List>
  )
}