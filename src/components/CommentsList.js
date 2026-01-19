import { Comment } from "./Comment";

export const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment data={comment} />
            <div className="pl-5 border border-l-black ml-5">
              {/*recursing the CommentsList component to display replies*/}
              <CommentsList comments={comment.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
