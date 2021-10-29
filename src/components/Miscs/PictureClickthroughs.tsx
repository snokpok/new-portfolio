import React from "react";

export interface PCTProps {
  keyPathDict: Record<string, string>;
  imageStyles?: string;
}

function PictureClickthroughs({ keyPathDict, imageStyles }: PCTProps) {
  const [firstAvatarClick, setFAC] = React.useState(false);
  const [showAvatarIdx, setShowAvatarIdx] = React.useState(0);

  const handleSwitchAvatar = () => {
    setShowAvatarIdx((prev) => (prev + 1) % Object.values(keyPathDict).length);
    if (!firstAvatarClick) setFAC(true);
  };

  return (
    <div className="relative">
      <img
        src={Object.values(keyPathDict)[showAvatarIdx]}
        alt={Object.keys(keyPathDict)[showAvatarIdx]}
        className={`w-52 h-52 ${imageStyles ?? "rounded-full"} cursor-pointer`}
        onClick={handleSwitchAvatar}
      />
      {!firstAvatarClick && (
        <div
          className="absolute bottom-2/4 right-1/3 w-5 h-5 rounded-full opacity-25 bg-blue-500 border-2 cursor-pointer"
          onClick={handleSwitchAvatar}
        >
          <div className="w-4 h-4 rounded-full bg-white animate-ping" />
        </div>
      )}
    </div>
  );
}

export default PictureClickthroughs;
