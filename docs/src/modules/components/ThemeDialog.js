import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import * as _ from 'lodash';

let overrides = {
  MuiAppBar: ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "colorDefault", "colorPrimary", "colorSecondary"],
  MuiAvatar: ["root", "colorDefault", "img"],
  MuiBackdrop: ["root", "invisible"],
  MuiBadge: ["root"],
  MuiBottomNavigation: ["root"],
  MuiBottomNavigationAction: ["root", "selected","iconOnly","wrapper", "label"],
  MuiButton: ['root', 'label', 'text'],
  MuiButtonBase: ["root"],
  MuiCard: ["root"],
  MuiCardActions: ["root", "action"],
  MuiCardContent: ["root"],
  MuiCardHeader: ["root", "avatar", "action", "content", "title", "subheader"],
  MuiCardMedia: ["root", "media"],
  MuiCheckbox: ["root", "checked", "disabled", "colorPrimary", "colorSecondary"],
  MuiChip: ["root"],
  MuiCircularProgress: ["root"],
  MuiClickAwayListener: ["root"],
  MuiCollapse: ["container", "entered", "wrapper", "wrapperInner"],
  MuiDialog: ["root"],
  MuiDialogActions: ["root", "action"],
  MuiDialogContent: ["root"],
  MuiDialogContentText: ["root"],
  MuiDialogTitle: ["root"],
  MuiDivider: ["root"],
  MuiDrawer: ["root"],
  MuiExpansionPanel: ["root"],
  MuiExpansionPanelActions: ["root"],
  MuiExpansionPanelDetails: ["root"],
  MuiExpansionPanelSummary: ["root"],
  MuiFade: ["root"],
  MuiFormControl: ["root"],
  MuiFormControlLabel: ["root"],
  MuiFormGroup: ["root"],
  MuiFormHelperText: ["root"],
  MuiFormLabel: ["root", "focused", "disabled", "error", "filled", "required", "asterisk"],
  MuiGrid: ["container","item","zeroMinWidth","direction-xs-column","direction-xs-column-reverse","direction-xs-row-reverse","wrap-xs-nowrap","wrap-xs-wrap-reverse","align-items-xs-center","align-items-xs-flex-start","align-items-xs-flex-end","align-items-xs-baseline","align-content-xs-center","align-content-xs-flex-start","align-content-xs-flex-end","align-content-xs-space-between","align-content-xs-space-around","justify-xs-center","justify-xs-flex-end","justify-xs-space-between","justify-xs-space-around","justify-xs-space-evenly","spacing-xs-8","spacing-xs-16","spacing-xs-24","spacing-xs-32","spacing-xs-40","grid-xs-auto","grid-xs-true","grid-xs-1","grid-xs-2","grid-xs-3","grid-xs-4","grid-xs-5","grid-xs-6","grid-xs-7","grid-xs-8","grid-xs-9","grid-xs-10","grid-xs-11","grid-xs-12"],
  MuiGridList: ["root"],
  MuiGridListTile: ["root"],
  MuiGridListTileBar: ["root"],
  MuiGrow: ["root"],
  MuiHidden: ["root"],
  MuiIcon: ["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit"],
  MuiIconButton: ["root","colorInherit","colorPrimary","colorSecondary","disabled","label"],
  MuiInput: ["root"],
  MuiInputAdornment: ["root"],
  MuiInputLabel: ["root"],
  MuiLinearProgress: ["root"],
  MuiList: ["root", "padding", "dense", "subheader"],
  MuiListItem: ["root","container","focusVisible","default","dense","disabled","divider","gutters","button","secondaryAction"],
  MuiListItemAvatar: ["root", "icon"],
  MuiListItemIcon: ["root"],
  MuiListItemSecondaryAction: ["root"],
  MuiListItemText: ["root","inset","dense","primary","secondary","textDense"],
  MuiListSubheader: ["root","colorPrimary","colorInherit","inset","sticky"],
  MuiMenu: ["paper"],
  MuiMenuItem: ["root", "selected"],
  MuiMenuList: ["root", "padding", "dense", "subheader"],
  MuiMobileStepper: ["root","positionBottom","positionTop","positionStatic","dots","dot","dotActive","progress"],
  MuiModal: ["root", "hidden"],
  MuiNativeSelect: ["root","select","selectMenu","disabled","icon"],
  MuiPaper: ["root","rounded","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"],
  MuiPopover: ["root"],
  MuiPopper: ["root"],
  MuiPortal: ["root"],
  MuiRadio: ["root"],
  MuiRadioGroup: ["root"],
  MuiRootRef: ["root"],
  MuiSelect: ["root"],
  MuiSlide: ["root"],
  MuiSnackbar: ["root"],
  MuiSnackbarContent: ["root"],
  MuiStep: ["root"],
  MuiStepButton: ["root"],
  MuiStepConnector: ["root"],
  MuiStepContent: ["root"],
  MuiStepIcon: ["root"],
  MuiStepLabel: ["root"],
  MuiStepper: ["root"],
  MuiSvgIcon: ["root"],
  MuiSwipeableDrawer: ["root"],
  MuiSwitch: ["root"],
  MuiTable: ["root"],
  MuiTableBody: ["root"],
  MuiTableCell: ["root","head","body","footer","numeric","paddingDense","paddingCheckbox","paddingNone"],
  MuiTableFooter: ["root"],
  MuiTableHead: ["root"],
  MuiTablePagination: ["root","toolbar","spacer","caption","selectRoot","select","selectIcon","input","menuItem","actions"],
  MuiTableRow: ["root","selected","hover","head","footer"],
  MuiTableSortLabel: ["root","active","icon","iconDirectionDesc","iconDirectionAsc"],
  MuiTabs: ["root"],
  MuiTab: ["root"],
  MuiTextField: ["root"],
  MuiToolbar: ["root", "gutters", "regular", "dense"],
  MuiTooltip: ["root"],
  MuiTypography: ["root","display4","display3","display2","display1","headline","title","subheading","body2","body1","caption","button","alignLeft","alignCenter","alignRight","alignJustify","noWrap","gutterBottom","paragraph","colorInherit","colorPrimary","colorSecondary","colorTextPrimary","colorTextSecondary","colorError"],
  MuiZoom: ["root"],
};

