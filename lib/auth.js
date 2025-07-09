import { SignJWT, jwtVerify } from "jose";
const SECRET_KEY = new TextEncoder().encode(process.env.SECRET_KEY);
const algorithm = "HS256";


export async function createJWT(payload) {
    return  new SignJWT(payload)
        .setProtectedHeader({ alg: algorithm })
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(SECRET_KEY);
}

export async function verifyJWT(token) {
    try {
        const { payload } = await jwtVerify(token, SECRET_KEY, {
            algorithms: [algorithm],
        });
        return payload;
    } catch (error) {
        console.error("JWT verification failed:", error);
        return null;
    }
}