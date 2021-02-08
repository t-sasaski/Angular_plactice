import { Injectable } from '@angular/core';
import { clearScreenDown } from 'readline';

@Injectable()
export class OverService {
    id ='Normal';
    show() {
        return `${this.id} Service`;
    }
}

@Injectable()
export class SpecialOverService extends OverService {
    id = 'Special';
}
1