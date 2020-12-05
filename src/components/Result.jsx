import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ButtonDone from "./ButtonDone";

const useStyles = makeStyles({
	desc: {
		fontWeight: "400",
		fontSize: "16px",
		marginBottom: "20px",
		letterSpacing: "0.6px",
		textAlign: "center",
		lineHeight: "130%"
	},
	
	code: {
		backgroundColor: "#ffa0af",
		color: "#ffffff",
		fontWeight: "700",
		letterSpacing: "0.1em",
		textAlign: "center",
		padding: "10px 15px",
		lineHeight: "140%",
		fontSize: "16px",
	},
	contain: {
		margin: "20px 0"
	}

})

const Result = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.result}>
			<p className={classes.desc}>Для заказа отправьте сформированный код в личные собщения @raspberry__leaf</p>
			<p className={classes.code}>{props.code}</p>
			<ButtonDone condition={props.condition}
						handleResult={props.handleResult}/>
			<div className={classes.contain}>
				Состав «Raspberry Box»:
			</div>
		</div>

	);
}

export default Result;
