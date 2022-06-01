import React, {
  Fragment,
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
import { recognizeText } from "./ocr";
import { fabric } from "fabric";
import { Box, Button, Typography } from "@material-ui/core/";
import AspectRatioPaper from "../AspectRatioPaper";
import generateString from "./stringGenerator";
import HintLayer from "./HintLayer";
import FeedbackLayer from "./FeedbackLayer";
import LoadingLayer from "./LoadingLayer";
import ResultModal from "./ResultModal";
import Counter from "./Counter";
import { addScore } from "../../backendUtils";
import { UserContext } from "../../contexts";

const incrementOldState = (x) => x + 1;

export default function WriteCanvas(props) {
  const [stringToWrite, setStringToWrite] = useState(generateString());
  const [totalCorrectTries, setTotalCorrectTries] = useState(0);
  const [totalIncorrectTries, setTotalIncorrectTries] = useState(0);
  const [wrongRoundTries, setWrongRoundTries] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shouldShowFeedback, setShouldShowFeedback] = useState(false);
  const canvasRef = useRef();
  const timerIdRef = useRef();
  const [counter, setCounter] = useState(65);
  const [isFinished, setIsFinished] = useState(false);
  const userContext = useContext(UserContext);

  useEffect(() => {
    const canvas = new fabric.Canvas(props.id, {
      isDrawingMode: true,
    });
    canvas.freeDrawingBrush.width = 10;
    canvas.setDimensions({ width: "100%", height: "100%" }, { cssOnly: true });
    canvasRef.current = canvas;
    if (isFinished) {
      requestAddScore();
    }

    return () => clearInterval(timerIdRef.current);
  }, [isFinished]);

  async function requestAddScore() {
    console.log(userContext.email);
    await addScore(userContext.email, totalCorrectTries);
    console.log("addScore working");
  }

  const confirmCorrectText = async () => {
    setIsLoading(true);
    const canvas = canvasRef.current;
    const imgLink = canvasRef.current.toDataURL({ multiplier: 0.5 });
    let recognizedText = await recognizeText(imgLink);
    if (recognizedText !== stringToWrite) {
      setIsCorrect(false);
      setTotalIncorrectTries(incrementOldState);
      setWrongRoundTries(incrementOldState);
    } else {
      setIsCorrect(true);
      setTotalCorrectTries(incrementOldState);
      setWrongRoundTries(0);
      setStringToWrite(generateString());
    }

    toggleFeedback();
    canvas.clear();
    setIsLoading(false);
  };

  const toggleFeedback = () => {
    setShouldShowFeedback(true);
    timerIdRef.current = setTimeout(() => setShouldShowFeedback(false), 3000);
  };

  return (
    <Fragment>
      <Counter
        counter={counter}
        isFrozen={isLoading}
        setCounter={setCounter}
        setIsFinished={setIsFinished}
      />
      <Typography variant="h4">Try To Write: {stringToWrite}!</Typography>
      <ResultModal
        counter={counter}
        isFinished={isFinished}
        setIsFinished={setIsFinished}
        setCounter={setCounter}
        totalCorrectTries={totalCorrectTries}
        setTotalCorrectTries={setTotalCorrectTries}
        setTotalIncorrectTries={setTotalIncorrectTries}
        setWrongRoundTries={setWrongRoundTries}
        canvasRef={canvasRef}
      />
      <AspectRatioPaper>
        <canvas width={props.width} height={props.height} id={props.id} />
        <HintLayer
          wrongRoundTries={wrongRoundTries}
          stringToWrite={stringToWrite}
        />
        <LoadingLayer open={isLoading} />
        <FeedbackLayer open={shouldShowFeedback} isCorrect={isCorrect} />
      </AspectRatioPaper>

      <Box>
        <Button
          variant="contained"
          color="primary"
          elevation={4}
          onClick={confirmCorrectText}
          disabled={isLoading}
        >
          Check Answer
        </Button>
        &nbsp;
        <Button
          variant="contained"
          color="secondary"
          elevation={10}
          onClick={() => canvasRef.current.clear()}
        >
          Reset
        </Button>
      </Box>
    </Fragment>
  );
}
