import argon2 from "phc-argon2";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if (!body || !body.plain || !body.hash) {
        throw createError({
            status: 400,
            statusMessage: "Bad Request: no body provided",
        });
    }
    return argon2.verify(body.hash, body.plain);
});
