<template>
	<transition name="popup-fade">
		<div v-if="show && prize" class="popup-overlay" @click.self="$emit('close')">
			<div class="popup-box">
				<div class="popup-top">
					<img src="/img/bannerpopup.png" alt="">
				</div>

				<div class="popup-content">
					<div class="popup-image" v-if="prize.image">
						<img :src="prize.image" :alt="prize.name">
					</div>

					<div class="popup-icon" v-else>
						🎁
					</div>

					<div class="popup-title">
						Ba mẹ nhận được
					</div>

					<div class="popup-prize">
						{{ prize.name }}
					</div>

					<p v-if="prize.description" class="popup-description">
						{{ prize.description }}
					</p>

					<p class="popup-note">
						Ba mẹ vui lòng chụp ảnh lại gửi cho quản lý để được xác nhận hoàn thành nhé!
					</p>

					<button class="popup-btn" @click="$emit('close')">
						Đóng
					</button>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup>
const props = defineProps({
	show: {
		type: Boolean,
		default: false
	},
	prize: {
		type: Object,
		default: null
	}
})

const emit = defineEmits(['close'])

const closePopup = () => {
	emit('close')
}
</script>


<style scoped>
.popup-overlay {
	position: fixed;
	inset: 0;
	z-index: 9999;
	background: rgba(0, 0, 0, .45);
	backdrop-filter: blur(5px);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px;
}

.popup-box {
	width: 100%;
	max-width: 390px;
	background: #fff;
	border-radius: 22px;
	overflow: hidden;
	box-shadow: 0 18px 45px rgba(0, 0, 0, .24);
	animation: popupBounce .42s ease;
}

.popup-top {
	width: 100%;
	height: 138px;
	padding: 0;
	background: #f9c3f0;
	line-height: 0;
	overflow: hidden;
}

.popup-top img {
	width: 100%;
	height: 100%;
	display: block;
	object-fit: cover;
	object-position: center;
}

.popup-content {
	padding: 18px 22px 20px;
	text-align: center;
}

.popup-image {
	width: 100%;
	height: 185px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto 10px;
	padding-top: 48px;
}

.popup-image img {
	max-width: 260px;
	max-height: 400px;
	width: auto;
	height: auto;
	object-fit: contain;
	display: block;
}

.popup-icon {
	height: 160px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 70px;
	margin-bottom: 10px;
}

.popup-title {
	margin-top: 4px;
	font-size: 22px;
	font-weight: 800;
	color: #333;
	line-height: 1.25;
}

.popup-prize {
	margin-top: 8px;
	font-size: 26px;
	font-weight: 1000;
	color: #e53185;
	line-height: 1.2;
}

.popup-description {
	margin: 8px 0 0;
	color: #555;
	font-size: 14px;
	line-height: 1.45;
}

.popup-note {
	max-width: 310px;
	margin: 14px auto 0;
	font-size: 13px;
	line-height: 1.45;
	color: #666;
}

.popup-btn {
	margin-top: 20px;
	width: 100%;
	height: 46px;
	border: none;
	border-radius: 12px;
	background: linear-gradient(180deg, #ff4f99, #f11f7b);
	color: #fff;
	font-size: 16px;
	font-weight: 900;
	cursor: pointer;
	box-shadow: 0 8px 18px rgba(241, 31, 123, .22);
}

.popup-btn:active {
	transform: translateY(1px);
}

.popup-fade-enter-active,
.popup-fade-leave-active {
	transition: opacity .25s ease;
}

.popup-fade-enter-from,
.popup-fade-leave-to {
	opacity: 0;
}

@keyframes popupBounce {
	0% {
		opacity: 0;
		transform: scale(.78) translateY(12px);
	}

	70% {
		transform: scale(1.04) translateY(0);
	}

	100% {
		opacity: 1;
		transform: scale(1);
	}
}

@media (max-width: 390px) {
	.popup-box {
		max-width: 352px;
		border-radius: 20px;
	}

	.popup-top {
		height: 132px;
	}

	.popup-content {
		padding: 16px 20px 20px;
	}

	.popup-image {
		height: 170px;
	}

	.popup-image img {
		max-width: 240px;
		max-height: 160px;
	}

	.popup-title {
		font-size: 21px;
	}

	.popup-prize {
		font-size: 25px;
	}
}
</style>