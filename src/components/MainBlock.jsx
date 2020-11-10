import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import main from "../img/img_main.png";
import Typography from "@material-ui/core/Typography";
import Item from "./Item";

const useStyles = makeStyles({

	subtitle: {
		fontWeight: "400",
		fontSize: "20px",
		marginBottom: "15px",
		letterSpacing: "0.6px",
		textAlign: "center",

		"& span": {
			position: "relative",
		},

		"& span:before": {
			content: "''",
			display: "block",
			width: "100%",
			height: "15%",
			position: "absolute",
			left: "0",
			bottom: "0",
			boxShadow: "0px 3px 5px 0px #ffa0af"
		}
	},

})

const MainBlock = (props) => {
	const classes = useStyles();

	return (
		<div>
			<Typography component="h2" className={classes.subtitle}>
				{props.condition === "base"
					? <span>Выберите базовый комплект:</span>
					: ''
				}
			</Typography>
			<Item data={props.data}
				  condition={props.condition}
				  handleChange={props.handleChange}/>

		</div>

	);
}

export default MainBlock;
