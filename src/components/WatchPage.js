import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { CommentsContainer } from "./CommentsConrainer";

export const WatchPage = () => {
  // to get video id for iFrame
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    // close the sidebar
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col">
      <div className="px-5">
        <iframe
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="GREENTECK vs NELSON - UK Champs 2011 - Popping Semi Final"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <CommentsContainer />
    </div>
  );
};
