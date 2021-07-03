import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css";
import Buttons from "./Buttons";
import SwiperCore, {
	Pagination
} from 'swiper/core';
import Typography from "@material-ui/core/Typography";
import LazyLoad from 'react-lazyload';
SwiperCore.use([Pagination]);


const useStyles = makeStyles({
	desc: {
		margin: "0 0 30px 0",
		lineHeight: "130%",

		"& .swiper-pagination-bullet-active": {
			backgroundColor: "#166316"
		}
	},

	groupImg: {
		width: "auto",
		height: "auto",
		maxWidth: "100%",

	},

	link: {
		color: "#47525E",
		borderBottom:"1px solid #ffa0af",
		textDecoration: "none"
	},

	subtitle: {
		fontWeight: "400",
		fontSize: "18px",
		margin: "20px 0",
		letterSpacing: "0.6px",
		textAlign: "center",

		"& span": {
			position: "relative",
			borderBottom: "1px solid #ffa0af"
		}


	},

	swiperAdvantages: {
		border: "2px solid #166316",
	},

	item: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		padding: "10px 20px 40px 20px"
	},

	title: {
		fontWeight: "400",
		fontSize: "18px",
		margin: "15px 0",
		letterSpacing: "0.6px",
		textAlign: "center",
		color: "#ffffff",
		backgroundColor:  "#ffa0af",
		borderRadius: "8px",
		lineHeight: "150%",
		padding: "10px 15px"
	},
	instagram: {
		//background: "#d6249f",
		background: "radial-gradient(circle at 30% 107%, #ffe800 0%, #f9b800 0%, #fd5949 45%,#d6249f 60%,#285AEB 90%);",
		boxShadow: "0px 3px 10px rgba(0,0,0,.25)",
		marginBottom: "20px",
		padding: '10px 15px',
	},


	linkBtn: {
		display: "block",
		textAlign: "center",
		maxWidth: "200px",
		textDecoration: "none",
		margin: "-15px auto 20px auto",
		lineHeight: "130%",
		borderRadius: "4px",
		color:"#ffffff"
	},
})

