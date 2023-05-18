import bcrypt from "phc-bcrypt";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if (!body || !body.plain || !body.hash) {
        throw createError({
            status: 400,
            statusMessage: "Bad Request: no body provided",
        });
    }
    return await bcrypt.verify(body.hash, body.plain);
});
