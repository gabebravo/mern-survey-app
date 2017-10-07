import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/action/input';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Header = ({ username, isAdmin }) => (
    <AppBar className='dashboard-header'
      title={<span style={styles.title}>{username}</span>}
      onTitleTouchTap={handleTouchTap}
      iconElementLeft={<Link to={'/'}>
        <IconButton><NavigationClose color="white" /></IconButton></Link>}
      iconElementRight={ isAdmin ? <Link to={'/survey'}>
        <FlatButton label="Create Survey" /></Link> : <div></div>}
    />
);

export default Header;