const Intro = (props) => {
	const classes = useStyles();


	return (
		<div>
			<div className={classes.desc}>
				<p>Это подарок для малыша и его родителей. Уникальный в своём роде благодаря натуральному составу материалов, ручной работе высшего качества, а ещё потому что вы соберёте его своими руками на сайте за 3 минуты💥</p>
				<LazyLoad height={200} offset={100}>
					<Swiper
					spaceBetween={0}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					loop={true}
				>
					<SwiperSlide>
						<LazyLoad>
							<img className={classes.groupImg} src={require(`../img/intro/1.jpg`).default}></img>
						</LazyLoad>
					</SwiperSlide>
					<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/2.jpg`).default}></img></SwiperSlide>
					<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/3.jpg`).default}></img></SwiperSlide>
					<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/4.jpg`).default}></img></SwiperSlide>
					<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/5.jpg`).default}></img></SwiperSlide>
					<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/6.jpg`).default}></img></SwiperSlide>
					<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/7.jpg`).default}></img></SwiperSlide>
					<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/8.jpg`).default}></img></SwiperSlide>
				</Swiper>
				</LazyLoad>
				<p>Созданием RaspberryBox занимается небольшая команда мастеров. Заглядывайте знакомиться к нам в <a className={classes.link} target="_blank" href={"https://api.instagram.com/raspberry__leaf/"}>Instagram</a></p>

				<p>Каждый набор RaspberryBox включает в себя:</p>
				⭐ базовый комплект
				<br/>⭐ игрушечного зайчонка
				<br/>⭐ открытку
				<br/>⭐ эко-сумку с принтом ручной работы
				<br/>⭐ бесплатную доставку Почтой России по РФ
				<br/>
				<p>Опционально можно добавить к набору:</p>
				🍭 погремушку-мороженое
				<br/>🍭 заменить стандартный грызунок-ушки на вязаный грызунок

				<Typography component="h2" className={classes.subtitle}>
					<span>Почему Raspberry Box - лучший подарок для малыша?</span>
				</Typography>
				<LazyLoad height={200} offset={100}>
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					className={classes.swiperAdvantages}
				>
					<SwiperSlide>
						<div className={classes.item}>
							<div className={classes.title}>Идеальный подарок<br/> для родителей и малыша</div>
							<div className={classes.text}>
								Хотелось бы,чтобы он был:<br/><br/>
								- необычным<br/>
								- полезным<br/>
								- практичным<br/>
								- для малыша<br/>
								- и для родителей<br/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={classes.item}>
							<div className={classes.title}>Необычный подарок</div>
							<div className={classes.text}>
								Raspberry Leaf<br/>
								создаёт комплекты в<br/>
								единой <strong>минималистичной<br/>
								стилистике.</strong><br/><br/>

								Ваш подарок не будет<br/>
								выглядеть сумбурным,<br/>
								он будет <strong>полноценным,</strong><br/>
								не только <strong>по цвету,</strong><br/>
								но и <strong>по наполнению.</strong><br/>

							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={classes.item}>
							<div className={classes.title}>Полезный подарок</div>
							<div className={classes.text}>
								Raspberry Box cтанет<br/>
								отличным <strong>дополнением</strong><br/>
								ко всему тому,<br/>
								что уже есть<br/>
								у родителей и малыша.<br/>
								<br/>
								<strong>"Детский"<br/>
									акцент</strong> подарку добавят<br/>
								<strong>грызунок, погремушка<br/>
									и зайчонок</strong> ручной работы.<br/>
								Они шуршат/бренчат,<br/>
								абсолютно <strong>безопасны</strong><br/>
								и <strong>практичны</strong><br/>
								в использовании.<br/>

							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={classes.item}>
							<div className={classes.title}>Полезный подарок</div>
							<div className={classes.text}>
								Raspberry Box = <strong>набор<br/>
								для фотосессий.</strong><br/>
								<br/>
								Комплект можно <strong>собрать</strong><br/>
								по своему желанию<br/>
									на сайте <strong>за 3 минуты.</strong><br/>
								<br/>
								В <strong>комплект</strong> входят:<br/>
								- шапочка,<br/>
								- пелёнка/одеяло,<br/>
								- слюнявчик,<br/>
								- погремушка/грызунок,<br/>
								- игрушка-зайчик<br/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={classes.item}>
							<div className={classes.title}>Полезный подарок</div>
							<div className={classes.text}>
								Лёгкие <strong>одеяла/пелёнки</strong><br/>
								из <strong>хлопка</strong> или <strong>муслина</strong><br/>
								в комплекте Raspberry Box<br/>
									<strong>многофункциональны.</strong><br/>
								<br/>
								Их <strong>удобно использовать</strong><br/>
								- в коляске<br/>
								- в кроватке<br/>
								- для <strong>кормления</strong><br/>
								в общественных местах<br/>
								- для памятных <strong>фото</strong><br/>
								малыша<br/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={classes.item}>
							<div className={classes.title}>Практичный подарок</div>
							<div className={classes.text}>
								Raspberry Box = <strong>подарок<br/>
								и впечатление<br/>
								на долгие годы.</strong><br/>
								<br/>
								Все элементы<br/>
								сшиты/связаны из<br/>
								<strong>натуральных</strong><br/>
								и <strong>долговечных</strong> материалов.<br/>
								<br/>
								Все изделия <strong>можно<br/>
								стирать</strong> и они<br/>
											<strong>не потеряют форму<br/>
								и цвет.</strong><br/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={classes.item}>
							<div className={classes.title}>Подарок для малыша</div>
							<div className={classes.text}>
								Зайчонок Raspberry Box<br/>
								станет первым<br/>
								<strong>игрушечным другом<br/>
								малыша.</strong><br/>
								<br/>
								Рост всего  <strong>30 см.</strong><br/>
								Зайчик выполнен<br/>
								из 100% <strong>умягчённого льна,<br/>
								не имеет элементов<br/>
								из пластика,</strong><br/>
								у него <strong>идеальный размер<br/>
								для развития<br/>
								мелкой моторики</strong><br/>
								детских ручек.<br/>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={classes.item}>
							<div className={classes.title}>Подарок для родителей</div>
							<div className={classes.text}>
								<strong>Впечатление, радость,<br/>
								эмоции!</strong><br/>
								Мы хотим <strong>дарить</strong> их много<br/>
								и без остатка.<br/>
								<br/>
								Молодым родителям<br/>
								бывает непросто.<br/>
								Наш подарок должен<br/>
								и <strong>помогать</strong>, и <strong>радовать</strong>.<br/>
								<br/>
								Загляните в <strong>RaspberryBox</strong>.<br/>
								Убедитесь, что он<br/>
												<strong>именно такой</strong>.<br/>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
				</LazyLoad>
				<br/>
				<p>😔 К сожалению, большинство комплектов ручной работы для малышей стоят от 5500 руб., не включая доставку.
					Стоимость доставки обычно составляет не менее 500 руб.
				Получается, что оригинальный комплект для малыша стоит не менее 6000 руб.?!</p>
				<p>🤑 Нет! Наборы Raspberry Box имеют приятное наполнение, привлекательную цену и <strong>бесплатную доставку по всей России</strong></p>

				<Typography component="h2" className={classes.subtitle}>
					<span>Примеры Raspberry Box с ценами:</span>
				</Typography>
				<LazyLoad height={200} offset={100}>
					<Swiper
						spaceBetween={0}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
						scrollbar={{ draggable: true }}
						loop={true}
					>
						<SwiperSlide>
							<LazyLoad>
								<img className={classes.groupImg} src={require(`../img/intro/rates/1.jpg`).default}></img>
							</LazyLoad>
						</SwiperSlide>
						<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/rates/2.jpg`).default}></img></SwiperSlide>
						<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/rates/3.jpg`).default}></img></SwiperSlide>
						<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/rates/4.jpg`).default}></img></SwiperSlide>
						<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/rates/5.1.jpg`).default}></img></SwiperSlide>
						<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/rates/5.2.jpg`).default}></img></SwiperSlide>
						<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/rates/5.jpg`).default}></img></SwiperSlide>
						<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/rates/6.jpg`).default}></img></SwiperSlide>
						<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/rates/8.jpg`).default}></img></SwiperSlide>
						<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/rates/9.1.jpg`).default}></img></SwiperSlide>
						<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/rates/9.jpg`).default}></img></SwiperSlide>
						<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/rates/10.1.jpg`).default}></img></SwiperSlide>

					</Swiper>
				</LazyLoad>
				<p>Стоимость зависит от вашего выбора и она сразу рассчитывается на сайте пока вы выбираете подходящие вам составляющие.</p>
				<p>*Кликайте на каждом этапе выбора по разным позициям, выбирая для себя оптимальный вариант по исполнению и цене.<br/>Цена мгновенно меняется на верхней панели в зависимости от вашего выбора.</p>
				<p>**В стоимость уже включены <strong>бесплатная доставка</strong> по России и эко-сумка с принтом ручной работы</p>
				<Typography component="h2" className={classes.subtitle}>
					<span>Как заказать?</span>
				</Typography>
				<p>🚀Для заказа необходимо собрать на сайте свой комплект и отправить сгенерированный код в директ Instagram или WhatsApp. Затем вы получите подтверждение и комплект будет забронирован на 1 час⌚. Это время отводится на 💯 оплату и отправку ваших контактных данных.</p>
				<p>Не готовы собирать сейчас?<br/> Подписывайтесь на нас в <a className={classes.link} target="_blank" href={"https://api.instagram.com/raspberry__leaf/"}>Instagram</a>, чтобы не потерять 🌟</p>
			</div>

			<Buttons condition={props.condition}
					 handleCondition={props.handleCondition}/>
			<a className={`${classes.linkBtn} ${classes.instagram}`}
			   target="_blank"
			   href={"https://www.instagram.com/raspberry__leaf/"}
			>Подписаться в Instagram</a>
		</div>

	);
}

export default Intro;
