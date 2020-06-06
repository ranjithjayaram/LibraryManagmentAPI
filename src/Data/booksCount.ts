export class Books{

public  Allbooks=[
    {
        uniqueIdentifier:'001',
        totalCount:3
    },
    {
        uniqueIdentifier:'002',
        totalCount:2
    },
    {
        uniqueIdentifier:'003',
        totalCount:5
    },
    {
        uniqueIdentifier:'004',
        totalCount:3
    },
    {
        uniqueIdentifier:'005',
        totalCount:7
    }
]
getAllbooks(){
    return this.Allbooks;
}
updateAllbooks(books){
    this.Allbooks=books
}
}