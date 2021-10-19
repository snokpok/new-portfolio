import React from "react";
import { getCurrentlyPlayingTrack } from "../../common/queries";
import Marquee from "react-fast-marquee";
import { FaSpotify } from "react-icons/fa";

function SpotifyCPWidget() {
  const [currentlyPlayingData, setCPD] = React.useState<any>({});

  React.useEffect(() => {
    getCurrentlyPlayingTrack().then((data) => {
      setCPD(data);
    });
  }, []);

  const artistsText =
    currentlyPlayingData.item &&
    `${currentlyPlayingData.item.artists.map((a: any) => a.name).join(", ")}`;

  return (
    <div className="flex space-x-2 border-0 rounded-md p-1">
      <div className="flex items-center">
        <a
          href="https://open.spotify.com/user/31yhkdfhrmfnmxwx7yy6hmiwfazu?si=8ef7b7e5ad2548da"
          target="_blank"
          rel="noreferrer"
        >
          <FaSpotify
            className={`text-4xl ${
              currentlyPlayingData.item ? "text-green-500" : "text-gray-500"
            } bg-black rounded-full`}
          />
        </a>
      </div>
      {currentlyPlayingData.item ? (
        <>
          <div className="border-2 rounded-md">
            {currentlyPlayingData.item && (
              <img
                src={
                  currentlyPlayingData.item.album.images[
                    currentlyPlayingData.item.album.images.length - 1
                  ].url
                }
                alt={currentlyPlayingData.item.name}
              />
            )}
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-bold">
              {currentlyPlayingData.item && currentlyPlayingData.item.name}
            </div>
            <div className="max-w-sm">
              <Marquee pauseOnHover={true} gradientWidth={0}>
                {artistsText}
              </Marquee>
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center font-bold text-gray-500">
          Playing nothing rn! :)
        </div>
      )}
    </div>
  );
}

export default SpotifyCPWidget;
