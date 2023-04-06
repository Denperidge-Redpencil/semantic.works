import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SelectComponent extends Component {
    value = "";
    
    @action
    valueChanged(e) {
        this.value = e.target.value;
        console.log(this.onChange)

        if (this.onChange) {
            this.onChange(this.value);
            console.log("e")
        }
    }
}
