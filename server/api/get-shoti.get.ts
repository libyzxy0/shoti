import videoSchema from '~~/server/models/videoSchema';

export default defineEventHandler(async (event) => {
  try {
    const result = await videoSchema.find();
    return result
  } catch (err) {
    console.log(err)
  }
})