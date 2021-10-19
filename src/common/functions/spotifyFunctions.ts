import axios, { AxiosResponse } from "axios";
import { CLIENT_ID, CLIENT_SECRET } from "../env";
import qs from "querystring";
import { originalCallbackURL } from "../data";

export const getClientHeaderField = () => {
  return Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
};

export const requestToken = async (code: string, redirectURI: string) => {
  const res = axios({
    method: "POST",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization: `Basic ${getClientHeaderField()}`,
      Accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri: originalCallbackURL,
    }),
  });
  return res as unknown as AxiosResponse<any>;
};

export async function refreshToken(
  refreshToken: string
): Promise<AxiosResponse<any>> {
  const res = axios({
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization: `Basic ${getClientHeaderField()}`,
      Accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });
  return res;
}
