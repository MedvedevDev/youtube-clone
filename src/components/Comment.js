export const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="p-3 my-2 flex shadow-sm bg-gray-100 rounded-md">
      <img
        className="w-12 h-12 mr-2"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div>
        <h4 className="font-bold">{name}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};
