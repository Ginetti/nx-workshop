const style = document.createElement('style');
style.textContent = `
card-wrapper {
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(3, 1fr);
}

card-content {
	display: flex;
	flex-direction: column;
	padding: 10px;
	width: 180px;
	height: 250px;
	cursor: pointer;
	justify-content: space-between;
	box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
	border-radius: 6px;
	background-color: white;
}

card-title {
	font-size: 24px;
}

card-box>div {
	height: 80px;
    width: 100%;
}

.green {
    background-color: rgb(70, 119, 70);
}
.blue {
    background-color: rgb(95, 146, 175);
}
.red {
    background-color: rgb(175, 54, 54);
}
`;
document.body.appendChild(style);
