import axios, { AxiosResponse } from "axios";

export async function getCurrentlyPlayingTrack(
  accessToken: string
): Promise<AxiosResponse<any>> {
  const res = await axios({
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
    url: "https://api.spotify.com/v1/me/player/currently-playing",
  });
  return res;
}
