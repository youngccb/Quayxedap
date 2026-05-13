<template>
	<div v-if="show" class="popup-overlay">
        <div class="popup-box">

            <button class="close-btn" @click="$emit('close')">
                ✕
            </button>

            <div class="popup-icon"><img src="/img/logo.png" alt=""></div>

            <p>Chúc mừng ba mẹ đã hoàn thành khảo sát!</p>

            <h3>Cảm ơn ba mẹ!</h3>

            <p>{{ message }}</p>

            <div class="popup-note">
                Ba mẹ vui lòng chụp ảnh lại gửi cho quản lý để được xác nhận hoàn thành nhé!
            </div>

        </div>
	</div>
</template>

<script setup>
defineProps({
	show: Boolean,
	message: String
})

defineEmits(['close'])
</script>

<style scoped>
.popup-overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.28);
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
	padding: 30px 22px 24px;
	text-align: center;
	border-radius: 28px;
	overflow: hidden;
	background: linear-gradient(135deg, #f5f6c8 0%, #ffe8d9 48%, #ffe6f2 100%);
	box-shadow:
		0 16px 35px rgba(255, 55, 155, 0.28),
		0 0 0 6px #fff,
		0 0 0 10px #ffb3d9;
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
	right: 16px;
	bottom: 2px;
	font-size: 42px;
	opacity: .9;
	animation: floatStar-e5f0ac9f 2s infinite ease-in-out;
}
img{
    width: 150px;
    height: 65px;
}
.popup-icon {
	width: 0px;
	height: 82px;
	margin: 0 auto 14px;
	border-radius: 50%;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 48px;
	box-shadow: 0 8px 20px rgba(255, 55, 155, .22);
}

.popup-box p {
	position: relative;
	z-index: 1;
	margin: 0;
	font-size: 15px;
	line-height: 1.65;
	color: #555;
}

.popup-box > p:first-of-type {
	display: inline-block;
	margin-bottom: 12px;
	padding: 8px 14px;
	border-radius: 999px;
	background: rgba(255, 255, 255, .75);
	color: #ff379b;
	font-weight: 700;
}

.popup-box h3 {
	position: relative;
	z-index: 1;
	margin: 0 0 12px;
	font-size: 30px;
	font-weight: 900;
	color: #ff1493;
	text-shadow: 2px 2px 0 #fff;
}

.popup-box > p:last-of-type {
	background: rgba(255, 255, 255, .78);
	padding: 14px 16px;
	border-radius: 18px;
	box-shadow: inset 0 0 0 1px rgba(255, 55, 155, .12);
}

.popup-btn {
	position: relative;
	z-index: 1;
	margin-top: 20px;
	width: 180px;
	border: none;
	border-radius: 999px;
	padding: 13px 18px;
	background: linear-gradient(90deg, #ff379b, #ff7ac3);
	color: #fff;
	font-size: 18px;
	font-weight: 800;
	cursor: pointer;
	box-shadow: 0 8px 16px rgba(255, 55, 155, .35);
	transition: .25s;
}

.popup-btn:hover {
	transform: translateY(-2px) scale(1.03);
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

@keyframes popRotate {
	0%, 100% {
		transform: rotate(0) scale(1);
	}
	35% {
		transform: rotate(-8deg) scale(1.08);
	}
	70% {
		transform: rotate(8deg) scale(1.05);
	}
}

@keyframes floatStar {
	0%, 100% {
		transform: translateY(0) rotate(0);
	}
	50% {
		transform: translateY(-6px) rotate(12deg);
	}
}

.close-btn {
	position: absolute;
	top: 14px;
	right: 14px;
	width: 38px;
	height: 38px;
	border: none;
	border-radius: 50%;
	background: rgba(255,255,255,.9);
	color: #ff379b;
	font-size: 22px;
	font-weight: bold;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4px 10px rgba(0,0,0,.08);
	transition: .25s;
	z-index: 10;
}

.close-btn:hover {
	transform: rotate(90deg) scale(1.08);
	background: #fff;
}

.popup-note {
	margin-top: 18px;
	padding: 14px 16px;
	border-radius: 18px;
	background: linear-gradient(
		90deg,
		#ff379b,
		#ff8ac7
	);
	color: white;
	font-size: 14px;
	line-height: 1.6;
	font-weight: 600;
	box-shadow: 0 8px 18px rgba(255,55,155,.2);
}
</style>