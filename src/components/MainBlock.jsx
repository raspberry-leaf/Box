import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Item from "./Item";
import Result from "./Result";

const useStyles = makeStyles({

	subtitle: {
		fontWeight: "400",
		fontSize: "16px",
		margin: "15px 0",
		letterSpacing: "0.6px",
		textAlign: "center",

		"& span": {
			position: "relative",
			borderBottom: "1px solid #ffa0af"
		}


	},

})

const MainBlock = (props) => {
	const classes = useStyles();

	return (
		<div>
			<Typography component="h2" className={classes.subtitle}>
				{props.condition === "base"
					? <span>Выберите базовый комплект:</span>
					: props.condition === "toy"
						? <span>Выберите игрушку:</span>
						: props.condition === "accessory"
							? <span>Заменить грызунок-ушки на грызунок ручной вязки?</span>
							: props.condition === "extra"
								? <span>Добавить мороженое?</span>
								:  props.condition === "postcard"
									? <span>Выберите открытку:</span>
									: ''
				}
			</Typography>
			{props.condition === "result"
				? <Result data={props.data}
						  code={props.code}
						  condition={props.condition}
						  handleResult={props.handleResult}
						  handleCondition={props.handleCondition}
						  handleLink={props.handleLink}/>
				: <Item data={props.data}
					  value={props.value}
					  condition={props.condition}
					  handleChange={props.handleChange}
					  handleCondition={props.handleCondition}/>
			}
		</div>

	);
}

export default MainBlock;
