import { Injectable } from '@nestjs/common';
import { BookStatus } from '../Model/bookStatus'
@Injectable()
export class BookService {
    getCurrentBookStatus():BookStatus{
        return null;
    }
}