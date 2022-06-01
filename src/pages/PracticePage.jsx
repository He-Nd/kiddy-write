import WriteCanvas from "../components/WriteCanvas";
import GuardedPage from "./GuardedPage";

export default function PracticePage() {
  return (
    <GuardedPage>
      <WriteCanvas id="c" width="512" height="288" />
    </GuardedPage>
  );
}
