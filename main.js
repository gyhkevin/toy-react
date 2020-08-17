import {createElement, Component, render} from "./toy-react.js"

class MyCompontent extends Component{
    render() {
        return <div>
            <h1>my component</h1>
            {this.children}
        </div>
    }
}

render(<MyCompontent id="a" class="b">
    <div>abc</div>
    <div>***</div>
    <div>xyz</div>
</MyCompontent>, document.body);