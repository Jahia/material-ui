import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import TableFooter from '@material-ui/core/TableFooter';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddIcon from '@material-ui/icons/Add';

import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

import Drawer from '@material-ui/core/Drawer';
import CircularProgress from '@material-ui/core/CircularProgress';

import LinearProgress from '@material-ui/core/LinearProgress';

import Snackbar from '@material-ui/core/Snackbar';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import BubbleChartIcons from '@material-ui/icons/BubbleChart';
import AddCommentIcon from '@material-ui/icons/AddComment';
import SettingsIcon from '@material-ui/icons/Settings';
import RestoreIcon from '@material-ui/icons/Restore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MovieIcon from '@material-ui/icons/Movie';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import Tooltip from '@material-ui/core/Tooltip';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';





function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
		  <React.Fragment>
		  <Typography variant="body" color="inherit" noWrap>
			This is Step ONE
		  </Typography>
		  </React.Fragment>
	  )
    case 1:
      return (
		  <React.Fragment>
		  <Typography variant="body" color="inherit" noWrap>
			This is Step TWO
		  </Typography>
		  </React.Fragment>
	  )
    case 2:
      return (
		  <React.Fragment>
		  <Typography variant="body" color="inherit" noWrap>
			This is the LAST step
		  </Typography>
		  </React.Fragment>
	  )
    default:
      return (
		  <React.Fragment>
			  <Paper>
				  <Typography variant="body" color="inherit" noWrap>
					Unknown Step
				  </Typography>
			  </Paper>
		  </React.Fragment>
	  )
  }
}

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  avatar: {
    margin: 10,
	float: "left"
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#FF0000',
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#00FF00',
  },
  linearProgress: {
	  width: "250px",
	  marginBottom: "5px"
  },
  stepper: {
	  width: "100%"
  },
  tableContainer: {
	  width: "100%"
  },
  tableRow: {
	  "&:nth-of-type(odd)": {
		  backgroundColor: "#f9fafa"
	  }
  },
  chip: {
	  margin: "5px"
  }
});


let id = 0;
function createData(name, film, created, createdBy) {
  id += 1;
  return { id, name, film, created, createdBy };
}

