import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        dwidoiandiwn awndionwaiodo ii iwndin nndwodawd dwidoiandiwn
        awndionwaiodo ii iwndin nndwodawd dwidoiandiwn awndionwaiodo ii iwndin
        awndionwaiodo ii iwndin nndwodawd dwidoiandiwn awndionwaiodo ii iwndin
        awndionwaiodo ii iwndin nndwodawd dwidoiandiwn awndionwaiodo ii iwndin
        nndwodawd
      </TextExpander>

      <TextExpander>
        dwidoiandiwn awndionwaiodo ii iwndin nndwodawd dwidoiandiwn
        awndionwaiodo ii iwndin nndwodawd dwidoiandiwn awndionwaiodo ii iwndin
        awndionwaiodo ii iwndin nndwodawd dwidoiandiwn awndionwaiodo ii iwndin
        awndionwaiodo ii iwndin nndwodawd dwidoiandiwn awndionwaiodo ii iwndin
        nndwodawd
      </TextExpander>

      <TextExpander wordsQuantity={20} btnTextColor="blue">
        dwidoiandiwn awndionwaiodo ii iwndin nndwodawd dwidoiandiwn
        awndionwaiodo ii iwndin nndwodawd dwidoiandiwn awndionwaiodo ii iwndin
        awndionwaiodo ii iwndin nndwodawd dwidoiandiwn awndionwaiodo ii iwndin
        awndionwaiodo ii iwndin nndwodawd dwidoiandiwn awndionwaiodo ii iwndin
        nndwodawd
      </TextExpander>
    </div>
  );
}

function TextExpander({
  wordsQuantity = 10,
  expandButtonText = "Show less",
  collapseButtonText = "Show more",
  btnTextColor = "red",
  expanded = false,
  children,
}) {
  const [expandStatus, setExpandStatus] = useState(expanded);

  const buttonStyle = {
    background: "none",
    border: "none",
    fontWeight: 600,
    fontSize: "inherit",
    color: btnTextColor,
    cursor: "pointer",
  };

  return (
    <div>
      <span>
        {expandStatus
          ? children
          : children.split(" ").slice(0, wordsQuantity).join(" ") + "..."}
      </span>
      <button
        onClick={() => setExpandStatus((exp) => !exp)}
        style={buttonStyle}
      >
        {expandStatus ? expandButtonText : collapseButtonText}
      </button>
    </div>
  );
}
