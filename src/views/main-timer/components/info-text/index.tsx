import { Link, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { useStyles } from './styles';

const SOURCE = "https://www.healthline.com/health/eye-health/20-20-20-rule#definition";
interface MyComponentProps {}

const InfoText: React.FC<MyComponentProps> = () => {
  const {classes, cx} = useStyles();

  return (
    <Stack direction="column" spacing={1} className={classes.root}>
      <Typography className={cx(classes.text, classes.questionText)}>
        Did you know the 20-20-20 rule?
      </Typography>
      <p className={classes.text}>
        Every 20 minutes spent using a screen, you should try to
        look away at something that is 20 feet away from you for a total of
        20 seconds (cre:{" "}
        <Link href={SOURCE} underline="hover">healthline</Link>)
      </p>
    </Stack>
  )
};

export default InfoText;