import ReactDOM from "react-dom/client";
import App from "./App";

export function mount(element: HTMLElement) {
    const root = ReactDOM.createRoot(element);
    root.render(<App />);
    return () => root.unmount();
}
