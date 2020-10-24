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
		textAlign: "center"
	},

})

const MainBlock = (props) => {
	const classes = useStyles();

	return (
		<div>
			<Typography component="h2" className={classes.subtitle}>
				{props.condition === "base"
					? "Выберите базовый комплект:"
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
