import { error } from '@sveltejs/kit';

const base = 'http://localhost:3000';

interface Request {
    method: string
    path: string
    data?: object
    token?: string
}

interface Headers {
    [key: string]: string
}

interface Options {
    method: string
    headers: Headers
    body?: string
}

async function send(request: Request) {
    const opts: Options = { method: request.method, headers: {} };

    if (request.data) {
        opts.headers['Content-Type'] = 'application/json';
        opts.body = JSON.stringify(request.data);
    }

    if (request.token) {
        opts.headers['Authorization'] = `Bearer ${request.token}`;
    }

    const res = await fetch(`${base}/${request.path}`, opts);

    if (res.ok || res.status === 422) {
        const text = await res.text();
        return text ? JSON.parse(text) : {};
    }

    error(res.status);
}

export function get(path: string, token?: string) {
    return send({ method: 'GET', path, token });
}

export function del(path: string, token?: string) {
    return send({ method: 'DELETE', path, token });
}

export function post(path: string, data: object, token?: string) {
    return send({ method: 'POST', path, data, token });
}

export function put(path: string, data: object, token?: string) {
    return send({ method: 'PUT', path, data, token });
}
