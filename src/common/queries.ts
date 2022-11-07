import axios, { AxiosResponse } from "axios";
import { SCP_SERVER_URL } from "./env";

export async function getCurrentlyPlayingTrack(
  accessToken: string
): Promise<AxiosResponse<any>> {
  const res = await axios({
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
    url: `${SCP_SERVER_URL}/scp`,
  });
  return res;
}
