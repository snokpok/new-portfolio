import React from "react";
import { getCurrentlyPlayingTrack } from "../../common/queries";
import Marquee from "react-fast-marquee";
import { FaSpotify } from "react-icons/fa";
import { UserContext } from "../../common/user.context";
import { refreshToken } from "../../common/functions/spotifyFunctions";
import { REFETCH_INTERVAL_SECS } from "../../common/env";

function SpotifyCPWidget() {
  const [currentlyPlayingData, setCPD] = React.useState<any>({});
  const { user, setUser } = React.useContext(UserContext);

  const handleFetchCurrentlyPlaying = React.useCallback(() => {
    getCurrentlyPlayingTrack(user?.accessToken ?? "")
      .then((res) => {
        setCPD(res.data);
      })
      .catch(async (reason) => {
        // try to refresh the token here
        if (user.refreshToken) {
          const { data } = await refreshToken(user.refreshToken);
          setUser((prev) => ({ ...prev, accessToken: data["access_token"] }));
        }
      });
  }, [user, setUser]);

  React.useEffect(() => {
    handleFetchCurrentlyPlaying();
    const intervalRefetch = setInterval(
      () => handleFetchCurrentlyPlaying(),
      1000 * REFETCH_INTERVAL_SECS
    );
    return () => clearInterval(intervalRefetch);
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
            } bg-black rounded-full animate-bounce`}
          />
        </a>
      </div>
      {currentlyPlayingData.item ? (
        <>
          <div>
            {currentlyPlayingData.item && (
              <img
                className="border-2 rounded-md"
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
              <Marquee gradientWidth={0} pauseOnHover={true}>
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
