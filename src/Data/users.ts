export class Users{
    public users=[
        {
            userId:'U001',
            books:['001','002','003'],
            updatedDate:new Date('21/06/2020')
        },
        {
            userId:'U002',
            books:['003','002','005'],
            updatedDate:new Date('22/06/2020')
        },
        {
            userId:'U001',
            books:['002','004','003'],
            updatedDate:new Date('21/06/2020')
        },
        {
            userId:'U001',
            books:['001','003','005'],
            updatedDate:new Date('29/06/2020')
        },
        {
            userId:'U001',
            books:['002','004','003'],
            updatedDate:new Date('23/06/2020')
        }
    ]

    getUsers(){
        return this.users;
    }
    setUsers(users){
        this.users=users;
    }
}