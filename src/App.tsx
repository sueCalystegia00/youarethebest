import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [currentIndex, setCurrentIndex] = useState(-1);
	const handleKeyPress = (event: { key: string }) => {
		if (event.key === "1") {
			setCurrentIndex(0);
		} else if (event.key === "2") {
			setCurrentIndex(1);
		} else if (event.key === "3") {
			setCurrentIndex(2);
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyPress);
		return () => {
			window.removeEventListener("keydown", handleKeyPress);
		};
	}, []);

	return (
		<div className='App'>
			<div>
				<img src='bar_master_mama_woman.png' alt='表示中の画像' />
				{currentIndex === -1 ? (
					<>
						<p className='explain'>キーボードの1~3のどれかを押してください</p>
					</>
				) : (
					<>
						<p className='comment'>{commentsSet[currentIndex]}</p>
					</>
				)}
			</div>
		</div>
	);
}

const commentsSet = [
	"あんた 最高じゃないっ！",
	"あんたって ホントすごいわね！",
	"分かるわ 頑張ったのね！",
];

export default App;
