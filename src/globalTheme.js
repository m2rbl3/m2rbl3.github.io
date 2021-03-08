import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

export default createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 1080,
      lg: 1280,
      xl: 1920,
    }
  },
  drawerWidth: 280
});