const data = [
  createData('Attack of the Clones', "film", "10th May '18", "lbowyer"),
  createData('The Phantom Menace', "film", "10th May '18", "eauvray"),
  createData('Revenge of the Sith', "film", "10th May '18", "fpral"),
  createData('Return of the Jedi', "film", "10th May '18", "lbowyer"),
  createData('The Force Awakens', "film", "10th May '18", "fpral"),
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const options = [
  'Show some love to Material-UI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];

class AnthraciteSettings extends React.Component {
  state = {
    open: false,
    openFormDialog: false,
    openScroll: false,
	openComplexSnack: false,
    openFullScreenDialog: false,
    scroll: 'paper',
    top: false,
    left: false,
    bottom: false,
    right: false,
    openSnackBar: false,
    vertical: 'top',
    horizontal: 'center',
    anchorEl: null,
    anchorElMoreOptions: null,
    anchorElMenuState: null,
    selectedIndexMenuState: 1,
	name: [],
	activeStep: 0,
    skipped: new Set(),
	age: ""
  };

  isStepOptional = step => {
    return step === 1;
  };

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

	handleChangeAge = event => {
	  this.setState({ age: event.target.value });
	};

  handleChangeMultipleSelect = event => {
    this.setState({ name: event.target.value });
  };

  handleClickListItemMenuState = event => {
    this.setState({ anchorElMenuState: event.currentTarget });
  };

  handleMenuItemClickMenuState = (event, index) => {
    this.setState({ selectedIndexMenuState: index, anchorElMenuState: null });
  };

  handleClickComplexSnack = () => {
    this.setState({ openComplexSnack: true });
  };

  handleCloseComplexSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ openComplexSnack: false });
  };

  handleCloseMenuState = () => {
    this.setState({ anchorElMenuState: null });
  };

  handleClickMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseMenu = () => {
    this.setState({ anchorEl: null });
  };

  handleClickMenuMoreOptions = event => {
    this.setState({ anchorElMoreOptions: event.currentTarget });
  };

  handleCloseMenuMoreOptions = () => {
    this.setState({ anchorElMoreOptions: null });
  };

  handleClickSnackBar = state => () => {
    this.setState({ openSnackBar: true, ...state });
  };

  handleCloseSnackBar = () => {
    this.setState({ openSnackBar: false });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClickOpenFormDialog = () => {
    this.setState({ openFormDialog: true });
  };

  handleCloseFormDialog = () => {
    this.setState({ openFormDialog: false });
  };

  handleClickOpenFullScreenDialog = () => {
    this.setState({ openFullScreenDialog: true });
  };

  handleCloseFullScreenDialog = () => {
    this.setState({ openFullScreenDialog: false });
  };

  handleClickOpenScroll = scroll => () => {
    this.setState({ openScroll: true, scroll });
  };

  handleCloseScroll = () => {
    this.setState({ openScroll: false });
  };

  handleDeleteChip = () => {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
  };

  handleClickChip = () => {
    alert('You clicked the Chip.'); // eslint-disable-line no-alert
  };


  render() {
    const { classes } = this.props;
    const { vertical, horizontal, openSnackBar } = this.state;
    const { anchorEl } = this.state;
    const { anchorElMoreOptions } = this.state;
    const { anchorElMenuState } = this.state;
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;
	const steps = getSteps();
    const { activeStep } = this.state;
	return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="display3" color="inherit" noWrap>
              Settings Example Page
            </Typography>
			<Button variant="fab" mini color="default">
			  <RestoreIcon />
			</Button>
			<Button variant="fab" mini color="default">
			  <BubbleChartIcons />
			</Button>
			<Button variant="fab" mini color="default">
			  <AddCommentIcon />
			</Button>
			<Button variant="fab" mini color="default">
			  <AddIcon />
			</Button>
			<Button variant="fab" mini color="default">
			  <SettingsIcon />
			</Button>
          </Toolbar>
          <Tabs value="first"
		  indicatorColor="primary"
          textColor="default">
            <Tab value="first" label={<Typography variant="display1">First Tab</Typography>} />
			<Tab label={<Typography variant="display1">Second Tab</Typography>} />
            <Tab label={<Typography variant="display1">Third Tab</Typography>} />
          </Tabs>
        </AppBar>

        <main>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
			  <Typography variant="display1">Text Inputs & Text Areas</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={8}>
                  <Grid item xs={12} spacing={8}>
                    <List
                      dense
                      subheader={<ListSubheader component="div">Text Inputs</ListSubheader>}
                    >
                      <ListItem>
                        <ListItemText
                          primary="Normal text input"
                          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
                        />
						<ListItemSecondaryAction>
						<FormControlLabel

						  control={<Input disableUnderline placeholder="Placeholdeer" />}
						  labelPlacement="start"
						  label="Normal Input"
						/>
                        </ListItemSecondaryAction>

                      </ListItem>

                      <ListItem>
                        <ListItemText
                          primary="Disabled text input"
                          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
                        />
						<ListItemSecondaryAction>
						<FormControlLabel
                          control={
                            <Input
                              disableUnderline
                              disabled
                              placeholder="Disabled"
                              value="Been disabled"
                            />
                          }
                          labelPlacement="start"
                          label="Disabled Input"
                        />
                        </ListItemSecondaryAction>


                      </ListItem>

                      <ListItem>
                        <ListItemText
                          primary="Text input with error"
                          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
                        />

						<ListItemSecondaryAction>
						<FormControlLabel
                          control={
                            <Input
                              disableUnderline
                              error
                              placeholder="Error"
                              value="This should flag error"
                            />
                          }
                          labelPlacement="start"
                          label="Error"
                        />
                        </ListItemSecondaryAction>


                      </ListItem>

                      <ListItem>
                        <ListItemText
                          primary="Normal text input"
                          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
                        />

						<ListItemSecondaryAction>
						<FormControlLabel
                          control={
                            <Input disableUnderline placeholder="Normal" value="Normal Input" />
                          }
                          labelPlacement="start"
                          label="Normal Input"
                        />
                        </ListItemSecondaryAction>


                      </ListItem>

                      <ListItem>
                        <ListItemText
                          primary="Read only text input"
                          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
                        />

						<ListItemSecondaryAction>
						<FormControlLabel
                          control={
                            <Input
                              disableUnderline
                              readOnly
                              placeholder="Normal"
                              value="Cant touch me"
                            />
                          }
                          labelPlacement="start"
                          label="Read Only"
                        />
                        </ListItemSecondaryAction>


                      </ListItem>

                      <ListItem>
                        <ListItemText
                          primary="Required text input"
                          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
                        />

						<ListItemSecondaryAction>
						<FormControlLabel
                          control={
                            <Input
                              disableUnderline
                              required
                              placeholder="Required"
                              value="Input required"
                            />
                          }
                          labelPlacement="start"
                          label="Required *"
                        />
                        </ListItemSecondaryAction>


                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
              <ExpansionPanelActions>
                <Button variant="contained" size="small">
                  Cancel
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Save
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="display1">Buttons</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={8}>
                  <Grid item xs={12} spacing={8}>
                    <List
                      dense
                      subheader={<ListSubheader component="div">Text Buttons</ListSubheader>}
                    >
                      <ListItem>
                        <ListItemText
                          primary="Text Buttons"
                          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
                        />
                        <ListItemSecondaryAction>
                          <Button size="small" color="default">
                            Small
                          </Button>
                          <Button size="medium" color="primary">
                            Medium
                          </Button>
                          <Button size="large" color="secondary">
                            Large
                          </Button>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Contained Buttons"
                          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
                        />
                        <ListItemSecondaryAction>
                          <Button variant="contained" size="small" color="default">
                            Small
                          </Button>
                          <Button variant="contained" size="medium" color="primary">
                            Medium
                          </Button>
                          <Button variant="contained" size="large" color="secondary">
                            Large
                          </Button>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>

                    <List
                      dense
                      subheader={
                        <ListSubheader component="div">Floating Action Buttons</ListSubheader>
                      }
                    >
                      <ListItem>
                        <ListItemText
                          primary="Floating Action Buttons"
                          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
                        />
                        <ListItemSecondaryAction>
                          <Button variant="fab" mini color="default">
                            <AddIcon />
                          </Button>
                          <Button variant="fab" mini color="primary">
                            <AddIcon />
                          </Button>
                          <Button variant="fab" mini color="secondary">
                            <AddIcon />
                          </Button>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Floating Action Buttons"
                          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
                        />
                        <ListItemSecondaryAction>
                          <Button variant="fab" color="default">
                            <AddIcon />
                          </Button>
                          <Button variant="fab" color="primary">
                            <AddIcon />
                          </Button>
                          <Button variant="fab" color="secondary">
                            <AddIcon />
                          </Button>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                    <List
                      dense
                      subheader={<ListSubheader component="div">Icon Buttons</ListSubheader>}
                    >
                      <ListItem>
                        <ListItemText
                          primary="Icons Buttons"
                          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
                        />
                        <ListItemSecondaryAction>
                          <IconButton color="default">
                            <AddIcon />
                          </IconButton>
                          <IconButton color="primary">
                            <AddIcon />
                          </IconButton>
                          <IconButton color="secondary">
                            <AddIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                    <List
                      dense
                      subheader={
                        <ListSubheader component="div">Icon & Label Buttons</ListSubheader>
                      }
                    >
                      <ListItem>
                        <ListItemText
                          primary="Text Buttons"
                          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
                        />
                        <ListItemSecondaryAction>
                          <Button size="small" color="default">
                            <AddIcon />
                            Small
                          </Button>
                          <Button size="medium" color="primary">
                            <AddIcon />
                            Medium
                          </Button>
                          <Button size="large" color="secondary">
                            <AddIcon />
                            Large
                          </Button>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Contained Buttons"
                          secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
                        />
                        <ListItemSecondaryAction>
                          <Button variant="contained" size="small" color="default">
                            <AddIcon />
                            Small
                          </Button>
                          <Button variant="contained" size="medium" color="primary">
                            <AddIcon />
                            Medium
                          </Button>
                          <Button variant="contained" size="large" color="secondary">
                            <AddIcon />
                            Large
                          </Button>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
              <ExpansionPanelActions>
                <Button variant="contained" size="small">
                  Cancel
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Save
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="display1">Checkboxes, Radios & Switches</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={8}>
                  <Grid item xs={12}>
				  <List
					dense
					subheader={<ListSubheader component="div">Checkboxes</ListSubheader>}
				  >
					<ListItem>
					  <ListItemText
						primary="Normal Checkboxes"
						secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>

					  <FormControlLabel
						control={<Checkbox checked value="checkedA" color="primary" />}
						label="Primary"
					  />
						<FormControlLabel
						  control={<Checkbox checked value="checkedB" color="secondary" />}
						  label="Secondary"
						/>
					  </ListItemSecondaryAction>
					</ListItem>

					<ListItem>
					  <ListItemText
						primary="Disabled Checkboxes (unchecked)"
						secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>

					<FormControlLabel
						disabled
					  control={<Checkbox value="checkedA" color="primary" />}
					  label="Primary"
					/>
						<FormControlLabel
							disabled
						  control={<Checkbox value="checkedB" color="secondary" />}
						  label="Secondary"
						/>
					  </ListItemSecondaryAction>
					</ListItem>

					<ListItem>
					  <ListItemText
						primary="Disabled Checkboxes (checked)"
						secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>

					<FormControlLabel
					disabled
					  control={<Checkbox checked value="checkedA" color="primary" />}
					  label="Primary"
					/>
						<FormControlLabel
						disabled
						  control={<Checkbox checked value="checkedB" color="secondary" />}
						  label="Secondary"
						/>
					  </ListItemSecondaryAction>
					</ListItem>

					<ListItem>
					  <ListItemText
						primary="Custom Checkboxes"
						secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>


						<FormControlLabel
						  control={
							<Checkbox
							  icon={<FavoriteBorder />}
							  checkedIcon={<Favorite />}
							  value="checkedH"
							/>
						  }
						  label="Custom icon"
						/>

					  </ListItemSecondaryAction>
					</ListItem>
				  </List>



				  <List
					dense
					subheader={<ListSubheader component="div">Radio buttons</ListSubheader>}
				  >
				  <ListItem>
					<ListItemText
					  primary="Selected Radio"
					  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					/>
					<ListItemSecondaryAction>

					<FormControlLabel
					  value="Default"
					  control={<Radio color="primary" checked />}
					  label="Default"
					  labelPlacement="end"
					/>
					<FormControlLabel
					  value="Default"
					  control={<Radio color="secondary" checked />}
					  label="Default"
					  labelPlacement="end"
					/>
					</ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					<ListItemText
					  primary="Unselected Radio"
					  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					/>
					<ListItemSecondaryAction>

					<FormControlLabel
					  value="Default"
					  control={<Radio color="primary" />}
					  label="Default"
					  labelPlacement="end"
					/>
					<FormControlLabel
					  value="Default"
					  control={<Radio color="secondary" />}
					  label="Default"
					  labelPlacement="end"
					/>
					</ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					<ListItemText
					  primary="Disabled Radio"
					  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					/>
					<ListItemSecondaryAction>

					<FormControlLabel
						disabled
					  value="Default"
					  control={<Radio color="primary" />}
					  label="Default"
					  labelPlacement="end"
					/>
					<FormControlLabel
						disabled
					  value="Default"
					  control={<Radio color="secondary" />}
					  label="Default"
					  labelPlacement="end"
					/>
					</ListItemSecondaryAction>
				  </ListItem>


				  </List>





				  <List
					dense
					subheader={<ListSubheader component="div">Switches</ListSubheader>}
				  >
				  <ListItem>
					<ListItemText
					  primary="Switches"
					  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					/>
					<ListItemSecondaryAction>

					<FormControlLabel
					  control={<Switch value="checkedB" color="primary" />}
					  label="Primary"
					/>
					<FormControlLabel
					  control={<Switch value="checkedB" color="secondary" />}
					  label="Secondary"
					/>
					</ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
				   <ListItemText
					 primary="Disabled switches (on)"
					 secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
				   />
				   <ListItemSecondaryAction>

				   <FormControlLabel
				   disabled
					 control={<Switch checked value="checkedB" color="primary" />}
					 label="Primary"
				   />
				   <FormControlLabel
				   disabled
					 control={<Switch checked value="checkedB" color="secondary" />}
					 label="Secondary"
				   />
				   </ListItemSecondaryAction>
				 </ListItem>

				 <ListItem>
				  <ListItemText
					primary="Disabled switches (off)"
					secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
				  />
				  <ListItemSecondaryAction>

				  <FormControlLabel
				  disabled
					control={<Switch value="checkedB" color="primary" />}
					label="Primary"
				  />
				  <FormControlLabel
				  disabled
					control={<Switch value="checkedB" color="secondary" />}
					label="Secondary"
				  />
				  </ListItemSecondaryAction>
				</ListItem>


				  </List>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
              <ExpansionPanelActions>
                <Button variant="contained" size="small">
                  Cancel
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Save
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>



            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="display1">Menus & Selects</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>

			  <Grid container spacing={8}>
			      <Grid item xs={12}>
				  <Grid container spacing={8}>
				      <Grid item xs={12}>
				          <List
				              dense
				              subheader={
				                  <ListSubheader component="div">
				                      Selects
				                  </ListSubheader>
				              }
				          >
						  <ListItem>
							  <ListItemText
								  primary="Simple Select"
								  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
							  />
							  <ListItemSecondaryAction>
									<FormControl>
									<InputLabel shrink htmlFor="age-label-placeholder">
									Age
									</InputLabel>
									<Select
									value={this.state.age}
									onChange={this.handleChangeAge}
									input={<Input name="age" id="age-label-placeholder" />}
									displayEmpty
									name="age"
									className={classes.selectEmpty}
									>
									<MenuItem value="">
									<em>None</em>
									</MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
									</Select>
									</FormControl>
							  </ListItemSecondaryAction>
						  </ListItem>



						  <ListItem>
							  <ListItemText
								  primary="Disabled Select"
								  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
							  />
							  <ListItemSecondaryAction>
								  <FormControl disabled>
								  <InputLabel shrink htmlFor="age-label-placeholder">
								  Age
								  </InputLabel>
								  <Select
								  value={this.state.age}
								  onChange={this.handleChangeAge}
								  input={<Input name="age" id="age-label-placeholder" />}
								  displayEmpty
								  name="age"
								  className={classes.selectEmpty}
								  >
								  <MenuItem value="">
								  <em>None</em>
								  </MenuItem>
								  <MenuItem value={10}>Ten</MenuItem>
								  <MenuItem value={20}>Twenty</MenuItem>
								  <MenuItem value={30}>Thirty</MenuItem>
								  </Select>
								  </FormControl>
							  </ListItemSecondaryAction>
						  </ListItem>

						  <ListItem>
							  <ListItemText
								  primary="Error Select"
								  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
							  />
							  <ListItemSecondaryAction>
								  <FormControl error>
								  <InputLabel shrink htmlFor="age-label-placeholder">
								  Age
								  </InputLabel>
								  <Select
								  value={this.state.age}
								  onChange={this.handleChangeAge}
								  input={<Input name="age" id="age-label-placeholder" />}
								  displayEmpty
								  name="age"
								  className={classes.selectEmpty}
								  >
								  <MenuItem value="">
								  <em>None</em>
								  </MenuItem>
								  <MenuItem value={10}>Ten</MenuItem>
								  <MenuItem value={20}>Twenty</MenuItem>
								  <MenuItem value={30}>Thirty</MenuItem>
								  </Select>
								  </FormControl>
							  </ListItemSecondaryAction>
						  </ListItem>

						  <ListItem>
							  <ListItemText
								  primary="Readonly Select"
								  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
							  />
							  <ListItemSecondaryAction>
							  <FormControl>
							  <InputLabel shrink htmlFor="age-label-placeholder">
							  Age
							  </InputLabel>
							  <Select
							  value={this.state.age}
							  onChange={this.handleChangeAge}
							  input={<Input name="age" id="age-label-placeholder" readOnly />}
							  displayEmpty
							  name="age"
							  className={classes.selectEmpty}
							  >
							  <MenuItem value="">
							  <em>None</em>
							  </MenuItem>
							  <MenuItem value={10}>Ten</MenuItem>
							  <MenuItem value={20}>Twenty</MenuItem>
							  <MenuItem value={30}>Thirty</MenuItem>
							  </Select>
							  </FormControl>
							  </ListItemSecondaryAction>
						  </ListItem>




						  <ListItem>
							  <ListItemText
								  primary="Multiple Select"
								  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
							  />
							  <ListItemSecondaryAction>
							  <FormControl className={classes.formControl}>
								  <InputLabel htmlFor="select-multiple">Name</InputLabel>
								  <Select
									multiple
									value={this.state.name}
									onChange={this.handleChangeMultipleSelect}
									input={<Input id="select-multiple" />}
									MenuProps={MenuProps}
								  >
									{names.map(name => (
									  <MenuItem
										key={name}
										value={name}
									  >
										{name}
									  </MenuItem>
									))}
								  </Select>
								</FormControl>
							  </ListItemSecondaryAction>
						  </ListItem>
				          </List>
				      </Grid>
				  </Grid>





			          <List
			              dense
			              subheader={
			                  <ListSubheader component="div">
			                      Menus
			                  </ListSubheader>
			              }
			          >
			              <ListItem>
			                  <ListItemText
			                      primary="More info button"
								  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
			                  />
			                  <ListItemSecondaryAction>
							  <IconButton
							  color="primary"
								aria-owns={anchorElMoreOptions ? 'simple-menu-more-options' : null}
								aria-haspopup="true"
								onClick={this.handleClickMenuMoreOptions}
							  >
								<MoreVertIcon />
							  </IconButton>
							  <IconButton
							  color="secondary"
								aria-owns={anchorElMoreOptions ? 'simple-menu-more-options' : null}
								aria-haspopup="true"
								onClick={this.handleClickMenuMoreOptions}
							  >
								<MoreVertIcon />
							  </IconButton>
							  <Menu
								id="simple-menu-more-options"
								anchorEl={anchorElMoreOptions}
								open={Boolean(anchorElMoreOptions)}
								onClose={this.handleCloseMenuMoreOptions}
							  >
								<MenuItem onClick={this.handleCloseMenuMoreOptions}>Profile</MenuItem>
								<MenuItem onClick={this.handleCloseMenuMoreOptions}>My account</MenuItem>
								<MenuItem onClick={this.handleCloseMenuMoreOptions}>Logout</MenuItem>
							  </Menu>
			                  </ListItemSecondaryAction>
			              </ListItem>

						  <ListItem>
			                  <ListItemText
			                      primary="Text Menu Button"
								  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
			                  />
			                  <ListItemSecondaryAction>
							  <Button
							  size="small"
							  color="default"
								aria-owns={anchorEl ? 'simple-menu' : null}
								aria-haspopup="true"
								onClick={this.handleClickMenu}
							  >
								Small
							  </Button>
							  <Button
							  size="medium"
							  color="primary"
								aria-owns={anchorEl ? 'simple-menu' : null}
								aria-haspopup="true"
								onClick={this.handleClickMenu}
							  >
								Medium
							  </Button>
							  <Button
							  size="large"
							  color="secondary"
								aria-owns={anchorEl ? 'simple-menu' : null}
								aria-haspopup="true"
								onClick={this.handleClickMenu}
							  >
								Large
							  </Button>
								  <Menu
									id="simple-menu"
									anchorEl={anchorEl}
									open={Boolean(anchorEl)}
									onClose={this.handleCloseMenu}
								  >
									<MenuItem onClick={this.handleCloseMenu}>Profile</MenuItem>
									<MenuItem onClick={this.handleCloseMenu}>My account</MenuItem>
									<MenuItem onClick={this.handleCloseMenu}>Logout</MenuItem>
								  </Menu>
			                  </ListItemSecondaryAction>
			              </ListItem>

						  <ListItem>
			                  <ListItemText
			                      primary="Contained Menu Button"
								  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
			                  />
			                  <ListItemSecondaryAction>
							  <Button
							  size="small"
							  color="default"
							  variant="contained"
								aria-owns={anchorEl ? 'simple-menu' : null}
								aria-haspopup="true"
								onClick={this.handleClickMenu}
							  >
								Small
							  </Button>
							  <Button
							  size="medium"
							  color="primary"
							  variant="contained"
								aria-owns={anchorEl ? 'simple-menu' : null}
								aria-haspopup="true"
								onClick={this.handleClickMenu}
							  >
								Medium
							  </Button>
							  <Button
							  size="large"
							  color="secondary"
							  variant="contained"
								aria-owns={anchorEl ? 'simple-menu' : null}
								aria-haspopup="true"
								onClick={this.handleClickMenu}
							  >
								Large
							  </Button>
								  <Menu
									id="simple-menu"
									anchorEl={anchorEl}
									open={Boolean(anchorEl)}
									onClose={this.handleCloseMenu}
								  >
									<MenuItem onClick={this.handleCloseMenu}>Profile</MenuItem>
									<MenuItem onClick={this.handleCloseMenu}>My account</MenuItem>
									<MenuItem onClick={this.handleCloseMenu}>Logout</MenuItem>
								  </Menu>
			                  </ListItemSecondaryAction>
			              </ListItem>

						  <ListItem>
			                  <ListItemText
			                      primary="Icon Menu Button"
								  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
			                  />
			                  <ListItemSecondaryAction>

							  <IconButton
							  color="primary"
								aria-owns={anchorEl ? 'simple-menu' : null}
								aria-haspopup="true"
								onClick={this.handleClickMenu}
							  >
								<AccountCircle />
							  </IconButton>
							  <IconButton
							  color="secondary"
								aria-owns={anchorEl ? 'simple-menu' : null}
								aria-haspopup="true"
								onClick={this.handleClickMenu}
							  >
								<AccountCircle />
							  </IconButton>
								  <Menu
									id="simple-menu"
									anchorEl={anchorEl}
									open={Boolean(anchorEl)}
									onClose={this.handleCloseMenu}
								  >
									<MenuItem onClick={this.handleCloseMenu}>Profile</MenuItem>
									<MenuItem onClick={this.handleCloseMenu}>My account</MenuItem>
									<MenuItem onClick={this.handleCloseMenu}>Logout</MenuItem>
								  </Menu>
			                  </ListItemSecondaryAction>
			              </ListItem>

						  <ListItem>
			                  <ListItemText
			                      primary="Icon & Label Menu Button"
								  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
			                  />
			                  <ListItemSecondaryAction>
							  <Button
							  size="small"
							  color="default"
								aria-owns={anchorEl ? 'simple-menu' : null}
								aria-haspopup="true"
								onClick={this.handleClickMenu}
							  >
								<AccountCircle />
								Account
							  </Button>
							  <Button
							  size="medium"
							  color="primary"
								aria-owns={anchorEl ? 'simple-menu' : null}
								aria-haspopup="true"
								onClick={this.handleClickMenu}
							  >
								<AccountCircle />
								Account
							  </Button>
							  <Button
							  size="large"
							  color="secondary"
								aria-owns={anchorEl ? 'simple-menu' : null}
								aria-haspopup="true"
								onClick={this.handleClickMenu}
							  >
								<AccountCircle />
								Account
							  </Button>
								  <Menu
									id="simple-menu"
									anchorEl={anchorEl}
									open={Boolean(anchorEl)}
									onClose={this.handleCloseMenu}
								  >
									<MenuItem onClick={this.handleCloseMenu}>Profile</MenuItem>
									<MenuItem onClick={this.handleCloseMenu}>My account</MenuItem>
									<MenuItem onClick={this.handleCloseMenu}>Logout</MenuItem>
								  </Menu>
			                  </ListItemSecondaryAction>
			              </ListItem>

						  <ListItem>
			                  <ListItemText
			                      primary="Selected Status button"
								  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
			                  />
			                  <ListItemSecondaryAction>
							  <List component="nav">
								<ListItem
								  button
								  aria-haspopup="true"
								  aria-controls="lock-menu"
								  aria-label="When device is locked"
								  onClick={this.handleClickListItemMenuState}
								>
								  <ListItemText
									primary="When device is locked"
									secondary={options[this.state.selectedIndexMenuState]}
								  />
								</ListItem>
							  </List>
							  <Menu
								id="lock-menu"
								anchorEl={anchorElMenuState}
								open={Boolean(anchorElMenuState)}
								onClose={this.handleCloseMenuState}
							  >
								{options.map((option, index) => (
								  <MenuItem
									key={option}
									disabled={index === 0}
									selected={index === this.state.selectedIndexMenuState}
									onClick={event => this.handleMenuItemClickMenuState(event, index)}
								  >
									{option}
								  </MenuItem>
								))}
							  </Menu>
			                  </ListItemSecondaryAction>
			              </ListItem>
			          </List>
			      </Grid>
			  </Grid>




              </ExpansionPanelDetails>
              <ExpansionPanelActions>
                <Button variant="contained" size="small">
                  Cancel
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Save
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="display1">Chips</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>



			  <Grid container spacing={8}>
			      <Grid item xs={12}>
				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Basic
						  </ListSubheader>
					  }
				  >
				  <ListItem>
					  <ListItemText
						  primary="Basic Chips"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Chip color="default" label="Basic" className={classes.chip} />
					  <Chip color="primary" label="Basic" className={classes.chip} />
					  <Chip color="secondary" label="Basic" className={classes.chip} />
					  </ListItemSecondaryAction>
				  </ListItem>


				  </List>




				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Avatar
						  </ListSubheader>
					  }
				  >


				  <ListItem>
					  <ListItemText
						  primary="Initial Chips"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Chip avatar={<Avatar>AB</Avatar>} color="default" label="Basic" className={classes.chip} />
					  <Chip avatar={<Avatar>CD</Avatar>} color="primary" label="Basic" className={classes.chip} />
					  <Chip avatar={<Avatar>EF</Avatar>} color="secondary" label="Basic" className={classes.chip} />
					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Icon Chips"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Chip avatar={<Avatar><FaceIcon /></Avatar>} color="default" label="Basic" className={classes.chip} />
					  <Chip avatar={<Avatar><FaceIcon /></Avatar>} color="primary" label="Basic" className={classes.chip} />
					  <Chip avatar={<Avatar><FaceIcon /></Avatar>} color="secondary" label="Basic" className={classes.chip} />
					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Image Chips"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Chip avatar={<Avatar alt="Remy Sharp" src="/static/images/remy.jpg" />} color="default" label="Basic" className={classes.chip} />
					  </ListItemSecondaryAction>
				  </ListItem>
				  </List>





				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Interactive
						  </ListSubheader>
					  }
				  >

				  <ListItem>
					  <ListItemText
						  primary="Clickable Chips"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Chip clickable color="default" label="Click" onClick={this.handleClickChip} className={classes.chip} />
					  <Chip clickable color="primary" label="Click" onClick={this.handleClickChip} className={classes.chip} />
					  <Chip clickable color="secondary" label="Click" onClick={this.handleClickChip} className={classes.chip} />
					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Deletable Chips"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Chip clickable color="default" label="Delete" onDelete={this.handleDeleteChip} className={classes.chip} />
					  <Chip clickable color="primary" label="Delete" onDelete={this.handleDeleteChip} className={classes.chip} />
					  <Chip clickable color="secondary" label="Delete" onDelete={this.handleDeleteChip} className={classes.chip} />
					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Clickable & Deletable Chips"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Chip clickable color="default" label="Click & Delete" onClick={this.handleClickChip} onDelete={this.handleDeleteChip} className={classes.chip} />
					  <Chip clickable color="primary" label="Click & Delete" onClick={this.handleClickChip} onDelete={this.handleDeleteChip} className={classes.chip} />
					  <Chip clickable color="secondary" label="Click & Delete" onClick={this.handleClickChip} onDelete={this.handleDeleteChip} className={classes.chip} />
					  </ListItemSecondaryAction>
				  </ListItem>


				  </List>
			      </Grid>
			  </Grid>




              </ExpansionPanelDetails>
              <ExpansionPanelActions>
                <Button variant="contained" size="small">
                  Cancel
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Save
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>

			<ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="display1">Progress</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>

			  <Grid container spacing={8}>
			      <Grid item xs={12}>
				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Circular Progress
						  </ListSubheader>
					  }
				  >
				  <ListItem>
					  <ListItemText
						  primary="Indeterminate"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
						  <CircularProgress size={20} className={classes.progress} color="default" />
						  <CircularProgress size={25} className={classes.progress} color="primary" />
						  <CircularProgress size={30} className={classes.progress} color="secondary" />
					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Determinate"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <CircularProgress
						className={classes.progress}
						variant="determinate"
						value={50}
						size={20}
						color="default"
					  />
					  <CircularProgress
						className={classes.progress}
						variant="determinate"
						size={25}
						value={50}
						color="primary"
					  />
					  <CircularProgress
						className={classes.progress}
						color="secondary"
						variant="determinate"
						size={30}
						value={50}
					  />
					  </ListItemSecondaryAction>
				  </ListItem>
				  </List>



				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Linear Progress
						  </ListSubheader>
					  }
				  >
				  <ListItem>
					  <ListItemText
						  primary="Indeterminate"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
						  <LinearProgress className={classes.linearProgress} color="primary" />
						  <LinearProgress className={classes.linearProgress} color="secondary" />
					  </ListItemSecondaryAction>
				  </ListItem>


				  </List>
			      </Grid>
			  </Grid>




              </ExpansionPanelDetails>
              <ExpansionPanelActions>
                <Button variant="contained" size="small">
                  Cancel
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Save
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>






			<ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="display1">Typography</Typography>

              </ExpansionPanelSummary>
              <ExpansionPanelDetails>

			  <Grid container spacing={8}>
			      <Grid item xs={12}>
				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Application Text
						  </ListSubheader>
					  }
				  >

				  <ListItem>
					  <ListItemText
						  primary="Display 4"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />

					  <ListItemSecondaryAction>
					  <Typography variant="display4">Display 4</Typography>

					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Display 3"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />

					  <ListItemSecondaryAction>
					  <Typography variant="display3">Display 3</Typography>

					  </ListItemSecondaryAction>

				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Display 2"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />

					  <ListItemSecondaryAction>
					  <Typography variant="display2">Display 2</Typography>

					  </ListItemSecondaryAction>

				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Display 1"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />

					  <ListItemSecondaryAction>
					  <Typography variant="display1">Display 1</Typography>

					  </ListItemSecondaryAction>

				  </ListItem>

				  </List>


				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Copy Text
						  </ListSubheader>
					  }
				  >
				  <ListItem>
					  <ListItemText
						  primary="Headline"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />

					  <ListItemSecondaryAction>
					  <Typography variant="headline">Headline</Typography>

					  </ListItemSecondaryAction>

				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Title"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />

					  <ListItemSecondaryAction>
					  <Typography variant="title">Title</Typography>

					  </ListItemSecondaryAction>

				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Subheading"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />

					  <ListItemSecondaryAction>
					  <Typography variant="subheading">Subheading</Typography>

					  </ListItemSecondaryAction>

				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Body Emphasised"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />

					  <ListItemSecondaryAction>
					  <Typography variant="body2">Body 2</Typography>

					  </ListItemSecondaryAction>

				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Body"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />

					  <ListItemSecondaryAction>
					  <Typography variant="body1">Body 1</Typography>

					  </ListItemSecondaryAction>

				  </ListItem>

				  </List>
			      </Grid>
			  </Grid>




              </ExpansionPanelDetails>
              <ExpansionPanelActions>
                <Button variant="contained" size="small">
                  Cancel
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Save
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>




			<ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="display1">Tables</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>

			  <Grid container spacing={8}>
			      <Grid item xs={12}>
				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Simple Table
						  </ListSubheader>
					  }
				  >
					  <ListItem>
					  <Paper className={classes.tableContainer}>
						  <Table className={classes.table}>
							<TableHead>
							  <TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Type</TableCell>
								<TableCell>Created</TableCell>
								<TableCell>Created by</TableCell>
								<TableCell></TableCell>
							  </TableRow>
							</TableHead>
							<TableBody>
							  {data.map(n => {
								return (
								  <TableRow className={classes.tableRow} key={n.id}>
									<TableCell component="th" scope="row">
									  <MovieIcon />{n.name}
									</TableCell>
									<TableCell>{n.film}</TableCell>
									<TableCell>{n.created}</TableCell>
									<TableCell>{n.createdBy}</TableCell>
									<TableCell><IconButton
	  							  color="primary"
	  								aria-owns={anchorElMoreOptions ? 'simple-menu-more-options' : null}
	  								aria-haspopup="true"
	  								onClick={this.handleClickMenuMoreOptions}
	  							  >
	  								<MoreVertIcon />
	  							  </IconButton></TableCell>
								  </TableRow>
								);
							  })}
							</TableBody>
						  </Table>
						</Paper>

					  </ListItem>
				  </List>

				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Multiple Select Table
						  </ListSubheader>
					  }
				  >
					  <ListItem>
					  <Paper className={classes.tableContainer}>
						  <Table className={classes.table}>
							<TableHead>
							  <TableRow>
							  <TableCell padding="none">
		                        <Checkbox  />
		                      </TableCell>
							  <TableCell>Name</TableCell>
							  <TableCell>Type</TableCell>
							  <TableCell>Created</TableCell>
							  <TableCell>Created by</TableCell>
							  </TableRow>
							</TableHead>
							<TableBody>
							{data.map(n => {
							  return (
								<TableRow className={classes.tableRow} key={n.id}>
								<TableCell padding="none">
  		                        <Checkbox  />
  		                      </TableCell>
								  <TableCell>
									<MovieIcon />{n.name}
								  </TableCell>
								  <TableCell>{n.film}</TableCell>
								  <TableCell>{n.created}</TableCell>
								  <TableCell>{n.createdBy}</TableCell>
								</TableRow>
							  );
							})}
							</TableBody>
						  </Table>
						</Paper>

					  </ListItem>
				  </List>

				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Paginated Table
						  </ListSubheader>
					  }
				  >
					  <ListItem>
					  <Paper className={classes.tableContainer}>
						  <Table className={classes.table}>
							<TableHead>
							  <TableRow>
							  <TableCell padding="none">
		                        <Checkbox  />
		                      </TableCell>
							  <TableCell>Name</TableCell>
							  <TableCell>Type</TableCell>
							  <TableCell>Created</TableCell>
							  <TableCell>Created by</TableCell>
							  </TableRow>
							</TableHead>
							<TableBody>
							{data.map(n => {
							return (
							  <TableRow className={classes.tableRow} key={n.id}>
							  <TableCell padding="none">
								  <Checkbox  />
								</TableCell>
								<TableCell>
								  <MovieIcon />{n.name}
								</TableCell>
								<TableCell>{n.film}</TableCell>
								<TableCell>{n.created}</TableCell>
								<TableCell>{n.createdBy}</TableCell>
							  </TableRow>
							);
						  })}
							</TableBody>
						  </Table>
						</Paper>

					  </ListItem>
				  </List>
			      </Grid>
			  </Grid>




              </ExpansionPanelDetails>
              <ExpansionPanelActions>
                <Button variant="contained" size="small">
                  Cancel
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Save
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>





			<ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="display1">Stepper</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>

			  <div className={classes.stepper}>
				<Stepper activeStep={activeStep}>
				  {steps.map((label, index) => {
					const props = {};
					const labelProps = {};
					if (this.isStepOptional(index)) {
					  labelProps.optional = <Typography variant="caption">Optional</Typography>;
					}
					if (this.isStepSkipped(index)) {
					  props.completed = false;
					}
					return (
					  <Step key={label} {...props}>
						<StepLabel {...labelProps}>{label}</StepLabel>
					  </Step>
					);
				  })}
				</Stepper>
				<div>
				  {activeStep === steps.length ? (
					<div>
						<Typography variant="body" color="inherit" noWrap>
						  All steps completed
						</Typography>
					</div>
				  ) : (
					<div>{getStepContent(activeStep)}</div>
				  )}
				</div>
				</div>




              </ExpansionPanelDetails>
              <ExpansionPanelActions>
			  <Button
				disabled={activeStep === 0}
				onClick={this.handleBack}
				className={classes.button}
			  >
				Back
			  </Button>
			  {this.isStepOptional(activeStep) && (
				<Button
				  variant="contained"
				  color="primary"
				  onClick={this.handleSkip}
				  className={classes.button}
				>
				  Skip
				</Button>
			  )}
			  <Button
				variant="contained"
				color="primary"
				onClick={this.handleNext}
				className={classes.button}
			  >
				{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
			  </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="display1">Avatars</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>


			  <Grid container spacing={8}>
			      <Grid item xs={12}>
				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Icon Avatars
						  </ListSubheader>
					  }
				  >
				  <ListItem>
					  <ListItemText
						  primary="Basic"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
						  <Avatar color="primary" className={classes.avatar}>
							<FolderIcon />
						  </Avatar>
						  <Avatar className={classes.avatar}>
							<FolderIcon />
						  </Avatar>
						  <Avatar className={classes.avatar}>
							<FolderIcon />
						  </Avatar>
					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Coloured Icon"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
						  <Avatar className={classes.avatar}>
							<FolderIcon color="default" />
						  </Avatar>
						  <Avatar className={classes.avatar}>
							<FolderIcon color="primary" />
						  </Avatar>
						  <Avatar className={classes.avatar}>
							<FolderIcon color="secondary" />
						  </Avatar>
					  </ListItemSecondaryAction>
				  </ListItem>
				  </List>

				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Text Avatars
						  </ListSubheader>
					  }
				  >
				  <ListItem>
					  <ListItemText
						  primary="Basic"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
						  <Avatar className={classes.avatar}>
							AB
						  </Avatar>
						  <Avatar className={classes.avatar}>
							CD
						  </Avatar>
						  <Avatar className={classes.avatar}>
							EF
						  </Avatar>
					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Coloured Icon"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
						  <Avatar className={classes.avatar}>
							AB
						  </Avatar>
						  <Avatar className={classes.avatar}>
							CD
						  </Avatar>
						  <Avatar className={classes.avatar}>
							EF
						  </Avatar>
					  </ListItemSecondaryAction>
				  </ListItem>
				  </List>

				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Image Avatars
						  </ListSubheader>
					  }
				  >
				  <ListItem>
					  <ListItemText
						  primary="Basic"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
						  <Avatar alt="Remy Sharp" src="/static/images/remy.jpg" />
					  </ListItemSecondaryAction>
				  </ListItem>


				  </List>
			      </Grid>
			  </Grid>




              </ExpansionPanelDetails>
              <ExpansionPanelActions>
                <Button variant="contained" size="small">
                  Cancel
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Save
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="display1">Drawers & Dialogs</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>

			  <Grid container spacing={8}>
			      <Grid item xs={12}>
				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Drawers
						  </ListSubheader>
					  }
				  >
				  <ListItem>
					  <ListItemText
						  primary="Left handside"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Button variant="contained" color="secondary" size="small" onClick={this.toggleDrawer('left', true)}>Open</Button>

					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Right handside"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Button variant="contained" color="secondary" size="small" onClick={this.toggleDrawer('right', true)}>Open</Button>

					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Top"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Button variant="contained" color="secondary" size="small" onClick={this.toggleDrawer('top', true)}>Open</Button>
					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Bottom"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
						  <Button variant="contained" color="secondary" size="small" onClick={this.toggleDrawer('bottom', true)}>Open</Button>
					  </ListItemSecondaryAction>
				  </ListItem>


				  </List>




				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Dialogs
						  </ListSubheader>
					  }
				  >
				  <ListItem>
					  <ListItemText
						  primary="Confirmation"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Button variant="contained" size="small" color="secondary" onClick={this.handleClickOpen}>Open</Button>

					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Prompt"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Button variant="contained" size="small" color="secondary" onClick={this.handleClickOpenFormDialog}>Open</Button>

					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Full screen dialog"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Button variant="contained" size="small" color="secondary" onClick={this.handleClickOpenFullScreenDialog}>Open</Button>
					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Scroll (Paper)"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Button variant="contained" size="small" color="secondary" onClick={this.handleClickOpenScroll('paper')}>Open</Button>
					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					 <ListItemText
						 primary="Scroll (Body)"
						 secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					 />
					 <ListItemSecondaryAction>
					 <Button variant="contained" size="small" color="secondary" onClick={this.handleClickOpenScroll('body')}>Open</Button>
					 </ListItemSecondaryAction>
				 </ListItem>


				  </List>

					  <Dialog
					    open={this.state.open}
					    onClose={this.handleClose}
					    aria-labelledby="alert-dialog-title"
					    aria-describedby="alert-dialog-description"
					  >
					    <DialogTitle id="alert-dialog-title">
					  	{"Use Google's location service?"}
					    </DialogTitle>
					    <DialogContent>
					  	<DialogContentText id="alert-dialog-description">
					  	  Let Google help apps determine location. This means sending anonymous location
					  	  data to Google, even when no apps are running.
					  	</DialogContentText>
					    </DialogContent>
					    <DialogActions>
					  	<Button onClick={this.handleClose} color="primary">
					  	  Disagree
					  	</Button>
					  	<Button onClick={this.handleClose} color="primary" autoFocus>
					  	  Agree
					  	</Button>
					    </DialogActions>
					  </Dialog>

					  <Dialog
	                    open={this.state.openFormDialog}
	                    onClose={this.handleCloseFormDialog}
	                    aria-labelledby="alert-dialog-title"
	                    aria-describedby="alert-dialog-description"
	                  >
	                    <DialogTitle id="alert-dialog-title">{'Choose a name'}</DialogTitle>
	                    <DialogContent>
	                      <DialogContentText id="alert-dialog-description">
	                        Please choose a cool name.
	                      </DialogContentText>
	                      <TextField
	                        disableUnderline
	                        fullWidth
	                        placeholder="Placeholder"
	                        margin="normal"
	                        InputLabelProps={{
	                          shrink: true,
	                        }}
	                      />
	                    </DialogContent>
	                    <DialogActions>
	                      <Button onClick={this.handleCloseFormDialog} color="primary">
	                        Disagree
	                      </Button>
	                      <Button onClick={this.handleCloseFormDialog} color="primary" autoFocus>
	                        Agree
	                      </Button>
	                    </DialogActions>
	                  </Dialog>

					  <Dialog
	                    fullScreen
	                    open={this.state.openFullScreenDialog}
	                    onClose={this.handleCloseFullScreenDialog}
	                    TransitionComponent={Transition}
	                  >
	                    <AppBar className={classes.appBar}>
	                      <Toolbar>
	                        <IconButton
	                          color="inherit"
	                          onClick={this.handleCloseFullScreenDialog}
	                          aria-label="Close"
	                        >
	                          <CloseIcon />
	                        </IconButton>
	                        <Typography variant="title" color="inherit" className={classes.flex}>
	                          Sound
	                        </Typography>
	                        <Button color="inherit" onClick={this.handleCloseFullScreenDialog}>
	                          save
	                        </Button>
	                      </Toolbar>
	                    </AppBar>
	                    <List>
	                      <ListItem button>
	                        <ListItemText primary="Phone ringtone" secondary="Titania" />
	                      </ListItem>
	                      <ListItem button>
	                        <ListItemText primary="Default notification ringtone" secondary="Tethys" />
	                      </ListItem>
	                    </List>
	                  </Dialog>

					  <Dialog
	                    open={this.state.openScroll}
	                    onClose={this.handleCloseScroll}
	                    scroll={this.state.scroll}
	                    aria-labelledby="scroll-dialog-title"
	                  >
	                    <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
	                    <DialogContent>
	                      <DialogContentText>
	                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
	                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
	                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
	                        consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
	                        auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
	                        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
	                        ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus
	                        sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
	                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
	                        commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
	                        lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum
	                        nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
	                        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
	                        fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
	                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
	                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
	                        scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
	                        rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur.
	                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
	                        odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
	                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
	                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
	                        eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
	                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean
	                        lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
	                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla
	                        non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum.
	                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
	                        porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
	                        vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
	                        rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur.
	                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
	                        odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
	                        consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
	                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
	                        eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
	                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean
	                        lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
	                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla
	                        non metus auctor fringilla.
	                      </DialogContentText>
	                    </DialogContent>
	                    <DialogActions>
	                      <Button onClick={this.handleCloseScroll} color="primary">
	                        Cancel
	                      </Button>
	                      <Button onClick={this.handleCloseScroll} color="primary">
	                        Subscribe
	                      </Button>
	                    </DialogActions>
	                  </Dialog>




						  <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
							<div
							tabIndex={0}
							role="button"
							onClick={this.toggleDrawer('left', false)}
							onKeyDown={this.toggleDrawer('left', false)}
							>
							Hey
							</div>
						  </Drawer>
						  <Drawer
							anchor="top"
							open={this.state.top}
							onClose={this.toggleDrawer('top', false)}
						  >
							<div
							tabIndex={0}
							role="button"
							onClick={this.toggleDrawer('top', false)}
							onKeyDown={this.toggleDrawer('top', false)}
							>
							Hey
							</div>
						  </Drawer>
						  <Drawer
							anchor="bottom"
							open={this.state.bottom}
							onClose={this.toggleDrawer('bottom', false)}
						  >
							<div
							tabIndex={0}
							role="button"
							onClick={this.toggleDrawer('bottom', false)}
							onKeyDown={this.toggleDrawer('bottom', false)}
							>
							Hey
							</div>
						  </Drawer>
						  <Drawer
							anchor="right"
							open={this.state.right}
							onClose={this.toggleDrawer('right', false)}
						  >
							<div
							tabIndex={0}
							role="button"
							onClick={this.toggleDrawer('right', false)}
							onKeyDown={this.toggleDrawer('right', false)}
							>
							Hey
							</div>
						  </Drawer>
			      </Grid>
			  </Grid>




              </ExpansionPanelDetails>
              <ExpansionPanelActions>
                <Button variant="contained" size="small">
                  Cancel
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Save
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="display1">Snackbars</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>

			  <Grid container spacing={8}>
			      <Grid item xs={12}>
				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Simple Snackbars
						  </ListSubheader>
					  }
				  >
				  <ListItem>
					  <ListItemText
						  primary="Top Center"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Button
					  variant="contained" color="secondary" size="small"
						onClick={this.handleClickSnackBar({ vertical: 'top', horizontal: 'center' })}>
						Eat
					  </Button>
					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Top Right"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Button
					  variant="contained" color="secondary" size="small"
						onClick={this.handleClickSnackBar({ vertical: 'top', horizontal: 'right' })}
					  >
						Eat
					  </Button>
					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Bottom Right"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Button
					  variant="contained" color="secondary" size="small"
						onClick={this.handleClickSnackBar({ vertical: 'bottom', horizontal: 'right' })}
					  >
						Eat
					  </Button>
					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Bottom Center"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Button
					  variant="contained" color="secondary" size="small"
						onClick={this.handleClickSnackBar({ vertical: 'bottom', horizontal: 'center' })}
					  >
						Eat
					  </Button>
					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Bottom Left"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Button
					  variant="contained" color="secondary" size="small"
						onClick={this.handleClickSnackBar({ vertical: 'bottom', horizontal: 'left' })}
					  >
						Eat
					  </Button>
					  </ListItemSecondaryAction>
				  </ListItem>

				  <ListItem>
					  <ListItemText
						  primary="Top Left"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Button
					  variant="contained" color="default" size="small" onClick={this.handleClickSnackBar({ vertical: 'top', horizontal: 'left' })}>
						Eat
					  </Button>
					  </ListItemSecondaryAction>
				  </ListItem>
				  </List>





				  <List
					  dense
					  subheader={
						  <ListSubheader component="div">
							  Complex Snackbars
						  </ListSubheader>
					  }
				  >
				  <ListItem>
					  <ListItemText
						  primary="Undo & Close"
						  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed mollis metus. Aenean eu ultrices orci, nec sodales velit. Duis id ante elit. Integer maximus pellentesque risus, et ullamcorper lectus scelerisque id."
					  />
					  <ListItemSecondaryAction>
					  <Button variant="contained" size="small" color="default" onClick={this.handleClickComplexSnack}>Eat</Button>
					  </ListItemSecondaryAction>
				  </ListItem>

				  </List>
			      </Grid>
			  </Grid>
			  <Snackbar
		          anchorOrigin={{
		            vertical: 'bottom',
		            horizontal: 'left',
		          }}
		          open={this.state.openComplexSnack}
		          autoHideDuration={6000}
		          onClose={this.handleCloseComplexSnack}
		          ContentProps={{
		            'aria-describedby': 'message-id',
		          }}
		          message={<span id="message-id">Note archived</span>}
		          action={[
		            <Button key="undo" color="secondary" size="small" onClick={this.handleCloseComplexSnack}>
		              UNDO
		            </Button>,
		            <IconButton
		              key="close"
		              aria-label="Close"
		              color="inherit"
		              className={classes.close}
		              onClick={this.handleCloseComplexSnack}
		            >
		              <CloseIcon />
		            </IconButton>,
		          ]}
		        />



                <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  open={this.state.openSnackBar}
                  onClose={this.handleCloseSnackBar}
                  ContentProps={{
                    'aria-describedby': 'message-id',
                  }}
                  message={<span id="message-id">I love snacks</span>}
                />
              </ExpansionPanelDetails>
              <ExpansionPanelActions>
                <Button variant="contained" size="small">
                  Cancel
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Save
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>

            <ExpansionPanel disabled>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="display1">Disabled Expansion Panel</Typography>
              </ExpansionPanelSummary>
            </ExpansionPanel>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

AnthraciteSettings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnthraciteSettings);
