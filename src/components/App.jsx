import {
  withStyles,
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";

import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

import SideMenu from "components/SIdeMenu";
import Header from "components/Header";
import PageHeader from "components/PageHeader";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff0000",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "12px",
  },
});

const style = {
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
};

const App = ({ classes }) => (
  <>
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <PageHeader
          title="Page Header"
          subtitle="Page Description"
          icon={<PeopleOutlineIcon fontSize="large" />}
        />
      </div>
      <CssBaseline />
    </ThemeProvider>
  </>
);

export default withStyles(style)(App);
