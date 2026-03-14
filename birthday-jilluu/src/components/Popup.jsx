export default function Popup({ text, close }) {
  return (
    <div className="popup">
      <div className="popupBox">
        <p>{text}</p>
        <button onClick={close}>Close 💗</button>
      </div>
    </div>
  );
}