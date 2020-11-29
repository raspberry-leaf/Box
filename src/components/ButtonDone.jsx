import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	done: {
		display: "block",
		border: "none",
		fontSize: '20px',
		margin: '0 auto',
		cursor: 'pointer',
		padding: '10px 15px',
		outline: 'none',
		letterSpacing: "0.8px",
		minWidth: "175px",
		transition: ".2s ease-in-out",
		background: "#166316",
		color: "#ffffff",
		borderRadius: "4px",
	},
})
const ButtonDone = (props) => {
	const classes = useStyles();
	
	return (
		<button type="button"
				className={classes.done} onClick={() => props.handleCondition()}>
			{props.direction === "next"
				? "Далее"
				: "Назад"
			}
		</button>
	)
}

export default ButtonDone;