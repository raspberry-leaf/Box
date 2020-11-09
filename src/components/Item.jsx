import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
	desc: {
		margin: "0",
		fontSize: "18px",
		lineHeight: "130%",
		marginBottom: "20px"
	},

	group: {
		display: "flex",
		alignItems: "flex-start",
	},

	groupDesc: {
		marginTop: "9px",
		marginBottom: "20px",
	},

	groupImg: {
		marginLeft: "-30px"
	}

})

const Item = (props) => {
	const classes = useStyles();

	const currentItems = props.data.find(item => item.name === props.condition)
	const resultItem = props.data.find(item => item.name === "result")

	const [value, setValue] = React.useState(currentItems.items[0].code);

	const handleChange = (event) => {
		setValue(event.target.value);
		props.handleChange()
	};

	return (
		<div>
			<p className={classes.desc} dangerouslySetInnerHTML={{__html: currentItems.desc}}></p>
			<FormControl component="fieldset">
				<RadioGroup aria-label={props.condition}
							name={props.condition}
							className={classes.group}
							value={value}
							onChange={handleChange}>
					{currentItems.items.map((item, i) => {
						return <FormControlLabel key={i}
												 value={item.code}
												 control={<Radio />}
												 label={
												 	<div>
														<p className={classes.groupDesc}>{item.desc}</p>
														<img className={classes.groupImg} src={require(`../img/${props.condition}/${item.img}`).default}/>
												 	</div>}/>

					})

					}

				</RadioGroup>
			</FormControl>
		</div>

	);
}

export default Item;
