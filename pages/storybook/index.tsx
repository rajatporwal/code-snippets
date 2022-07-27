import {
  LoaderCircle,
  LoaderCircleHorizontal,
  LoaderText,
  SpinnerLoader,
  TypeWriterAnimation,
} from "@rajatporwal/react-component-library";

const StoryBook = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <TypeWriterAnimation text="Button" />
      <LoaderCircle />
      <SpinnerLoader />
      <div>
        <LoaderCircleHorizontal />
      </div>
      <div>
        <LoaderText />
      </div>
    </div>
  );
};

export default StoryBook;
