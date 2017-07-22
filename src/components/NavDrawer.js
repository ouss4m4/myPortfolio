import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Scroll from 'react-scroll';
import SideArrow from './SideArrow';
import '../styles/navDrawer.css'

export default class NavDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => { this.setState({ open: false }); }

  render() {
    const Link = Scroll.Link;
    return (
      <div>
        <AppBar
          title="OussamA"
          iconElementRight={<a href='https://github.com/ouss4m4' target='_blank' rel='noopener noreferrer' id='ghLink' ><i className='fa fa-github' id='ghIcon'></i></a>}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <div className="drawerHeader">
            <i className='fa fa-times-circle-o' onClick={() => this.handleClose()}></i>
          </div>
          <div className="drawerItems">
            {this.props.items.map((link, i) => (
              <MenuItem key={i} onTouchTap={this.handleClose}>
                <Link style={{ fontSize: '26px', display: 'block', textDecoration: 'none', color: 'white' }} to={link} activeClass='active' smooth={true} duration={500} >
                  {link}
                </Link>
              </MenuItem>))
            }

          </div>
        </Drawer>
        <SideArrow onClick={this.handleToggle} />
      </div>
    );
  }
}