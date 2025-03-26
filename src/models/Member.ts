export interface Member {
    id: number,
    categoryID: number,
    title: string,
    name: string,
    lastName: string,
    biography: string,
    status: MemberStatus
    
    //TODO: Add profile photo data later
}

export enum MemberStatus {
    ACTIVE = 0,
    CANDIDATE
}