import { Button } from "./Button";

export const ButtonList = () => {
  const list = ["All", "Gaming", "Songs", "Sports", "Live", "Football", "News"];
  return (
    <div className="flex">
      {list.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};
