import { SECRET } from "$env/static/private";
import jwt from 'jsonwebtoken';

function setuser(user: any) {
    const payload = {
        email: user.email,
        name: user.name
    }
    console.log(payload);
    return jwt.sign(payload, SECRET);
}

function getuser(token: any) {
    if (!token) return null;
    const res = jwt.verify(token, SECRET);
    return res;
}

export { setuser, getuser }