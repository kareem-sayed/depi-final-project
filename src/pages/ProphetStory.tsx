import { useParams } from "react-router-dom";
import HeadPage from "../components/HeadPage";

export default function ProphetStory() {
  const { id } = useParams();
  return (
    <>
      <div className="text-center">
        <HeadPage title={`Here Will The Prophet Story ${id}`} />
      </div>
    </>
  );
}
