export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        const user = {
            sign: data.get('sign'),
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password')
        };

        console.log(user)
    }
};
