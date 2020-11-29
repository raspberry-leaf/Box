import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonDone from "./ButtonDone";

const useStyles = makeStyles({
	buttons: {
		marginBottom: "30px"
	},
})
const Buttons = (props) => {
	const classes = useStyles();
	
	return (
		<div className={classes.buttons}>
			<ButtonDone condition={props.condition}
						handleCondition={props.handleCondition}
						direction={"next"}/>
			{props.condition !== "base"
				? <ButtonDone condition={props.condition}
							  handleCondition={props.handleCondition}
							  direction={"prev"}/>

				: ''
			}

		</div>
	)
}

export default Buttons;