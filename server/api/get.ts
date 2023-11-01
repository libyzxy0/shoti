export default defineEventHandler(async (event) => {
  let { data } = await axios.get(
    "https://shoti-api.libyzxy0.xyz/api/get-shoti?apikey=shoti-1hdv16i3pl75egkudag",
  );
  return {
    sauce: data,
  };
});
