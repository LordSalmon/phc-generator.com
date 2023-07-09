import argon2 from "phc-argon2";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if (!body || !body.plain || !body.hash) {
        throw createError({
            status: 400,
            statusMessage: "Bad Request: no body provided",
        });
    }
    try {
        return await argon2.verify(body.hash, body.plain);
    } catch (e) {
        throw createError({
            status: 400,
            statusMessage: "Bad Request: invalid hash",
        });
    }
});
