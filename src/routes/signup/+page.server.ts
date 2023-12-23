import shajs from 'sha.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        const user = {
            login: data.get('login'),
            full_name: data.get('full-name'),
            email: data.get('email'),
            password: shajs('sha256').update(data.get('password') as string).digest('hex')
        };

        console.log("user", user)
        throw redirect(307, "/")
    }
};
