import { Injectable } from '@nestjs/common';
import { Books } from '../Data/booksCount';
import { Users } from '../Data/users'
@Injectable()
 export class UserService {
     constructor(private book:Books, private users:Users) {}

     getUserCurrentIssue(){
        let books=[];
        return books;
     }
    async assignNewBooks(bookArray,user){
        let Allbooks = this.book.getAllbooks();
        let returnArr=[];
        let obj={};
        bookArray.array.forEach(current => {
            Allbooks.map(book=>{
                if(book.uniqueIdentifier == current.uniqueIdentifier){
                    if(book.totalCount >0){
                        book.totalCount--;
                         this.UpdateUsersubs(book.uniqueIdentifier,user );
                         obj={book:book.uniqueIdentifier, status:'Updated'}
                    }else{
                       obj={book:book.uniqueIdentifier, status:'No stock'}  
                    }
                    returnArr.push(obj); 
                }});
        });
         return {status:200, data:returnArr};
        
     }

      UpdateUsersubs(book,user){
      let users= this.users.getUsers;
      users=user.map(currentuser=>{
          if(currentuser==user ){
              currentuser.books.push(book);
          }
      }) 
      this.users.setUsers(users);
     }
 }