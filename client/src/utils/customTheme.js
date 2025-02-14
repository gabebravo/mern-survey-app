import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import merge from 'lodash.merge';
const colors = require('material-ui/styles/colors');

// https://cimdalli.github.io/mui-theme-generator/
const muiTheme = {
  palette: {
   "primary1Color": colors.cyan400,
   "accent1Color": colors.cyan800,
  },
};

const theme = merge(lightBaseTheme, muiTheme)
export default theme;

// var red50 = exports.red50 = '#ffebee';
// var red100 = exports.red100 = '#ffcdd2';
// var red200 = exports.red200 = '#ef9a9a';
// var red300 = exports.red300 = '#e57373';
// var red400 = exports.red400 = '#ef5350';
// var red500 = exports.red500 = '#f44336';
// var red600 = exports.red600 = '#e53935';
// var red700 = exports.red700 = '#d32f2f';
// var red800 = exports.red800 = '#c62828';
// var red900 = exports.red900 = '#b71c1c';
// var redA100 = exports.redA100 = '#ff8a80';
// var redA200 = exports.redA200 = '#ff5252';
// var redA400 = exports.redA400 = '#ff1744';
// var redA700 = exports.redA700 = '#d50000';

// var pink50 = exports.pink50 = '#fce4ec';
// var pink100 = exports.pink100 = '#f8bbd0';
// var pink200 = exports.pink200 = '#f48fb1';
// var pink300 = exports.pink300 = '#f06292';
// var pink400 = exports.pink400 = '#ec407a';
// var pink500 = exports.pink500 = '#e91e63';
// var pink600 = exports.pink600 = '#d81b60';
// var pink700 = exports.pink700 = '#c2185b';
// var pink800 = exports.pink800 = '#ad1457';
// var pink900 = exports.pink900 = '#880e4f';
// var pinkA100 = exports.pinkA100 = '#ff80ab';
// var pinkA200 = exports.pinkA200 = '#ff4081';
// var pinkA400 = exports.pinkA400 = '#f50057';
// var pinkA700 = exports.pinkA700 = '#c51162';

// var purple50 = exports.purple50 = '#f3e5f5';
// var purple100 = exports.purple100 = '#e1bee7';
// var purple200 = exports.purple200 = '#ce93d8';
// var purple300 = exports.purple300 = '#ba68c8';
// var purple400 = exports.purple400 = '#ab47bc';
// var purple500 = exports.purple500 = '#9c27b0';
// var purple600 = exports.purple600 = '#8e24aa';
// var purple700 = exports.purple700 = '#7b1fa2';
// var purple800 = exports.purple800 = '#6a1b9a';
// var purple900 = exports.purple900 = '#4a148c';
// var purpleA100 = exports.purpleA100 = '#ea80fc';
// var purpleA200 = exports.purpleA200 = '#e040fb';
// var purpleA400 = exports.purpleA400 = '#d500f9';
// var purpleA700 = exports.purpleA700 = '#aa00ff';

// var deepPurple50 = exports.deepPurple50 = '#ede7f6';
// var deepPurple100 = exports.deepPurple100 = '#d1c4e9';
// var deepPurple200 = exports.deepPurple200 = '#b39ddb';
// var deepPurple300 = exports.deepPurple300 = '#9575cd';
// var deepPurple400 = exports.deepPurple400 = '#7e57c2';
// var deepPurple500 = exports.deepPurple500 = '#673ab7';
// var deepPurple600 = exports.deepPurple600 = '#5e35b1';
// var deepPurple700 = exports.deepPurple700 = '#512da8';
// var deepPurple800 = exports.deepPurple800 = '#4527a0';
// var deepPurple900 = exports.deepPurple900 = '#311b92';
// var deepPurpleA100 = exports.deepPurpleA100 = '#b388ff';
// var deepPurpleA200 = exports.deepPurpleA200 = '#7c4dff';
// var deepPurpleA400 = exports.deepPurpleA400 = '#651fff';
// var deepPurpleA700 = exports.deepPurpleA700 = '#6200ea';

