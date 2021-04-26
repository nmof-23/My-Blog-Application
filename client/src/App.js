import React, { Fragment , useState , useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import PenIcon from "@material-ui/icons/Create";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PostLists from "./components/postLists";
import AddPostForm from "./components/AddPostForm";
import {fetchPosts} from  "./actions/post";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3),
  },
}));
const App = () => {
  const dispatch = useDispatch()

  const [open , setOpen] = useState(false);

  useEffect(() => {
    console.log("denememeeee");
    dispatch(fetchPosts()) 
  }, [])

  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };


  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar>
            {/* <IconButton
              edge="start"
              color="inherit"
              className={classes.container}
            /> */}
            <Typography
              variant="h6"
              color="secondary"
              className={classes.title}
            >
              <a href="http://localhost:3000/posts">My Blog</a>
            </Typography>
            <Button color="primary" variant="outlined" startIcon={<PenIcon />} onClick={handleOpen}>
              {" "}
              Yeni Yazı{" "}
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Router>
              <Switch>
                <Route exact path="/posts" component={PostLists} />
              </Switch>
              <Redirect from="/" to="/posts" />
            </Router>
          </Grid>
        </Grid>
      </Container>

      <AddPostForm open={open} handleClose={handleClose} />
    </>
  );
};

export default App;
