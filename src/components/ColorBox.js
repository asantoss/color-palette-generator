
class ColorBox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLocked: false
        }
    }
    changeColor = (e) => {
        e.preventDefault();
        return isLocked && this.props.changeColor()
    }
    setLocked = (e) => {
        this.setState({ ...this.state, isLocked: !this.state.isLocked })
    }


    render() {
        const { boxIndex, color, isLocked } = this.props
        const colorBoxStyles = {
            backgroundColor: this.props.currentColor,
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            backgroundColor: color,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            margin: '1px'
        }
        return (
            <div style={colorBoxStyles}>
                <div>
                    <h5>{color.toUpperCase()}</h5>
                    <button className="btn btn-outline-dark" onClick={() => this.props.handleLock(boxIndex)}>{isLocked ? 'Unlock' : 'Lock'}</button>
                </div>
            </div>
        )
    }
}


// c6d339ac