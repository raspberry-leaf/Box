import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import main from "../img/img_main.png";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	head: {
		display: "block",
		width: "100%",
		height: "50px",
		textAlign: "center"
	},
	img: {
		width: "auto",
		height: "100%",
	},

	subtitle: {
		fontWeight: "400",
		fontSize: "20px",
		marginBottom: "15px",
		letterSpacing: "0.6px",
		textAlign: "center"
	},

})

const MainBlock = (props) => {
	const classes = useStyles();

	return (
		<div>
			<Typography component="h2" className={classes.subtitle}>
				{props.condition === "base"
					? "Выберите базу:"
					: ''
				}
			</Typography>

		</div>

	);
}

export default MainBlock;