// var indigo50 = exports.indigo50 = '#e8eaf6';
// var indigo100 = exports.indigo100 = '#c5cae9';
// var indigo200 = exports.indigo200 = '#9fa8da';
// var indigo300 = exports.indigo300 = '#7986cb';
// var indigo400 = exports.indigo400 = '#5c6bc0';
// var indigo500 = exports.indigo500 = '#3f51b5';
// var indigo600 = exports.indigo600 = '#3949ab';
// var indigo700 = exports.indigo700 = '#303f9f';
// var indigo800 = exports.indigo800 = '#283593';
// var indigo900 = exports.indigo900 = '#1a237e';
// var indigoA100 = exports.indigoA100 = '#8c9eff';
// var indigoA200 = exports.indigoA200 = '#536dfe';
// var indigoA400 = exports.indigoA400 = '#3d5afe';
// var indigoA700 = exports.indigoA700 = '#304ffe';

// var blue50 = exports.blue50 = '#e3f2fd';
// var blue100 = exports.blue100 = '#bbdefb';
// var blue200 = exports.blue200 = '#90caf9';
// var blue300 = exports.blue300 = '#64b5f6';
// var blue400 = exports.blue400 = '#42a5f5';
// var blue500 = exports.blue500 = '#2196f3';
// var blue600 = exports.blue600 = '#1e88e5';
// var blue700 = exports.blue700 = '#1976d2';
// var blue800 = exports.blue800 = '#1565c0';
// var blue900 = exports.blue900 = '#0d47a1';
// var blueA100 = exports.blueA100 = '#82b1ff';
// var blueA200 = exports.blueA200 = '#448aff';
// var blueA400 = exports.blueA400 = '#2979ff';
// var blueA700 = exports.blueA700 = '#2962ff';

// var lightBlue50 = exports.lightBlue50 = '#e1f5fe';
// var lightBlue100 = exports.lightBlue100 = '#b3e5fc';
// var lightBlue200 = exports.lightBlue200 = '#81d4fa';
// var lightBlue300 = exports.lightBlue300 = '#4fc3f7';
// var lightBlue400 = exports.lightBlue400 = '#29b6f6';
// var lightBlue500 = exports.lightBlue500 = '#03a9f4';
// var lightBlue600 = exports.lightBlue600 = '#039be5';
// var lightBlue700 = exports.lightBlue700 = '#0288d1';
// var lightBlue800 = exports.lightBlue800 = '#0277bd';
// var lightBlue900 = exports.lightBlue900 = '#01579b';
// var lightBlueA100 = exports.lightBlueA100 = '#80d8ff';
// var lightBlueA200 = exports.lightBlueA200 = '#40c4ff';
// var lightBlueA400 = exports.lightBlueA400 = '#00b0ff';
// var lightBlueA700 = exports.lightBlueA700 = '#0091ea';

// var cyan50 = exports.cyan50 = '#e0f7fa';
// var cyan100 = exports.cyan100 = '#b2ebf2';
// var cyan200 = exports.cyan200 = '#80deea';
// var cyan300 = exports.cyan300 = '#4dd0e1';
// var cyan400 = exports.cyan400 = '#26c6da';
// var cyan500 = exports.cyan500 = '#00bcd4';
// var cyan600 = exports.cyan600 = '#00acc1';
// var cyan700 = exports.cyan700 = '#0097a7';
// var cyan800 = exports.cyan800 = '#00838f';
// var cyan900 = exports.cyan900 = '#006064';
// var cyanA100 = exports.cyanA100 = '#84ffff';
// var cyanA200 = exports.cyanA200 = '#18ffff';
// var cyanA400 = exports.cyanA400 = '#00e5ff';
// var cyanA700 = exports.cyanA700 = '#00b8d4';

// var teal50 = exports.teal50 = '#e0f2f1';
// var teal100 = exports.teal100 = '#b2dfdb';
// var teal200 = exports.teal200 = '#80cbc4';
// var teal300 = exports.teal300 = '#4db6ac';
// var teal400 = exports.teal400 = '#26a69a';
// var teal500 = exports.teal500 = '#009688';
// var teal600 = exports.teal600 = '#00897b';
// var teal700 = exports.teal700 = '#00796b';
// var teal800 = exports.teal800 = '#00695c';
// var teal900 = exports.teal900 = '#004d40';
// var tealA100 = exports.tealA100 = '#a7ffeb';
// var tealA200 = exports.tealA200 = '#64ffda';
// var tealA400 = exports.tealA400 = '#1de9b6';
// var tealA700 = exports.tealA700 = '#00bfa5';

