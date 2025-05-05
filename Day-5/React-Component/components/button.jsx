function Button(properties) {
    console.log(properties);
    const { text } = properties;
    const handleClick = () => {
        alert(`Button Clicked!`);
    }
    return <button onClick={handleClick}>{text}</button>
}

export default Button;