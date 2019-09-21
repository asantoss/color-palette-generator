class BoxesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colorBoxes: [
                { color: '#FFFFFF', isLocked: false },
                { color: '#FFFFFF', isLocked: false },
                { color: '#FFFFFF', isLocked: false },
                { color: '#FFFFFF', isLocked: false },
                { color: '#FFFFFF', isLocked: false }
            ]
        }
    }

    componentDidMount() {
        return this.changeColors()
    }

    handleLock = (index) => {
        const { colorBoxes } = this.state;
        const targetBox = colorBoxes[index]
        this.setState({ ...this.state, colorBoxes: [...this.state.colorBoxes.slice(0, index), { color: targetBox.color, isLocked: !targetBox.isLocked }, ...this.state.colorBoxes.slice(index + 1)] })
    }

    changeColors = () => {
        const { colorBoxes } = this.state;
        const newColors = colorBoxes.map(box => {
            const { color, isLocked } = box
            const newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            return isLocked ? box : { ...box, color: newColor }
        });
        this.setState({ colorBoxes: newColors })
    }
    render() {
        const { colorBoxes } = this.state
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <button className='btn btn-dark' onClick={this.changeColors}>{colorBoxes.every(box => box.isLocked === true) ? 'All Colors Locked' : 'Randomize Color'}</button>
                <div style={{ display: 'flex', width: '100%', borderRadius: '5px' }}>
                    {colorBoxes.map((box, i) => {
                        return <ColorBox
                            boxIndex={i}
                            key={i}
                            color={box.color}
                            isLocked={box.isLocked}
                            handleLock={this.handleLock}
                            setColors={this.changeColors} />
                    })}
                </div>

            </div>
        )
    }
}
