
import {Component} from 'angular2/core'
import {AuthorService} from './course.service'

@Component({
    selector: 'authors',
    template: `
        <h2>Authers</h2>
        {{ title }}
        <ul>
            <li *ngFor="#author of authors">
            {{ author }}
            </li>
        </ul>
        `,
    providers: [AuthorService]

})

export class AuthorComponent{
    title = 'Author list';
    authors;

    constructor( authorService : AuthorService){
        this.authors = authorService.getauthor();
    }

}