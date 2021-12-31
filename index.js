// https://goqr.me/api/doc/create-qr-code
document.addEventListener('DOMContentLoaded', function (event) {
	const form = document.getElementById('form');

	form.addEventListener('submit', async (e) => {
		e.preventDefault();

		const request = form.querySelector('input').value;
		const img = document.getElementById('qrcode');
		const downloadLink = document.getElementById('download-link');

		const imgUrl = await fetch(
			`https://api.qrserver.com/v1/create-qr-code/?&data=${request}`,
		);

		downloadLink.href = imgUrl.url;
		downloadLink.title = imgUrl.url;
		img.src = imgUrl.url;
	});
});
