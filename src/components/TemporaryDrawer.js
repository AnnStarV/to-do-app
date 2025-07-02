import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



import WbSunny from '@mui/icons-material/WbSunny';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import Grade from '@mui/icons-material/Grade';
import Analytics from '@mui/icons-material/Analytics';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const iconsPrimary = [ <AddCircleOutline />, <WbSunny />, <Grade />, <Analytics />];
  const iconsSecondary = ["/images/work.png", "/images/home.png", "/images/hobby.png", "/images/another.png"];

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Create', 'My Day', 'Important', 'Stats'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {iconsPrimary[index]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Work', 'Home', 'Hobby', 'Another'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={iconsSecondary[index]} alt={text} style={{ width: '24px', height: '24px' }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}