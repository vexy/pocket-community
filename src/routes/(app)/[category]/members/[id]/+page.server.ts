import { getMember } from '$lib/MembersService';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const memberID = params.id;
    
    // load member details
    const memberData = getMember(Number(memberID));

    return {
        memberData
    };
}) satisfies PageServerLoad;