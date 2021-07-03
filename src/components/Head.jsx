import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import main from "../img/img_main.png";
import Typography from "@material-ui/core/Typography";
import Progress from "./Progress";
import Rate from "./Rate";
import {Container} from "@material-ui/core";
import LazyLoad from "react-lazyload";


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
		fontSize: "18px",
		margin: "10px auto",
		letterSpacing: "0.8px",
		textAlign: "center",
		lineHeight: "1",
	},

	top: {
		margin: "0 auto",
		padding: "10px 30px",
		backgroundColor: "rgba(255,255,255,0.9)",
	}

})

const Head = (props) => {
	const classes = useStyles();

	return (
		<Container maxWidth="sm" className={classes.top}>
			<LazyLoad>
			<a href={"https://api.instagram.com/raspberry__leaf/"} target="_blank" className={classes.head}>
				<img className={classes.img} src={main}/>
			</a>
			</LazyLoad>
			<Typography component="h2" className={classes.subtitle}>
				{props.condition === "result"
					? "Поздравляем! «Raspberry Box» собран"
					: "Собираем «Raspberry Box»"
				}
			</Typography>
			<Progress progress={props.progress}/>
			<Rate rate={props.rate}
				  condition={props.condition}/>
		</Container>
	);
}

export default Head;