// var green50 = exports.green50 = '#e8f5e9';
// var green100 = exports.green100 = '#c8e6c9';
// var green200 = exports.green200 = '#a5d6a7';
// var green300 = exports.green300 = '#81c784';
// var green400 = exports.green400 = '#66bb6a';
// var green500 = exports.green500 = '#4caf50';
// var green600 = exports.green600 = '#43a047';
// var green700 = exports.green700 = '#388e3c';
// var green800 = exports.green800 = '#2e7d32';
// var green900 = exports.green900 = '#1b5e20';
// var greenA100 = exports.greenA100 = '#b9f6ca';
// var greenA200 = exports.greenA200 = '#69f0ae';
// var greenA400 = exports.greenA400 = '#00e676';
// var greenA700 = exports.greenA700 = '#00c853';

// var lightGreen50 = exports.lightGreen50 = '#f1f8e9';
// var lightGreen100 = exports.lightGreen100 = '#dcedc8';
// var lightGreen200 = exports.lightGreen200 = '#c5e1a5';
// var lightGreen300 = exports.lightGreen300 = '#aed581';
// var lightGreen400 = exports.lightGreen400 = '#9ccc65';
// var lightGreen500 = exports.lightGreen500 = '#8bc34a';
// var lightGreen600 = exports.lightGreen600 = '#7cb342';
// var lightGreen700 = exports.lightGreen700 = '#689f38';
// var lightGreen800 = exports.lightGreen800 = '#558b2f';
// var lightGreen900 = exports.lightGreen900 = '#33691e';
// var lightGreenA100 = exports.lightGreenA100 = '#ccff90';
// var lightGreenA200 = exports.lightGreenA200 = '#b2ff59';
// var lightGreenA400 = exports.lightGreenA400 = '#76ff03';
// var lightGreenA700 = exports.lightGreenA700 = '#64dd17';

// var lime50 = exports.lime50 = '#f9fbe7';
// var lime100 = exports.lime100 = '#f0f4c3';
// var lime200 = exports.lime200 = '#e6ee9c';
// var lime300 = exports.lime300 = '#dce775';
// var lime400 = exports.lime400 = '#d4e157';
// var lime500 = exports.lime500 = '#cddc39';
// var lime600 = exports.lime600 = '#c0ca33';
// var lime700 = exports.lime700 = '#afb42b';
// var lime800 = exports.lime800 = '#9e9d24';
// var lime900 = exports.lime900 = '#827717';
// var limeA100 = exports.limeA100 = '#f4ff81';
// var limeA200 = exports.limeA200 = '#eeff41';
// var limeA400 = exports.limeA400 = '#c6ff00';
// var limeA700 = exports.limeA700 = '#aeea00';

// var yellow50 = exports.yellow50 = '#fffde7';
// var yellow100 = exports.yellow100 = '#fff9c4';
// var yellow200 = exports.yellow200 = '#fff59d';
// var yellow300 = exports.yellow300 = '#fff176';
// var yellow400 = exports.yellow400 = '#ffee58';
// var yellow500 = exports.yellow500 = '#ffeb3b';
// var yellow600 = exports.yellow600 = '#fdd835';
// var yellow700 = exports.yellow700 = '#fbc02d';
// var yellow800 = exports.yellow800 = '#f9a825';
// var yellow900 = exports.yellow900 = '#f57f17';
// var yellowA100 = exports.yellowA100 = '#ffff8d';
// var yellowA200 = exports.yellowA200 = '#ffff00';
// var yellowA400 = exports.yellowA400 = '#ffea00';
// var yellowA700 = exports.yellowA700 = '#ffd600';

// var amber50 = exports.amber50 = '#fff8e1';
// var amber100 = exports.amber100 = '#ffecb3';
// var amber200 = exports.amber200 = '#ffe082';
// var amber300 = exports.amber300 = '#ffd54f';
// var amber400 = exports.amber400 = '#ffca28';
// var amber500 = exports.amber500 = '#ffc107';
// var amber600 = exports.amber600 = '#ffb300';
// var amber700 = exports.amber700 = '#ffa000';
// var amber800 = exports.amber800 = '#ff8f00';
// var amber900 = exports.amber900 = '#ff6f00';
// var amberA100 = exports.amberA100 = '#ffe57f';
// var amberA200 = exports.amberA200 = '#ffd740';
// var amberA400 = exports.amberA400 = '#ffc400';
// var amberA700 = exports.amberA700 = '#ffab00';

