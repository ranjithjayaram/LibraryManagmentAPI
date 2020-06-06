import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
@Injectable()
export class LibraryService {
    constructor(private _user:UserService) {}
    async issueNewbooks(books:Array<string>, user:string,date:Date){
        if(user){
            let currentIssue= this._user.getUserCurrentIssue();
            if(!currentIssue.length){
              let returnValue= await this._user.assignNewBooks(books,user);
                return returnValue;
            } else{
                return {status:200, data:'Cannot Assign new books since current subscription is still active.'}
            }
        }
         else{
            return {status:200, data:'No user recognized.'}  
         }
    }
    returnIssuedBooks(books:Array<string>, user:string,date:Date){
          
    }
}