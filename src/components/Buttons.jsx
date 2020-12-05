import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonDone from "./ButtonDone";

const useStyles = makeStyles({
	buttons: {
		marginBottom: "30px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",

		['@media(max-width: 425px)']: {
			flexDirection: "column",

			"& button:first-of-type": {
				width: "100%",
				order: "2"
			},

			"& button:last-of-type": {
				width: "100%",
				marginBottom: "10px",
				order: "1"
			}
		},


	},
})
const Buttons = (props) => {
	const classes = useStyles();
	
	return (
		<div className={classes.buttons}>
			{props.condition !== "base"
				? <ButtonDone condition={props.condition}
							  handleCondition={props.handleCondition}
							  direction={"prev"}/>

				: ''
			}
			{props.condition !== "result"

				? <ButtonDone condition={props.condition}
							  handleCondition={props.handleCondition}
							  disable={props.disable}
							  direction={"next"}/>
				: ''
			}
		</div>
	)
}

export default Buttons;