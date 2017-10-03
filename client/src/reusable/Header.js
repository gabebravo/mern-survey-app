import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/action/input';
import FlatButton from 'material-ui/FlatButton';
import {Card} from 'material-ui/Card';

function handleTouchTap() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const Header = () => (
    <AppBar style={{backgroundColor: '#000', marginBottom: '1rem'}}
      title={<span style={styles.title}>Gabe</span>}
      onTitleTouchTap={handleTouchTap}
      iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      iconElementRight={<FlatButton label="Create Survey" />}
    />
);

export default Header;