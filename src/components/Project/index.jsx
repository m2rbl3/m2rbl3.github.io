import React, { useState, memo } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Avatar,
  CardActions,
  CardContent,
  Button,
  Box,
  Typography,
  List,
  ListItem,
  Collapse,
  ListItemText,
} from '@material-ui/core';
import {
  ExpandLess,
  ExpandMore
} from '@material-ui/icons';
import {
  Card,
  CardHeader,
  EmphasizeText
} from '../common';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
    paddingRight: theme.spacing(4) 
  },
  introduction: {
    fontStyle: 'italic'
  },
  children: {
    padding: theme.spacing(1, 2, 1, 2),
  },
  pointer: {
    cursor: 'pointer',
  },
}));

const CustomListItem = memo((props) => {
  const [isOpen, setIsOpen] = useState(true)
  const classes = useStyles();
  const {
    title,
    children,
  } = props;

  return (
    <Box
      className={classes.pointer}
      onClick={() => setIsOpen(!isOpen)}
    >
      <ListItem
        className={classes.title}
      >
        <ListItemText primary={<Typography color="primary" variant="h6">{title}</Typography>} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Box className={classes.children}>
        <Collapse
          in={isOpen}
          timeout="auto"
        >
          {children}
        </Collapse>
      </Box>
    </Box>
  )
});

export default memo(function () {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader>项目经历</CardHeader>
      <List disablePadding>
        <CustomListItem title="租租车国内租车移动端多页面应用">
          <Typography variant="body2" color="textSecondary" gutterBottom display="block">
            租租车的国内租车业务是一个提供国内租车服务的平台, 其移动端页面采用混合开发方案，内嵌于手机APP和小程序&nbsp;
            <Typography component="a" href="https://cars.zuzuche.com/zijia/">(https://cars.zuzuche.com/zijia/)</Typography>
          </Typography>
          <Typography>1.根据团队编码规范，使用<EmphasizeText>React</EmphasizeText>、<EmphasizeText>Scss</EmphasizeText>编写多页面应用，并用<EmphasizeText>IndexedDB</EmphasizeText>、<EmphasizeText>LocalStorage</EmphasizeText>等管理页面间的状态</Typography>
          <Typography>2.使用<EmphasizeText>NodeJS</EmphasizeText>的<EmphasizeText>eggjs</EmphasizeText>框架作为中间层应用渲染前端模板以及对接、聚合后端接口，更好的实现前后端分离</Typography>
          <Typography>3.对不同端（移动端浏览器、Hybrid App、Hybrid Miniprogram）的页面样式和页面交互（如支付、芝麻授权等）做适配和兼容</Typography>
        </CustomListItem>
        <CustomListItem title="租租车国内租车小程序">
          <Typography variant="body2" color="textSecondary" gutterBottom display="block">小程序的形式为Hybrid Miniprogram，即登录、支付等与平台用户系统相关的页面采用原生小程序页面,下单流程采用webview容器承载移动端页面。</Typography>
          <Typography>1.使用<EmphasizeText>Taro</EmphasizeText>框架(<EmphasizeText>React</EmphasizeText>语法)开发和维护小程序页面</Typography>
          <Typography>​2.编写<EmphasizeText>Taro</EmphasizeText>插件，通过读取约定的配置根据同一套代码编译出多个平台的多个小程序</Typography>
          <Typography>​3.接入<EmphasizeText>MiniU</EmphasizeText>、<EmphasizeText>miniprogram-ci</EmphasizeText>，无需打开多个小程序开发工具，使小程序预览、上传可以通过CLI指令执行，提高开发效率</Typography>
          <Typography>4.优化了小程序原生和webview内嵌html5页面间的登录状态同步问题，提高了各类活动领券页的UV/PV</Typography>
          <Typography>​5.采取分包、图片懒加载等方式优化小程序原生页面，使支付宝官方评分从合格提升到良好至优秀</Typography>
        </CustomListItem>
        <CustomListItem title="租租车国内租车后台管理系统">
          <Typography variant="body2" color="textSecondary" gutterBottom display="block">后台管理系统主要提供给运营和客服同事需求，方便运营同事快速调整运营策略、查看统计数据以及处理扣费相关工单</Typography>
          <Typography>1.使用<EmphasizeText>Ant Design</EmphasizeText>作为UI组件库，<EmphasizeText>DvaJS</EmphasizeText>(基于<EmphasizeText>Redux</EmphasizeText>)进行状态管理，开发并维护一系列如填写配置表单，配置列表表格或图形化数据统计等后台页面</Typography>
          <Typography>2.使用<EmphasizeText>Nodejs</EmphasizeText>的<EmphasizeText>Puppeteer</EmphasizeText>和<EmphasizeText>cheerio</EmphasizeText>抓取限行规则等运营所需数据入库，并用于后台管理系统前端展示</Typography>
        </CustomListItem>
      </List>
    </Card >
  );
});