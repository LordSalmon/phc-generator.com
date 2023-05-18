import argon2 from "phc-argon2";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if (!body || !body.plain) {
        throw createError({
            status: 400,
            statusMessage: "Bad Request: no body provided",
        });
    }
    return await argon2.hash(body.plain);
});
