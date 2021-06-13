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
	},

	link: {
		textAlign: "center",
		maxWidth: "425px",
		textDecoration: "none"
	}
})
const ButtonDone = (props) => {
	const classes = useStyles();

	const instaCode = `Привет! Хочу заказать RaspberryBox ${props.code}`;

	const copyToClipboard = (textToCopy) => {
		// navigator clipboard api needs a secure context (https)
		if (navigator.clipboard && window.isSecureContext) {
			// navigator clipboard api method'
			return navigator.clipboard.writeText(textToCopy);
		} else {
			// text area method
			let textArea = document.createElement("textarea");
			textArea.value = textToCopy;
			// make the textarea out of viewport
			textArea.style.position = "fixed";
			textArea.style.left = "-999999px";
			textArea.style.top = "-999999px";
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();
			return new Promise((res, rej) => {
				// here the magic happens
				document.execCommand('copy') ? res() : rej();
				textArea.remove();
			});
		}
	}

	return (
		<React.Fragment>
			{props.condition !== "result" || props.condition === "result" && props.direction === "prev"
				? <button type="button"
						  className={props.disable === 0
							  ? `${classes.done} ${classes.disable}`
							  : props.direction === "prev"
								  ? `${classes.done} ${classes.prev}`
								  : classes.done
						  }
						  onClick={() => props.condition === "result" && props.direction !== "prev" ? props.handleResult() : props.handleCondition(props.direction !== "next" ? "reset" : '')}>
					{props.direction === "next"
							? "Далее"
							: "Собрать заново"
					}
				</button>

				: <a className={props.disable === 0
							  ? `${classes.link} ${classes.done} ${classes.disable}`
							  : props.descr === "insta"
									  ? `${classes.link} ${classes.done} ${classes.instagram}`
									  : `${classes.link} ${classes.done} ${classes.whats}`
						  }
					 href={props.descr === 'insta'
						 ? "https://api.instagram.com/raspberry__leaf/"
						 : `https://wa.me/+79217484877?text=Привет!%20Хочу%20заказать%20RaspberryBox%3A%20${props.code}`
					 }
						  onClick={() => copyToClipboard(instaCode)}>
					{props.descr === 'insta'
						? "Скопировать код и вернуться в Instagram"
						: "Скопировать код и отправить в WhatsApp"
					}
				</a>
			}
		</React.Fragment>

	)
}

export default ButtonDone;