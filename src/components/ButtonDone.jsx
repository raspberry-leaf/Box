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
		pointerEvents: "auto",
		opacity: "1"
	},

	prev: {
		background: "#ffa0af",
	},

	disable: {
		pointerEvents: "none",
		opacity: "0.5"
	}
})
const ButtonDone = (props) => {
	const classes = useStyles();
	
	return (
		<button type="button"
				className={props.disable === 0
					? `${classes.done} ${classes.disable}`
					: props.direction === "prev"
						? `${classes.done} ${classes.prev}`
						: classes.done
				}
				onClick={() => props.handleCondition(props.direction !== "next" ? "reset" : '')}>
			{props.direction === "next"
				? "Далее"
				: "Собрать заново"
			}
		</button>
	)
}

export default ButtonDone;