let typos = ["display4", "display3", "display2", "display1", "headline", "title", "subheading", "body2", "body1", "caption", "button"];

class ThemeDialog extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      tab: 'palette',
      selectedOverride: 'MuiButton',
      selectedClass: 'root',
      selectedTypo: 'display4',
      theme: props.theme || {},
      tempJson: {},
    }
  }


  handleChange = (name, type) => (event,value) => {
    value = value || event.target.value;
    if (type === 'number') {
      value = Number(value);
    }
    this.updateValue(value, name);
  };

  handleSetJson = name => event => {
    try {
      const value = JSON.parse(event.target.value);
      this.updateValue(value, name);
      this.updateValue("", "tempJson."+name.replace('.','_'));
    } catch (e) {
      this.updateValue(event.target.value, "tempJson."+name.replace('.','_'));
    }
  };

  getTmpJson = name => {
    let tmpvalue = _.get(this.state, "tempJson."+name.replace('.','_'));
    if (tmpvalue) {
      return tmpvalue;
    }
  };

  getJson = name => {
    let tmpJson = this.getTmpJson(name);

    return tmpJson
      ? tmpJson
      : (_.get(this.state, name)
        ? JSON.stringify(_.get(this.state, name), null, 4)
        : "")
  };

  updateValue(value, name) {
    this.setState(state => {
      let s = _.clone(state);
      if (value) {
        _.setWith(s, name, value, _.clone);
      } else {
        _.unset(s, name);
      }
      return s;
    });
  }

  ThemeTextField = (props) => (<TextField margin="dense" label={props.label} fullWidth
                                          type={props.type}
                                          value={_.get(this.state, props.name) ? _.get(this.state, props.name) : ""}
                                          onChange={this.handleChange(props.name, props.type)}
  />);

  render() {
    let ThemeTextField = this.ThemeTextField;
    let overrideKey = "theme.overrides." + this.state.selectedOverride + "." + this.state.selectedClass;

    return <Drawer anchor="right"  open={this.props.open} variant="persistent">
      {/*<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>*/}
      <AppBar position="static">
        <Tabs value={this.state.tab} onChange={this.handleChange("tab")}>
          <Tab style={{minWidth:"0px"}} value="palette" label="Palette" />
          <Tab style={{minWidth:"0px"}} value="typo" label="Typo" />
          <Tab style={{minWidth:"0px"}} value="misc" label="Misc" />
          <Tab style={{minWidth:"0px"}} value="overrides" label="Overrides" />
          <Tab style={{minWidth:"0px"}} value="json" label="JSON" />
        </Tabs>
      </AppBar>

      {this.state.tab === 'palette' && <DialogContent style={{width:"500px"}}>
        <ThemeTextField label="Type (light/dark)" name="theme.palette.type"/>
        <ThemeTextField label="Black" name="theme.palette.common.black"/>
        <ThemeTextField label="White" name="theme.palette.common.white"/>
        <ThemeTextField label="Primary main" name="theme.palette.primary.main"/>
        <ThemeTextField label="Primary light" name="theme.palette.primary.light"/>
        <ThemeTextField label="Primary dark" name="theme.palette.primary.dark"/>
        <ThemeTextField label="Primary contrastText" name="theme.palette.primary.contrastText"/>
        <ThemeTextField label="Secondary main" name="theme.palette.secondary.main"/>
        <ThemeTextField label="Secondary light" name="theme.palette.secondary.light"/>
        <ThemeTextField label="Secondary dark" name="theme.palette.secondary.dark"/>
        <ThemeTextField label="Secondary contrastText" name="theme.palette.secondary.contrastText"/>
        <ThemeTextField label="Error main" name="theme.palette.error.main"/>
        <ThemeTextField label="Error light" name="theme.palette.error.light"/>
        <ThemeTextField label="Error dark" name="theme.palette.error.dark"/>
        <ThemeTextField label="Error contrastText" name="theme.palette.error.contrastText"/>
        <ThemeTextField label="Contrast Threshold" name="theme.palette.contrastThreshold" type="number"/>
        <ThemeTextField label="Tonal Offset" name="theme.palette.tonalOffset" type="number"/>
        <ThemeTextField label="Text primary" name="theme.palette.text.primary"/>
        <ThemeTextField label="Text secondary" name="theme.palette.text.secondary"/>
        <ThemeTextField label="Text disabled" name="theme.palette.text.disabled"/>
        <ThemeTextField label="Text hint" name="theme.palette.text.hint"/>
        <ThemeTextField label="Divider" name="theme.palette.divider"/>
        <ThemeTextField label="Background paper" name="theme.palette.background.paper"/>
        <ThemeTextField label="Background default" name="theme.palette.background.default"/>
        <ThemeTextField label="Action / active" name="theme.palette.action.active"/>
        <ThemeTextField label="Action / hover" name="theme.palette.action.hover"/>
        <ThemeTextField label="Action / hoverOpacity" name="theme.palette.action.hoverOpacity" type="number"/>
        <ThemeTextField label="Action / selected" name="theme.palette.action.selected"/>
        <ThemeTextField label="Action / disabled" name="theme.palette.action.disabled"/>
        <ThemeTextField label="Action / disabledBackground" name="theme.palette.action.disabledBackground"/>
      </DialogContent>}
      {this.state.tab === 'typo' && <DialogContent style={{width:"500px"}}>
        <ThemeTextField label="Font family" name="theme.typography.fontFamily"/>
        <ThemeTextField label="Font size" name="theme.typography.fontSize"/>
        <ThemeTextField label="Font weight light" name="theme.typography.fontWeightLight" type="number"/>
        <ThemeTextField label="Font weight regular" name="theme.typography.fontWeightRegular" type="number"/>
        <ThemeTextField label="Font weight Medium" name="theme.typography.fontWeightMedium" type="number"/>

        <FormControl fullWidth>
          <InputLabel htmlFor="override">Select typo</InputLabel>
          <Select id="override" value={this.state.selectedTypo} onChange={this.handleChange("selectedTypo")}>
            {typos.map(k => <MenuItem key={k} value={k}>{k}</MenuItem>)}
          </Select>
        </FormControl>

        <ThemeTextField label={"Font family for "+this.state.selectedTypo} name={"theme.typography."+this.state.selectedTypo+".fontFamily"}/>
        <ThemeTextField label={"Font weight for "+this.state.selectedTypo} name={"theme.typography."+this.state.selectedTypo+".fontWeight"} type="number"/>
        <ThemeTextField label={"Font size for "+this.state.selectedTypo} name={"theme.typography."+this.state.selectedTypo+".fontSize"}/>
        <ThemeTextField label={"Letter spacing for "+this.state.selectedTypo} name={"theme.typography."+this.state.selectedTypo+".letterSpacing"}/>
        <ThemeTextField label={"Line height for "+this.state.selectedTypo} name={"theme.typography."+this.state.selectedTypo+".lineHeight"}/>
        <ThemeTextField label={"Margin left for "+this.state.selectedTypo} name={"theme.typography."+this.state.selectedTypo+".marginLeft"}/>
        <ThemeTextField label={"Color for "+this.state.selectedTypo} name={"theme.typography."+this.state.selectedTypo+".color"}/>
      </DialogContent>}

      {this.state.tab === 'misc' && <DialogContent style={{width: "500px"}}>
        <ThemeTextField label="Spacing unit" name="theme.spacing.unit" type="number"/>
        <ThemeTextField label="Direction (ltr / rtl)" name="theme.direction"/>
        <ThemeTextField label="Shape / border radius" name="theme.shape.borderRadius" type="number"/>
      </DialogContent>}

      {this.state.tab === 'overrides' && <DialogContent style={{width:"500px"}}>

        <FormControl fullWidth>
          <InputLabel htmlFor="override">Component override</InputLabel>
          <Select id="override" value={this.state.selectedOverride} onChange={this.handleChange("selectedOverride")}>
            {Object.keys(overrides).map(k => <MenuItem key={k} value={k}>{k}</MenuItem>)}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="overrideClass">Class override</InputLabel>
          <Select id="overrideClass" value={this.state.selectedClass} onChange={this.handleChange("selectedClass")}>
            {overrides[this.state.selectedOverride].map(k => <MenuItem key={k} value={k}>{k}</MenuItem>)}
          </Select>
        </FormControl>
        <TextField error={!!this.getTmpJson(overrideKey)} multiline={true} margin="dense" label="Class" fullWidth
                   inputProps={{style: {fontFamily: 'monospace', whiteSpace: 'pre-wrap'}}}
                   value={this.getJson(overrideKey)}
                   onChange={this.handleSetJson(overrideKey)}

        />
      </DialogContent>}

      {this.state.tab === 'json' && <DialogContent style={{width:"500px"}}>

        <TextField error={!!this.getTmpJson("theme")} multiline={true} margin="dense" label="Full theme" fullWidth
                   inputProps={{style: {fontFamily: 'monospace', whiteSpace: 'pre-wrap'}}}
                   value={this.getJson("theme")}
                   onChange={this.handleSetJson("theme")}
        />

      </DialogContent>}
      <DialogActions>
        <Button onClick={this.props.handleClose} color="primary">
          Hide
        </Button>
        <Button onClick={() => this.props.handleSave(this.state.theme)} color="primary">
          Save
        </Button>
      </DialogActions>
    </Drawer>
  }
}

export default ThemeDialog;
