function MyButton({ onClick }) {
    return (
        <button style={styles.buttonStyle} onClick={onClick}>
            Submit
        </button>
    )
}

const styles = {
    buttonStyle: {
        height: 30,
        width: 100,
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: '10px',
        borderColor: 'blue'
    }
}
export default MyButton;