// var orange50 = exports.orange50 = '#fff3e0';
// var orange100 = exports.orange100 = '#ffe0b2';
// var orange200 = exports.orange200 = '#ffcc80';
// var orange300 = exports.orange300 = '#ffb74d';
// var orange400 = exports.orange400 = '#ffa726';
// var orange500 = exports.orange500 = '#ff9800';
// var orange600 = exports.orange600 = '#fb8c00';
// var orange700 = exports.orange700 = '#f57c00';
// var orange800 = exports.orange800 = '#ef6c00';
// var orange900 = exports.orange900 = '#e65100';
// var orangeA100 = exports.orangeA100 = '#ffd180';
// var orangeA200 = exports.orangeA200 = '#ffab40';
// var orangeA400 = exports.orangeA400 = '#ff9100';
// var orangeA700 = exports.orangeA700 = '#ff6d00';

// var deepOrange50 = exports.deepOrange50 = '#fbe9e7';
// var deepOrange100 = exports.deepOrange100 = '#ffccbc';
// var deepOrange200 = exports.deepOrange200 = '#ffab91';
// var deepOrange300 = exports.deepOrange300 = '#ff8a65';
// var deepOrange400 = exports.deepOrange400 = '#ff7043';
// var deepOrange500 = exports.deepOrange500 = '#ff5722';
// var deepOrange600 = exports.deepOrange600 = '#f4511e';
// var deepOrange700 = exports.deepOrange700 = '#e64a19';
// var deepOrange800 = exports.deepOrange800 = '#d84315';
// var deepOrange900 = exports.deepOrange900 = '#bf360c';
// var deepOrangeA100 = exports.deepOrangeA100 = '#ff9e80';
// var deepOrangeA200 = exports.deepOrangeA200 = '#ff6e40';
// var deepOrangeA400 = exports.deepOrangeA400 = '#ff3d00';
// var deepOrangeA700 = exports.deepOrangeA700 = '#dd2c00';

// var brown50 = exports.brown50 = '#efebe9';
// var brown100 = exports.brown100 = '#d7ccc8';
// var brown200 = exports.brown200 = '#bcaaa4';
// var brown300 = exports.brown300 = '#a1887f';
// var brown400 = exports.brown400 = '#8d6e63';
// var brown500 = exports.brown500 = '#795548';
// var brown600 = exports.brown600 = '#6d4c41';
// var brown700 = exports.brown700 = '#5d4037';
// var brown800 = exports.brown800 = '#4e342e';
// var brown900 = exports.brown900 = '#3e2723';

// var blueGrey50 = exports.blueGrey50 = '#eceff1';
// var blueGrey100 = exports.blueGrey100 = '#cfd8dc';
// var blueGrey200 = exports.blueGrey200 = '#b0bec5';
// var blueGrey300 = exports.blueGrey300 = '#90a4ae';
// var blueGrey400 = exports.blueGrey400 = '#78909c';
// var blueGrey500 = exports.blueGrey500 = '#607d8b';
// var blueGrey600 = exports.blueGrey600 = '#546e7a';
// var blueGrey700 = exports.blueGrey700 = '#455a64';
// var blueGrey800 = exports.blueGrey800 = '#37474f';
// var blueGrey900 = exports.blueGrey900 = '#263238';

// var grey50 = exports.grey50 = '#fafafa';
// var grey100 = exports.grey100 = '#f5f5f5';
// var grey200 = exports.grey200 = '#eeeeee';
// var grey300 = exports.grey300 = '#e0e0e0';
// var grey400 = exports.grey400 = '#bdbdbd';
// var grey500 = exports.grey500 = '#9e9e9e';
// var grey600 = exports.grey600 = '#757575';
// var grey700 = exports.grey700 = '#616161';
// var grey800 = exports.grey800 = '#424242';
// var grey900 = exports.grey900 = '#212121';