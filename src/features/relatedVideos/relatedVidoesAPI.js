import axios from "../../utlis/axios";

/* ?tags_like=javascript&tags_like=react&id_ne=6&_limit=5 */

export const getRelatedVideos = async ({ tags, id }) => {
  let limit = 5;
  let queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}&_limit=${limit}`
      : `id_ne=${id}&_limit=${limit}`;

  const response = await axios.get(`/videos?${queryString}`);
  return response.data;
};
