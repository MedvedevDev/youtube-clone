export const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2">
      <img
        className="h-6"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="px-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};
