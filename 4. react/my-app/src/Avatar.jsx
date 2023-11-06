import "./Avatar.css";

export function Avatar({ src }) {
  const myStyle = {
    borderRadius: "50%",
    margin: 20,
  };

  return (
    <div className="avatar" style={myStyle}>
      <img src={src} alt="" />
    </div>
  );
}
