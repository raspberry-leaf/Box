import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
	root: {
		height: 10,
		borderRadius: 5,
	},
	colorPrimary: {
		backgroundColor: theme.palette.grey[200],
	},
	bar: {
		borderRadius: 5,
		backgroundColor: 'rgba(22,99,22,1)',
	},
}))(LinearProgress);

// Inspired by the former Facebook spinners.

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

export default function Progress(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<BorderLinearProgress variant="determinate" value={props.progress} />
		</div>
	);
}
