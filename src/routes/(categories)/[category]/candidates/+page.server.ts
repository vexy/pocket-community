import type { PageServerLoad } from './$types';
import { getMembers } from '$lib/MembersService';
import { MemberStatus } from '$models/Member';

export const load = (async ({ parent }) => {
    // load all candidates of this category
    const parentData = await parent();
    const currentCategory = parentData.selectedCategory;
    //
    const candidates = getMembers(currentCategory.id, MemberStatus.CANDIDATE);

    return {
        candidates
    };
}) satisfies PageServerLoad;