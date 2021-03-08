import React, { useState, useLayoutEffect, memo } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Chip,
  Avatar,
  Typography,
  List,
  ListItem,
  Grid,
} from '@material-ui/core';
import {
  Card,
  CardHeader,
  EmphasizeText,
} from '../common';
import logoJavaScript from '../../images/logo_js.svg';
import logoGit from '../../images/logo_git.eps';
import logoSass from '../../images/logo_sass.svg';
import logoReact from '../../images/logo_react.svg';
import logoNode from '../../images/logo_node.svg'

const makeChipStyles = ({
  avatarStyle,
  chipStyle,
  chipMaxWidth
}) => makeStyles(theme => ({
  gridWrapper: {
    width: 'unset',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    }
  },
  item: {
    justifyContent: 'flexStart'
  },
  avatarStyle,
  chipStyle: {
    margin: theme.spacing(0, 1, 0, 0),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 0, 1, 0),
    },
    minWidth: chipMaxWidth ? `${chipMaxWidth}px` : '9em',
    justifyContent: 'flex-start',
    ...chipStyle
  }
}));
const initialChipList = [{
  label: 'Javascript',
  avatar: logoJavaScript,
  desc: <>
    1.熟练使用javascript对DOM、BOM进行操作，熟悉ES2018特性，熟悉异步编程和异常处理
  </>,
  // avatarStyle: {
  //   backgroundColor: '#fff'
  // },
  chipStyle: {
    backgroundColor: 'rgb(246, 222, 30)',
    color: '#000'
  }
}, {
  label: 'React',
  avatar: logoReact,
  desc: <>
    1.熟练使用<EmphasizeText>React</EmphasizeText>框架(熟悉class和hook用法)编写网页用户界面，类<EmphasizeText>redux</EmphasizeText>框架管理状态<br />
    2.熟练使用<EmphasizeText>Taro</EmphasizeText>框架(<EmphasizeText>React</EmphasizeText>语法)编写小程序，熟悉各平台小程序的登录、支付以及小程序与webview页面通信等流程
  </>,
  avatarStyle: {
    backgroundColor: '#fff',
  },
  chipStyle: {
    backgroundColor: '#4dc8ed',
    color: 'white'
  }
}, {
  label: 'Scss',
  avatar: logoSass,
  desc: <>
    1.熟练使用定位、弹性盒子等进行页面布局，熟悉盒子模型和行内外元素、选择器等知识<br />
    2.熟练使用<EmphasizeText>Sass</EmphasizeText>函数复用逻辑
  </>,
  avatarStyle: {
    backgroundColor: '#fff'
  },
  chipStyle: {
    backgroundColor: '#cf649a',
    color: 'white'
  }
}, {
  label: 'Git',
  avatar: logoGit,
  desc: <>
    1.熟练使用Git进行项目分支切换、合并以及冲突处理，按规范进行改动提交
  </>,
  avatarStyle: {
    backgroundColor: '#fff'
  },
  chipStyle: {
    backgroundColor: '#f05033',
    color: 'white'
  }
}, {
  label: 'NodeJs',
  avatar: logoNode,
  avatarStyle: {
    backgroundColor: '#fff',
  },
  chipStyle: {
    display: 'inlien-flex',
    backgroundColor: '#689f63',
    color: 'white',
    float: 'left'
  },
  desc: <>
    1.熟练使用<EmphasizeText>egg</EmphasizeText>框架进行中间层网络编程，能编写抓取网页数据的脚本，了解基本的数据库连接和操作
  </>,
}].map((item) => {
  const { avatarStyle, chipStyle, } = item;

  return {
    ...item,
    useStyles: makeChipStyles({
      avatarStyle,
      chipStyle
    })
  }
});

export default memo(function () {
  const [chipList, setChipList] = useState(initialChipList);

  useLayoutEffect(() => {
    const chipMaxWidth = Math.max(
      ...Array.from(document.querySelectorAll('.js-chip'))
        .map(el => el.getBoundingClientRect().width)
    );

    setChipList(chipList.map(({ avatarStyle, chipStyle, ...rest }) => ({
      ...rest,
      useStyles: makeChipStyles({
        chipMaxWidth,
        avatarStyle,
        chipStyle
      })
    })));
  }, []);

  return (
    <Card>
      <CardHeader>技能</CardHeader>
      <List>
        {
          chipList.map((item, i) => <CustomListItem key={item.label} {...item} />)
        }
      </List>
    </Card>
  );
});

const CustomListItem = memo(({
  label,
  avatar,
  desc,
  useStyles
}) => {
  const styles = useStyles();

  return (
    <ListItem
      className={styles.item}
      key={label}
    >
      <Grid container>
        <Grid
          item
          container
          alignItems="center"
          className={styles.gridWrapper}
        >
          <Chip
            avatar={
              avatar
                ? <Avatar
                  src={avatar}
                  classes={{ root: styles.avatarStyle }}
                />
                : undefined
            }
            label={label}
            classes={{ root: styles.chipStyle }}
            className="js-chip"
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          className={styles.gridWrapper}
        >
          <Typography>
            {desc}
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  )
});
