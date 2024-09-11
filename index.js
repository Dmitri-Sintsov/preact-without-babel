import { h, Component, render } from 'https://unpkg.com/preact?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);


/** Example classful component */
class App extends Component {
	componentDidMount() {
		this.setState({ message: 'Hello!' });
	}
	render(props, state) {
		return html`
            <div id="app">
                <${Header} message="${state.message}"/>
                <${Main} />
            </div>
        `;
	}
}


/** Components can just be pure functions */
const Header = (props) => {
	return html`
	    <header>
	        <h1>App</h1>
            <h2>${props.message}</h2>
	    </header>
	`;
};


/** Instead of JSX, use: htm */
class Main extends Component {
	render() {
		const items = [1,2,3,4,5].map( (item) => (
			html`<li id="${item}">Item ${item}</li>`
		));
		return html`
            <main>
                <ul>${items}</ul>
            </main>
        `;
	}
}


render(h(App), document.body);
