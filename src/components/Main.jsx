import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {createMuiTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";
import Head from "./Head";
import MainBlock from "./MainBlock";
import {Sticky, StickyContainer} from "react-sticky";

const useStyles = makeStyles({
	box: {
		marginBottom: "45px",
	},

	title: {
		padding: "15px",
		maxWidth: "100%"
	},

	h1: {
		color: "#ffffff",
		fontSize: "22px",
		letterSpacing: "0.4px"
	},
	subtitle: {
		fontWeight: "700",
		fontSize: "22px",
		marginBottom: "15px"
	},

	text: {
		fontSize: "18px",
		lineHeight: "150%",
		alignSelf: "flex-start",

		'&:first-of-type': {
			flexGrow: "1"
		}
	}

})


const Main = (props) => {

	const initialData = props.data;
	const initialRate = props.rate;

	const [state,setState] = useState(initialData);
	const [condition,setCondition] = useState("base");
	const [rate,setRate] = useState(0);
	const [totalRate,setTotalRate] = useState(0);
	const [progress, setProgress] = useState(0);
	const [code, setCode] = useState('');

	const handleProgress = () => {
		setProgress(progress + 100/5)
	}

	const handleCondition = (reset) => {

		if (reset === "reset") {
			setTotalRate(0);
			setRate(0);
			setProgress(0);
			setCode('');
		}

		setRate(0);
		handleProgress();

		switch(condition) {
			case 'base':
				setCondition('toy')
				break
			case 'toy':
				if (reset !== "reset") {
					setCondition('accessory')
				} else {
					setCondition('base')
				}

				break
			case 'accessory':
				if (reset !== "reset") {
					setCondition('extra')
				} else {
					setCondition('base')
				}
				break
			case 'extra':
				if (reset !== "reset") {
					setCondition('postcard')
				} else {
					setCondition('base')
				}
				break
			default:
				setCondition('base')
		}
	}

	const handleChange = (item) => {

		handleRate(item);
		handleCode(item);

	}

	const handleCode = (item) => {
		const data = [...state]
		const current = data.find(elem => elem.name === condition);
		current.finalCode = item.code;
	}

	const handleRate = (code) => {
		const data = [...state]
		const arrRate = [...initialRate]

		const currentData = data.find(item => item.name === condition);
		const currentItem = currentData.items.find(item => item.code === code)
		const currentRate = arrRate.find(item => item.name === condition)

		const finalRate = () => {
			if (currentRate.rate.length > 1) {
				const type = currentRate.rate.find(item => item.type === currentItem.type)
				return type.rate;
			} else {
				return currentRate.rate;
			}
		}

		currentData.finalRate = finalRate();

		setTotalRate(totalRate - rate + finalRate())
		setRate(finalRate());

	}


	const muller = {
		fontFamily: 'Muller',
		fontStyle: 'normal',
		fontDisplay: 'swap',
		fontWeight: 400,
		src: `
			local('Muller'),
			local('Muller-Regular'),
			url('./fonts/Muller-Regular.woff2') format('woff2')`,
	};
	const theme = createMuiTheme({
		typography: {
			fontFamily: 'Muller, Arial',
		},
		palette: {
			primary: {
				main: '#47525E',
			},
		},
		spacing: 8,
		overrides: {
			MuiCssBaseline: {
				'@global': {
					'@font-face': [muller],
					body: {
						backgroundColor: 'transparent',
						color: '#47525E',
						fontSize: 24,
						lineHeight: '20px',
					},
				},
			},
		},
	});
	const classes = useStyles();

	return (
		<StickyContainer >
			<ThemeProvider theme={theme}>
			<CssBaseline />
			<Sticky className="sticky">
				{({style}) => (
					<div style={{...style, zIndex: '999'}}>
						<Head progress={progress}
							  rate={totalRate}/>
					</div>
				)}
			</Sticky>
			<Container maxWidth="sm">
				<MainBlock data={state}
						   condition={condition}
						   handleCondition={handleCondition}
						   handleChange={handleChange}/>
			</Container>
		</ThemeProvider>
		</StickyContainer>
	);
}

export default Main;
