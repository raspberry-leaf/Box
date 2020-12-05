import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
	rate: {
		textAlign: "center",
		marginTop: "10px",
		fontSize: "16px"
	}

})

const Rate = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.rate}>
			{props.condition === "result"
				? "Ваша цена: "
				: "Цена: "
			}
			{props.rate} руб.
		</div>

	);
}

export default Rate;
