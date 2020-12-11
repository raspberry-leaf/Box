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
	},

	instagram: {
		//background: "#d6249f",
		background: "radial-gradient(circle at 30% 107%, #ffe800 0%, #f9e300 0%, #fd5949 45%,#d6249f 60%,#285AEB 90%);",
		boxShadow: "0px 3px 10px rgba(0,0,0,.25)",
		marginBottom: "20px",
		padding: '10px 15px',
	},
	whats: {
background: "#25D366",
		padding: '10px 15px',
		boxShadow: "0px 3px 10px rgba(0,0,0,.25)",
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
						: props.condition !== "result"
							? classes.done
							: props.descr === "insta"
								? `${classes.done} ${classes.instagram}`
								: `${classes.done} ${classes.whats}`
				}
				onClick={() => props.condition === "result" && props.direction !== "prev" ? props.handleResult() : props.handleCondition(props.direction !== "next" ? "reset" : '')}>
			{props.condition === "result" && props.direction !== "prev"
				? props.descr === 'insta'
					? "Скопировать код и вернуться в Instagram"
					: "Скопировать код и отправить в WhatsApp"
				: props.direction === "next"
					? "Далее"
					: "Собрать заново"
			}
		</button>
	)
}

export default ButtonDone;