export default function App() {
    const blah = {
        padding: "16px",
        gap: "16px",
        display: "flex"
    }
    return (
        <div calssName="container">
            <div>
                <img src="https://tse1.mm.bing.net/th/id/OIP.4cmK9d36bF0F7-V-SaVPnAHaG_?rs=1&pid=ImgDetMain" width="360px" alt="image"></img>
            </div>
            <div>
                <h1>

                </h1>
            </div>
        </div>
    )
}

const rootElement = document.getElementById("root")
const root = createRoot(rootElement);

root.render(<App />);

