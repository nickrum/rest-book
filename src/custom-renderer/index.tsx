import { h, render } from 'preact';
import { Response } from './renderer';
import './style.css';

const api = acquireNotebookRendererApi('rest-book');

api.onDidCreateOutput(event => {
	const data = event.output.data[event.mimeType];
	render(<Response response={data} />, event.element);
});