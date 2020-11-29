import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonDone from "./ButtonDone";

const useStyles = makeStyles({
	buttons: {
		marginBottom: "30px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
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
			<ButtonDone condition={props.condition}
						handleCondition={props.handleCondition}
						disable={props.disable}
						direction={"next"}/>
		</div>
	)
}

export default Buttons;