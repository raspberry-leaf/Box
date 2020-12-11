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
		padding: "20px 15px",
		lineHeight: "140%",
		fontSize: "16px",
		marginBottom: "20px"
	},
	contain: {
		margin: "20px 0"
	}

})

const Result = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.result}>
			<p className={classes.desc}>Для заказа отправьте сформированный код в личные собщения @raspberry__leaf или на WhatsApp</p>
			<p className={classes.code}>{props.code}</p>
			<ButtonDone condition={props.condition}
						descr={"insta"}
						handleResult={props.handleResult}/>
			<ButtonDone condition={props.condition}
						descr={"whats"}
						handleResult={props.handleResult}/>
			<div className={classes.contain}>
				Состав «Raspberry Box»:
			</div>
			<ButtonDone condition={props.condition}
						direction={"prev"}
						handleCondition={props.handleCondition}/>
		</div>

	);
}

export default Result;
