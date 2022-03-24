import React from "react";
import { getCurrentlyPlayingTrack } from "../../common/queries";
import Marquee from "react-fast-marquee";
import { FaSpotify } from "react-icons/fa";
import { UserContext } from "../../common/user.context";
import { REFETCH_INTERVAL_SECS } from "../../common/env";

interface TemplateSpotifyCPWProps {
  currentlyPlayingData: any;
  extraSmall?: boolean;
}

function SmallSpotifyCPWidgetTemplate({
  currentlyPlayingData,
  extraSmall,
}: TemplateSpotifyCPWProps) {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-md p-3 relative">
      <div className="flex items-center">
        <a
          href="https://open.spotify.com/user/31yhkdfhrmfnmxwx7yy6hmiwfazu?si=8ef7b7e5ad2548da"
          target="_blank"
          rel="noreferrer"
        >
          <FaSpotify
            className={`${extraSmall ? "text-xl" : "text-3xl"} ${
              currentlyPlayingData.item ? "text-green-500" : "text-gray-500"
            } bg-black rounded-full ${
              currentlyPlayingData.item ? "animate-pulse" : ""
            } ${currentlyPlayingData.item ? "absolute inset-x-2.5" : ""} z-10`}
          />
        </a>
      </div>
      {currentlyPlayingData.item ? (
        <>
          <div>
            {currentlyPlayingData.item && (
              <a
                href={currentlyPlayingData.item.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="border-2 animate-spin-slow rounded-full w-10"
                  src={
                    currentlyPlayingData.item.album.images[
                      currentlyPlayingData.item.album.images.length - 1
                    ].url
                  }
                  alt={currentlyPlayingData.item.name}
                />
              </a>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}

function StandardSpotifyCPWidgetTemplate({
  currentlyPlayingData,
}: TemplateSpotifyCPWProps) {
  const artistsText =
    currentlyPlayingData?.item &&
    `${currentlyPlayingData?.item.artists.map((a: any) => a.name).join(", ")}`;
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
              currentlyPlayingData?.item ? "text-green-500" : "text-gray-500"
            } bg-black rounded-full ${
              currentlyPlayingData?.is_playing ? "animate-bounce" : ""
            }`}
          />
        </a>
      </div>
      {currentlyPlayingData?.item ? (
        <>
          <div>
            {currentlyPlayingData.item && (
              <a
                href={currentlyPlayingData.item.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={`border-2 ${
                    currentlyPlayingData?.is_playing
                      ? "animate-spin-slow duration-700"
                      : ""
                  } rounded-full`}
                  src={
                    currentlyPlayingData.item.album.images[
                      currentlyPlayingData.item.album.images.length - 1
                    ].url
                  }
                  alt={currentlyPlayingData.item.name}
                />
              </a>
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

interface SpotifyCPWProps {
  size?: "small" | "standard";
}

function SpotifyCPWidget({ size }: SpotifyCPWProps) {
  const [currentlyPlayingData, setCPD] = React.useState<any>({});
  const { user } = React.useContext(UserContext);

  const handleFetchCurrentlyPlaying = React.useCallback(() => {
    if (user.accessToken) {
      getCurrentlyPlayingTrack(user.accessToken)
        .then((res) => {
          setCPD(res.data);
        })
        .catch((reason) => {
          // pass
          console.log(reason);
        });
    }
  }, [user]);

  React.useEffect(() => {
    handleFetchCurrentlyPlaying();
    const intervalRefetch = setInterval(
      () => handleFetchCurrentlyPlaying(),
      1000 * REFETCH_INTERVAL_SECS
    );
    return () => clearInterval(intervalRefetch);
  }, [handleFetchCurrentlyPlaying]);

  if (size === "small")
    return (
      <SmallSpotifyCPWidgetTemplate
        currentlyPlayingData={currentlyPlayingData}
        extraSmall={true}
      />
    );
  return (
    <StandardSpotifyCPWidgetTemplate
      currentlyPlayingData={currentlyPlayingData}
    />
  );
}

export default SpotifyCPWidget;
