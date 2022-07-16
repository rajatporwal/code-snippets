import LoaderCircle from "./loader-circle";
import LoaderCircleHorizontal from "./loader-circle-horizontal";
import LoaderText from "./loader-text";
import SpinnerLoader from "./spinner-loader";

const Loaders = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <div style={{ position: "absolute" }}>
          <LoaderCircle />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <div style={{ position: "absolute" }}>
          <LoaderCircleHorizontal />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          height: "150px",
        }}
      >
        <div style={{ position: "absolute", marginLeft: "45%" }}>
          <LoaderText />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <div style={{ position: "absolute" }}>
          <SpinnerLoader />
        </div>
      </div>
    </div>
  );
};

export default Loaders;
