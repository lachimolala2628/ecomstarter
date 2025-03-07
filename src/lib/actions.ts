'use server';

import { wixClientServer } from "./wixClientServer";

export const UpdateUser = async (FormData: FormData) => {

    const wixClient = await wixClientServer();

    const id = FormData.get('id') as string;
    const username = FormData.get('username') as string;
    const firstName = FormData.get('firstName') as string;
    const lastName = FormData.get('lastName') as string;
    const phone = FormData.get('phone') as string;
    const email = FormData.get('email') as string;

    try {
        const response = await wixClient.members.updateMember(id, {
            contact: {
                firstName: firstName || undefined,
                lastName: lastName || undefined,
                phones: [phone] || undefined,
            },
            loginEmail: email || undefined,
            profile: {
                nickname: username || undefined,
            }
        });

        console.log(response);
    } catch (error) {
        console.log(error);
    }

} 