import type { PageServerLoad } from './$types';
import { getMembers } from '$lib/MembersService';
import { MemberStatus } from '$models/Member';

export const load = (async ({ parent }) => {
    // load all members of this category
    const parentData = await parent();
    const currentCategory = parentData.selectedCategory;
    //
    const members = getMembers(currentCategory.id, MemberStatus.ACTIVE);

    return {
        members
    };
}) satisfies PageServerLoad;