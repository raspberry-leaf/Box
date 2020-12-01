import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Buttons from "./Buttons";

const useStyles = makeStyles({
	desc: {
		margin: "0",
		fontSize: "18px",
		lineHeight: "130%",
		marginBottom: "20px"
	},

	group: {
		width: "100%",

		"& label": {
			display: "flex",
			alignItems: "flex-start",
			margin: "0",
			marginBottom: "20px",
			marginLeft: "-9px"
		},

		"& img": {
			width: "auto",
			height: "auto",
			maxWidth: "100%",
			border: "3px solid transparent",
			transition: ".2s ease-in-out"
		},

		"& .Mui-checked +.MuiTypography-root img": {
			border: "3px solid #ffa0af",
		}

	},

	groupTitle: {
		marginTop: "10px",
		marginBottom: "0",
		fontWeight: "700"
	},

	groupDesc: {
		margin: "10px 0 15px 0",
	},


})

const Item = (props) => {
	const classes = useStyles();

	const currentItems = props.data.find(item => item.name === props.condition)
	const resultItem = props.data.find(item => item.name === "result")

	const handleChange = (event) => {
		props.handleChange(event.target.value)
	};

	return (
		<div>
			<p className={classes.desc} dangerouslySetInnerHTML={{__html: currentItems.desc}}></p>
			<FormControl component="fieldset">
				<RadioGroup aria-label={props.condition}
							name={props.condition}
							className={classes.group}
							value={props.value}
							onChange={handleChange}>
					{currentItems.items.map((item, i) => {
						return <FormControlLabel key={i}
												 value={item.code}
												 control={<Radio />}
												 label={
							<div>
								<p className={classes.groupTitle}>
									{item.title}
								</p>
								<p className={classes.groupDesc}>
									{props.condition === "base"
										? item.type === "standard"
											? <span dangerouslySetInnerHTML={{__html: "- пелёнка 90*120 см,</br>- нагрудник (> 6 мес),</br>- грызунок из бука с шуршащими ушками,</br>* материал: муслин (100% хлопок)"}}></span>
											: item.option === 1
												? <span dangerouslySetInnerHTML={{__html: "- одеяло 90*120 см,<br>- нагрудник (> 6 мес),<br>- грызунок из бука с шуршащими ушками,</br>* материал: муслин (100% хлопок)"}}></span>
												: <span dangerouslySetInnerHTML={{__html: "- пелёнка 90*120 см,<br>- шапочка (0-3 мес),<br>- нагрудник (> 6 мес),<br>- грызунок из бука с шуршащими ушками,</br>* материал: трикотаж (95% хлопок, 5% лайкра)"}}></span>
										: ''
									}
								</p>
								{item.img
									? <img className={classes.groupImg}
										   src={require(`../img/${props.condition}/${item.img}`).default}/>
									: ''
								}
							</div>}/>

					})

					}

				</RadioGroup>
			</FormControl>
			<Buttons disable={props.value !== '' ? 1 : 0}
					 condition={props.condition}
					 handleCondition={props.handleCondition}/>
		</div>

	);
}

export default Item;
