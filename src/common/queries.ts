import axios from "axios";

const ACCESS_TOKEN =
  "BQD8zM1Gkr0f6BFALD7mOhGj_trG5eAY7_VH7AyrFgs90PLjJ85jeLV2vPYvvrqV8gWSCwkZPj_LbvX_oYzmo--QLlWV-oJwwLpKXh7jPCQY9SQH_BMhZS8eO78NlsXR2b-Zbc86HUZ42VM_VesPGbYNXlFR8nbnAMlzNm_5LZtKvhMUuJTHo70tuJ-0YWa67Fsf8E8neBWlqAFJozafD82D1GzZUEQ";

export const getCurrentlyPlayingTrack = async () => {
  const res = await axios({
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      Accept: "application/json",
    },
    url: "https://api.spotify.com/v1/me/player/currently-playing",
  });
  return res.data as any;
};
