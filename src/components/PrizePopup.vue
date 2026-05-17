<template>
	<div v-if="show && prize" class="popup-overlay">
		<div class="popup-box">
			<button class="close-btn" @click="$emit('close')">
				✕
			</button>

			<div class="popup-logo">
				<img src="/img/logo.png" alt="Con Cưng">
			</div>

			<p class="popup-success">
				Kêt Thúc Vòng Quay!
			</p>

			<h3>Ba mẹ nhận được</h3>


			<div class="prize-card">
				<div class="prize-image-wrap">
					<img v-if="prize.image" :src="prize.image" :alt="prize.name" class="prize-image">
				</div>

				<div class="prize-name">
					{{ prize.name }}
				</div>

				<p v-if="prize.description" class="prize-description">
					{{ prize.description }}
				</p>
			</div>

			<div class="popup-note">
				Ba mẹ vui lòng chụp ảnh lại gửi cho quản lý để được xác nhận hoàn thành nhé!
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	show: {
		type: Boolean,
		default: false
	},
	prize: {
		type: Object,
		default: null
	}
})

defineEmits(['close'])
</script>

<style scoped>
.popup-overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.32);
	backdrop-filter: blur(6px);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
	padding: 18px;
}

.popup-box {
	position: relative;
	width: 100%;
	max-width: 390px;
	padding: 28px 22px 24px;
	text-align: center;
	border-radius: 28px;
	overflow: hidden;
	background: linear-gradient(135deg, #fce1f7 0%, #f777c1 48%, #ffd9f7 100%);
	box-shadow:
		0 16px 35px rgba(249, 78, 205, 0.22),
		0 0 0 6px #fff,
		0 0 0 10px #ff68c0;
	animation: popupBounce .45s ease;
}

.popup-box::before {
	content: "⭐";
	position: absolute;
	top: 12px;
	left: 18px;
	font-size: 26px;
	animation: floatStar 2s infinite ease-in-out;
}

.popup-box::after {
	content: "🎁";
	position: absolute;
	right: 18px;
	bottom: 6px;
	font-size: 40px;
	opacity: .9;
	animation: floatStar 2s infinite ease-in-out;
}

.close-btn {
	position: absolute;
	top: 14px;
	right: 14px;
	width: 38px;
	height: 38px;
	border: none;
	border-radius: 50%;
	background: rgba(255, 255, 255, .92);
	color: #e6007e;
	font-size: 22px;
	font-weight: bold;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4px 10px rgba(0, 0, 0, .08);
	transition: .25s;
	z-index: 10;
}

.close-btn:hover {
	transform: rotate(90deg) scale(1.08);
	background: #fff;
}

.popup-logo {
	position: relative;
	z-index: 1;
	margin: 0 auto 12px;
	display: flex;
	justify-content: center;
}

.popup-logo img {
	width: 150px;
	height: 65px;
	object-fit: contain;
}

.popup-success {
	position: relative;
	z-index: 1;
	display: inline-block;
	margin: 0 0 12px;
	padding: 8px 14px;
	border-radius: 999px;
	background: rgba(255, 255, 255, .82);
	color: #e6007e;
	font-size: 15px;
	line-height: 1.5;
	font-weight: 800;
}

.popup-box h3 {
	position: relative;
	z-index: 1;
	margin: 0 0 14px;
	font-size: 28px;
	font-weight: 900;
	color: #e6007e;
	text-shadow: 2px 2px 0 #fff;
}

.prize-card {
	position: relative;
	z-index: 1;
	background: rgba(255, 255, 255, .86);
	border-radius: 22px;
	padding: 16px 14px;
	box-shadow: inset 0 0 0 1px rgba(230, 0, 126, .16);
}

.prize-image-wrap {
	width: 150px;
	height: 115px;
	margin: 0 auto 80px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.prize-image {
	max-width: 225px;
	max-height: 350px;
	object-fit: contain;
	margin-top: 115px;
}

.prize-name {
	color: #d6006f;
	font-size: 22px;
	font-weight: 900;
	line-height: 1.25;
}

.prize-description {
	margin: 8px 0 0;
	color: #555;
	font-size: 15px;
	line-height: 1.55;
}

.popup-note {
	position: relative;
	z-index: 1;
	margin-top: 18px;
	padding: 14px 16px;
	border-radius: 18px;
	background: linear-gradient(90deg, #e6007e, #f9a7e8);
	color: white;
	font-size: 14px;
	line-height: 1.6;
	font-weight: 700;
	box-shadow: 0 8px 18px rgba(230, 0, 126, .24);
}

@keyframes popupBounce {
	0% {
		opacity: 0;
		transform: scale(.72) rotate(-5deg);
	}

	65% {
		transform: scale(1.05) rotate(2deg);
	}

	100% {
		opacity: 1;
		transform: scale(1) rotate(0);
	}
}

@keyframes floatStar {

	0%,
	100% {
		transform: translateY(0) rotate(0);
	}

	50% {
		transform: translateY(-6px) rotate(12deg);
	}
}
</style>