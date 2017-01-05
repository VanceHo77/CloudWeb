import { Injectable } from '@angular/core';

@Injectable()
export class CrumbsService {

    createThrLayer(thrName: string) {
        var node = document.createElement("li");
        var textnode = document.createTextNode(thrName);
        node.setAttribute('class', 'active');
        node.setAttribute('id', 'crumbsThrLayer');
        node.appendChild(textnode);
        document.getElementById("crumbs").appendChild(node);
    }
}
