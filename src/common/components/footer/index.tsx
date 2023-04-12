import { Stack, Typography } from '@mui/material';
import * as React from 'react';
import { useStyles } from './styles';

interface MyComponentProps {

}

const Footer: React.FC<MyComponentProps> = () => {
  const {classes} = useStyles();

  return (
    <Stack direction="row" className={classes.root}>
      <Typography className={classes.footerText}>
        2023 © Judy Bui
      </Typography>
    </Stack>
  )
};

export default Footer;
