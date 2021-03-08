import React, { useState, memo } from 'react';
import clsx from 'clsx';
import {
  Divider,
  CardContent,
  Typography,
  Grid,
  Collapse,
  Box,
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Timeline,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
  TimelineContent,
  TimelineItem
} from '@material-ui/lab';
import {
  ExpandLess,
  ExpandMore
} from '@material-ui/icons';
import { Card, CardHeader } from '../common';

const CustomCardContent = withStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      padding: 'unset',
      '&:last-child': {
        paddingBottom: 'unset'
      }
    },
    paddingTop: 'unset',
    paddingBottom: 'unset',
  }
}), { name: 'CardContent' })(CardContent)
const CustomTimelineItem = withStyles({
  root: {
    minHeight: 'unset'
  },
  missingOppositeContent: {
    '&::before': {
      content: 'unset'
    }
  },
}, { name: 'MuiTimelineItem' })(TimelineItem);
const CustomTimelineConnector = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main
  }
}), { name: 'MuiTimelineConnector' })(TimelineConnector)

const useStyles = makeStyles((theme) => {
  return ({
    title: {
      cursor: 'pointer'
    },
    date: {
      minWidth: '10em',
      marginRight: theme.spacing(2),
    },
    divider: {
      margin: theme.spacing(2, 0)
    },
    titleText: {
      marginRight: theme.spacing(2),
      lineHeight: '1.5rem'
    },
    titleIcon: {
      lineHeight: 0,
      marginLeft: 'auto',
    },
  })
});

const CollapseTitle = memo((props) => {
  const [isOpen, setIsOpen] = useState(true);
  const classes = useStyles();
  const {
    date,
    title,
    children
  } = props;

  return (
    <Box
      className={classes.title}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        direction="row"
        className={classes.titleWrapper}
      >
        <Grid
          item
          className={classes.date}>
          <Typography
            noWrap
            color="textSecondary"
          >
            {date}
          </Typography>
        </Grid>
        <Grid
          sm
          item
          container
          justify="flex-start"
          alignItems="center"
          direction="row"
          wrap="nowrap"
        >
          <Grid item className={classes.titleText}>
            <Typography color="primary">{title}</Typography>
          </Grid>
          <Grid item className={classes.titleIcon}>
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </Grid>
        </Grid>
      </Grid>
      <Collapse
        timeout="auto"
        in={isOpen}
        className={classes.content}
      >
        {children}
      </Collapse>
    </Box>
  )
});

export default memo(function WorkExperience() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader>工作经历(2年)</CardHeader>
      {/* <CustomCardContent> */}
      <Timeline align="left">
        <CustomTimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <CustomTimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <CollapseTitle
              date="2019.7-至今"
              title="广州力挚网络科技有限公司（租租车）- 前端开发工程师"
            >
              <Typography>负责租租车国内租车业务的移动端网页、微信、支付宝、百度等平台小程序、管理后台的开发和维护</Typography>
            </CollapseTitle>
          </TimelineContent>
        </CustomTimelineItem>
        <CustomTimelineItem >
          <TimelineSeparator >
            <TimelineDot color="primary" />
          </TimelineSeparator>
          <TimelineContent>
            <CollapseTitle
              date="2018.11 - 2019.6"
              title="广州力挚网络科技有限公司（租租车）- 前端开发实习生"
            >
              <Typography>负责海外代购平台小程序的开发和维护</Typography>
            </CollapseTitle>
          </TimelineContent>
        </CustomTimelineItem>
      </Timeline>
      {/* </CustomCardContent> */}
    </Card>
  )
})