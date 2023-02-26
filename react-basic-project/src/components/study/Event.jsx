export default function Event() {

  const handleClickCapture = () => {
    console.log("handleClickCapture");
  }
  const handleClickCapture2 = () => {
    console.log("handleClickCapture2");
  }
  const handleClickBubble = () => {
    console.log("handleClickBubble");
  }
  const handleButtonClick = () => {
    console.log("handleButtonClick");
  }

  // Capture 자식이벤트보다 먼저 타게 ..

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick}>btn</button>
      </div>
    </div>
  );
}