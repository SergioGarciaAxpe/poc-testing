import { render } from "@testing-library/react"
import App from "./App";

test('render main page correctly', () => {
    render(<App />);
    expect(true).toBeTruthy();
})