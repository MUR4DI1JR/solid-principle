// class Person {
//
// }
//
// class Member extends Person {
//     access () {
//         console.log("you have access");
//     }
// };
//
// class Guest extends Person {
//     isGuest = true
// }
//
// class Frontend extends Member {
//     createWebSite () {
//
//     }
// }
//
// class Backend extends Member {
//     createWebServer () {
//
//     }
// }
//
// class PersonFromDiferentCompany extends Guest {
//     access() {
//         throw new Error("you haven't access! Go to yourself...")
//     }
// }
//
// function openSecretDoor (member) {
//     member.access()
// }
//
// openSecretDoor(new Frontend());
// // openSecretDoor(new PersonFromDiferentCompany()); There should be member

class Component {
    isComponent = true
}

class ComponentWithTemplate extends Component{
    render() {
        return `<div>Component</div>`
    }
}

class HighOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
    onInit () {

    }
}

class FooterComponent extends ComponentWithTemplate {
    afterInit () {}
}

class HOC extends HighOrderComponent {
    render() {
        throw new Error('render is impossible here')
    }

    wrapComponent(component) {
        component.wrapped = true;
        return component
    }
}

function renderComponent (component) {
    console.log(component.render());
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());

