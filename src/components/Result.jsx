import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ButtonDone from "./ButtonDone";

const useStyles = makeStyles({
	desc: {
		fontWeight: "400",
		fontSize: "16px",
		marginBottom: "20px",
		letterSpacing: "0.6px",
		textAlign: "center",
		lineHeight: "130%"
	},
	
	code: {
		backgroundColor: "#ffa0af",
		color: "#ffffff",
		fontWeight: "700",
		letterSpacing: "0.1em",
		textAlign: "center",
		padding: "20px 15px",
		lineHeight: "140%",
		fontSize: "16px",
		marginBottom: "20px"
	},
	contain: {
		margin: "40px 0 20px 0",
		fontWeight: "700"
	},

	list: {
		lineHeight: "135%",
		paddingLeft: "15px",
		marginBottom: "25px",

		"& li": {
			marginBottom: "15px"
		}
	},

	descript: {
		paddingLeft: "15px"
	},

	groupImg: {
		maxWidth: "100%"
	}

})

const Result = (props) => {
	const classes = useStyles();

	const resultArr = () => {
		const codeInit = props.code.split("-").slice(0,-1);
		const dataInit = props.data

		let newArr = codeInit.map((item, i) => {

			const current = dataInit[i].items.find(elem => {
				if (elem.code === item && elem.img) {
					return elem;
				}
			})

			if (current) {
				item = {}
				item.title = current.title;
				item.img = current.img;
				item.condition = dataInit[i].name;

				if (dataInit[i].name === "base") {
					if (current.type === "standard") {
						item.desc = "- пелёнка 90*120 см,</br>- нагрудник (> 6 мес),</br>- грызунок из бука с шуршащими ушками (или замена на вязаный),</br>* материал: муслин (100% хлопок)"
					} else if (current.option === 1) {
						item.desc = "- одеяло 90*120 см,<br>- нагрудник (> 6 мес),<br>- грызунок из бука с шуршащими ушками (или замена на вязаный),</br>* материал: муслин (100% хлопок)"
					} else {
						item.desc = "- пелёнка 90*120 см,<br>- шапочка (0-3 мес),<br>- нагрудник (> 6 мес),<br>- грызунок из бука с шуршащими ушками (или замена на вязаный),</br>* материал: трикотаж (95% хлопок, 5% лайкра)"
					}
				}


			}

			return item;

		})

		newArr = newArr.filter(item => typeof item !== 'string')
		return newArr;
	}

	return (
		<div className={classes.result}>
			<p className={classes.desc}>Для заказа отправьте сформированный код в личные собщения @raspberry__leaf или на WhatsApp</p>
			<p className={classes.code}>{props.code}</p>
			<ButtonDone condition={props.condition}
						descr={"insta"}
						direction={"none"}
						handleLink={props.handleLink}
						code={props.code}
			/>
			<ButtonDone condition={props.condition}
						descr={"whats"}
						direction={"none"}
						handleLink={props.handleLink}
						code={props.code}
			/>
			<p>*Код будет автоматически скопирован при нажатии на кнопку</p>
			<div className={classes.contain}>
				Состав «Raspberry Box»:
			</div>
			<ol className={classes.list}>
				{resultArr().map(item => {
					return <li>
						<p className={classes.title}>{item.title}</p>
						{item.desc
							? <p className={classes.descrip} dangerouslySetInnerHTML={{__html: `${item.desc}`}}></p>
							: ''
						}
						<img className={classes.groupImg} src={require(`../img/${item.condition}/${item.img}`).default}></img>
					</li>
				})}
					<li>Эко-сумка ручной работы</li>
					<li>Бесплатная доставка по России</li>

			</ol>
			<ButtonDone condition={props.condition}
						direction={"prev"}
						handleCondition={props.handleCondition}/>
		</div>

	);
}

export default Result;
