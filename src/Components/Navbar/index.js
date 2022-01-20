import React from 'react'

export default function Navbar(props) {
    const colors = [
        {
            "color": "black",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255, 255, 255, 1],
                "hex": "#000"
            }
        },
        {
            "color": "white",
            "category": "value",
            "code": {
                "rgba": [0, 0, 0, 1],
                "hex": "#FFF"
            }
        },
        {
            "color": "red",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255, 0, 0, 1],
                "hex": "#ff0000"
            }
        },
        {
            "color": "blue",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [0, 0, 255, 1],
                "hex": "#00F"
            }
        },
        {
            "color": "yellow",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255, 255, 0, 1],
                "hex": "#FF0"
            }
        },
        {
            "color": "green",
            "category": "hue",
            "type": "secondary",
            "code": {
                "rgba": [0, 255, 0, 1],
                "hex": "#0F0"
            }
        },
    ]
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mb-5`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                    </ul>
                    <div className="dropdown me-3">
                        <select id="box1" onChange={props.changeTheme}>
                            {
                                colors.map((color,index) => (
                                    <option value={color.code.hex} key={index} style={{background:color.code.hex,color:"white"}}>{color.color}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-check form-switch mt-3">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={props.toggleMode} />
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'} pb-2`} htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'}</label>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}
