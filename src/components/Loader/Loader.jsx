import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div style={style}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#eee"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
