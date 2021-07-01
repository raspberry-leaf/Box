import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css";
import Buttons from "./Buttons";
import SwiperCore, {
	Pagination
} from 'swiper/core';
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

})

const Intro = (props) => {
	const classes = useStyles();


	return (
		<div>
			<div className={classes.desc}>
				<p>Это подарок для малыша и его родителей. Уникальный в своём роде благодаря натуральному составу материалов, ручной работе высшего качества, а ещё потому что вы соберёте его своими руками на сайте за 3 минуты💥</p>
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					loop={true}
				>
					<SwiperSlide>
						<img className={classes.groupImg} src={require(`../img/intro/1.jpg`).default}></img>
					</SwiperSlide>
					<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/2.jpg`).default}></img></SwiperSlide>
					<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/3.jpg`).default}></img></SwiperSlide>
					<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/4.jpg`).default}></img></SwiperSlide>
					<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/5.jpg`).default}></img></SwiperSlide>
					<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/6.jpg`).default}></img></SwiperSlide>
					<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/7.jpg`).default}></img></SwiperSlide>
					<SwiperSlide><img className={classes.groupImg} src={require(`../img/intro/8.jpg`).default}></img></SwiperSlide>
				</Swiper>


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
				<p>💰Цены на комплекты стартуют <strong>от 4150 руб.</strong> Стоимость зависит от вашего выбора и она сразу рассчитывается на сайте пока вы выбираете подходящие вам составляющие.</p>
				<p>*Не стесняйтесь на каждом этапе выбора кликать по разным позициям, выбирая для себя оптимальный вариант по исполнению и цене.<br/>Цена мгновенно меняется на верхней панели в зависимости от вашего выбора.</p>
				<p>**В стоимость уже включены <strong>бесплатная доставка</strong> по России и эко-сумка с принтом ручной работы</p>
				<p>🚀Для заказа необходимо собрать на сайте свой комплект и отправить сгенерированный код в директ Инстаграма или WhatsApp. Затем вы получите подтверждение и комплект будет забронирован на 1 час⌚. Это время отводится на 💯 оплату и отправку ваших контактных данных.</p>
			</div>

			<Buttons condition={props.condition}
					 handleCondition={props.handleCondition}/>
		</div>

	);
}

export default Intro;
