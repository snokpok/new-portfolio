import axios, { AxiosResponse } from "axios";

const LOCALHOST_SCPGO_SERVER = "http://localhost:4000";
const SCPGO_SERVER_PROD = "https://serene-bastion-56610.herokuapp.com";

export async function getCurrentlyPlayingTrack(
  accessToken: string
): Promise<AxiosResponse<any>> {
  const res = await axios({
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
    url: `${SCPGO_SERVER_PROD}/scp`,
  });
  return res;
}
