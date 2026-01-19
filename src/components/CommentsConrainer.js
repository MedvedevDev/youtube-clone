import { CommentsList } from "./CommentsList";

const commentsData = [
  {
    name: "Alex",
    text: "dont like this video",
    replies: [
      {
        name: "Lol",
        text: "rep rep rep",
        replies: [
          {
            name: "Mikto Fus ba",
            text: "this is comment from comment from",
            replies: [],
          },
        ],
      },
      {
        name: "Alex",
        text: "dont like this video",
        replies: [],
      },
    ],
  },
  {
    name: "Monto",
    text: "like like like",
    replies: [],
  },
  {
    name: "Possso Pos",
    text: "hello world",
    replies: [
      {
        name: "Minto Ka",
        text: "hi this is comment",
        replies: [],
      },
    ],
  },
];

export const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};
