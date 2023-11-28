import shajs from 'sha.js';

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        const user = {
            sign: data.get('sign'),
            name: data.get('name'),
            email: data.get('email'),
            password: shajs('sha256').update(data.get('password') as string).digest('hex')
        };

        console.log(user)
    }
};
