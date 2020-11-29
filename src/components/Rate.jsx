import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
	rate: {
		textAlign: "center",
		marginTop: "20px",
		fontSize: "20px"
	}

})

const Rate = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.rate}>
			Цена: {props.rate} руб.
		</div>

	);
}

export default Rate;
