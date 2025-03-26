import { MemberStatus, type Member } from "$models/Member";
import { loadDummyMembers } from "./dummyMembers";

// all members temporary storage
let allMembers = loadDummyMembers();
let lastIndex = 18;

export function getMembers(categoryID: number, status: MemberStatus): Member[] {
    const members = allMembers.filter((member) => {
        const criteria = 
            member.categoryID === categoryID &&
            member.status === status

        return criteria
    });

    return members
}

export function getMember(id: number): Member | undefined {
    const foundMember = allMembers.find((mem) => { return mem.id === id })
    return foundMember
}

export function addNewMember(title: string, name: string, lastName: string, biography: string, caetgoryID: number) {
    const newMember = constructNewMemberObject(title, name, lastName, biography, caetgoryID);
    allMembers.push(newMember);
}


function constructNewMemberObject(title: string, name: string, lastName: string, biography: string, caetgoryID: number): Member {   
    lastIndex++

    const aMember: Member = {
        id: lastIndex,
        categoryID: caetgoryID,
        title: title,
        name: name,
        lastName: lastName,
        biography: biography,
        status: MemberStatus.CANDIDATE
    }

    return aMember;
}