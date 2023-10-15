import sha1 from "sha1";

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        const user = {
            sign: data.get('sign'),
            name: data.get('name'),
            email: data.get('email'),
            password: sha1(data.get('password') as string)
        };

        console.log(user)
    }
};
