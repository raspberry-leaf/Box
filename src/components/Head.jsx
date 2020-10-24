import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import main from "../img/img_main.png";
import Typography from "@material-ui/core/Typography";
import Progress from "./Progress";

const useStyles = makeStyles({
	head: {
		display: "block",
		width: "100%",
		height: "50px",
		textAlign: "center"
	},
	img: {
		width: "auto",
		height: "100%",
	},

	subtitle: {
		fontWeight: "700",
		fontSize: "22px",
		margin: "20px auto",
		letterSpacing: "0.8px",
		textAlign: "center"
	},

})

const Head = (props) => {
	const classes = useStyles();

	return (
		<div>
			<a href={"https://api.instagram.com/raspberry__leaf/"} className={classes.head}>
				<img className={classes.img} src={main}/>
			</a>
			<Typography component="h2" className={classes.subtitle}>Собираем «Raspberry Box»</Typography>
			<Progress progress={props.progress}/>
		</div>

	);
}

export default Head;
