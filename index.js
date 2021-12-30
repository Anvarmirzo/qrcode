// https://goqr.me/api/doc/create-qr-code
(async () => {
	const imgUrl = await fetch(
		' https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example',
	);

	const img = document.getElementById('qrcode');
	img.src = imgUrl.url;
})();
