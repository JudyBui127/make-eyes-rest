import { Stack, Typography } from '@mui/material';
import * as React from 'react';
import { useStyles } from './styles';
import eyeIcon from "./eye.png";
import Image from 'next/image';

interface MyComponentProps {

}

const NavBar: React.FC<MyComponentProps> = () => {
  const {classes} = useStyles();

  return (
    <Stack direction="row" className={classes.root} spacing={2}>
      <Typography className={classes.headline}>
        Rest Your Eyes
      </Typography>
      <div className={classes.icon}>
        <Image src={eyeIcon} alt="Eye icon" className={classes.image}/>
      </div>
    </Stack>
  )
};

export default NavBar;
