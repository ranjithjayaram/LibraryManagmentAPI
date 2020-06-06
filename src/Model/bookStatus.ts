import { BookInfo } from './bookInfo';
export class BookStatus{
    constructor() {}
    public issuedBooksCount:Number;
    public availableBooksCount:Number;
    public issuedBooksdetails:Array<BookInfo>;
    }